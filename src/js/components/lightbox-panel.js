import Animations from './internal/lightbox-animations';
import Container from '../mixin/container';
import Modal from '../mixin/modal';
import Slideshow from '../mixin/slideshow';
import Togglable from '../mixin/togglable';
import {
    $,
    addClass,
    append,
    attr,
    fragment,
    getImage,
    getIndex,
    html,
    on,
    pointerDown,
    pointerMove,
    removeClass,
    Transition,
    trigger,
} from 'vds-util';

export default {
    mixins: [Container, Modal, Togglable, Slideshow],

    functional: true,

    props: {
        delayControls: Number,
        preload: Number,
        videoAutoplay: Boolean,
        template: String,
    },

    data: () => ({
        preload: 1,
        videoAutoplay: false,
        delayControls: 3000,
        items: [],
        cls: 'vds-open',
        clsPage: 'vds-lightbox-page',
        selList: '.vds-lightbox-items',
        attrItem: 'vds-lightbox-item',
        selClose: '.vds-close-large',
        selCaption: '.vds-lightbox-caption',
        pauseOnHover: false,
        velocity: 2,
        Animations,
        template: `<div class="vds-lightbox vds-overflow-hidden">
                        <ul class="vds-lightbox-items"></ul>
                        <div class="vds-lightbox-toolbar vds-position-top vds-text-right vds-transition-slide-top vds-transition-opaque">
                            <button class="vds-lightbox-toolbar-icon vds-close-large" type="button" vds-close></button>
                         </div>
                        <a class="vds-lightbox-button vds-position-center-left vds-position-medium vds-transition-fade" href vds-slidenav-previous vds-lightbox-item="previous"></a>
                        <a class="vds-lightbox-button vds-position-center-right vds-position-medium vds-transition-fade" href vds-slidenav-next vds-lightbox-item="next"></a>
                        <div class="vds-lightbox-toolbar vds-lightbox-caption vds-position-bottom vds-text-center vds-transition-slide-bottom vds-transition-opaque"></div>
                    </div>`,
    }),

    created() {
        const $el = $(this.template);
        const list = $(this.selList, $el);
        this.items.forEach(() => append(list, '<li>'));

        this.$mount(append(this.container, $el));
    },

    computed: {
        caption({ selCaption }, $el) {
            return $(selCaption, $el);
        },
    },

    events: [
        {
            name: `${pointerMove} ${pointerDown} keydown`,

            handler: 'showControls',
        },

        {
            name: 'click',

            self: true,

            delegate() {
                return this.selSlides;
            },

            handler(e) {
                if (e.defaultPrevented) {
                    return;
                }

                this.hide();
            },
        },

        {
            name: 'shown',

            self: true,

            handler() {
                this.showControls();
            },
        },

        {
            name: 'hide',

            self: true,

            handler() {
                this.hideControls();

                removeClass(this.slides, this.clsActive);
                Transition.stop(this.slides);
            },
        },

        {
            name: 'hidden',

            self: true,

            handler() {
                this.$destroy(true);
            },
        },

        {
            name: 'keyup',

            el() {
                return document;
            },

            handler(e) {
                if (!this.isToggled(this.$el) || !this.draggable) {
                    return;
                }

                switch (e.keyCode) {
                    case 37:
                        this.show('previous');
                        break;
                    case 39:
                        this.show('next');
                        break;
                }
            },
        },

        {
            name: 'beforeitemshow',

            handler(e) {
                if (this.isToggled()) {
                    return;
                }

                this.draggable = false;

                e.preventDefault();

                this.toggleElement(this.$el, true, false);

                this.animation = Animations['scale'];
                removeClass(e.target, this.clsActive);
                this.stack.splice(1, 0, this.index);
            },
        },

        {
            name: 'itemshow',

            handler() {
                html(this.caption, this.getItem().caption || '');

                for (let j = -this.preload; j <= this.preload; j++) {
                    this.loadItem(this.index + j);
                }
            },
        },

        {
            name: 'itemshown',

            handler() {
                this.draggable = this.$props.draggable;
            },
        },

        {
            name: 'itemload',

            async handler(_, item) {
                const { source: src, type, alt = '', poster, attrs = {} } = item;

                this.setItem(item, '<span vds-spinner></span>');

                if (!src) {
                    return;
                }

                let matches;
                const iframeAttrs = {
                    frameborder: '0',
                    allow: 'autoplay',
                    allowfullscreen: '',
                    style: 'max-width: 100%; box-sizing: border-box;',
                    'vds-responsive': '',
                    'vds-video': `${this.videoAutoplay}`,
                };

                // Image
                if (type === 'image' || src.match(/\.(avif|jpe?g|a?png|gif|svg|webp)($|\?)/i)) {
                    try {
                        const { width, height } = await getImage(src, attrs.srcset, attrs.size);
                        this.setItem(item, createEl('img', { src, width, height, alt, ...attrs }));
                    } catch (e) {
                        this.setError(item);
                    }

                    // Video
                } else if (type === 'video' || src.match(/\.(mp4|webm|ogv)($|\?)/i)) {
                    const video = createEl('video', {
                        src,
                        poster,
                        controls: '',
                        playsinline: '',
                        'vds-video': `${this.videoAutoplay}`,
                        ...attrs,
                    });

                    on(video, 'loadedmetadata', () => {
                        attr(video, { width: video.videoWidth, height: video.videoHeight });
                        this.setItem(item, video);
                    });
                    on(video, 'error', () => this.setError(item));

                    // Iframe
                } else if (type === 'iframe' || src.match(/\.(html|php)($|\?)/i)) {
                    this.setItem(
                        item,
                        createEl('iframe', {
                            src,
                            frameborder: '0',
                            allowfullscreen: '',
                            class: 'vds-lightbox-iframe',
                            ...attrs,
                        })
                    );

                    // YouTube
                } else if (
                    (matches = src.match(
                        /\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/
                    ))
                ) {
                    this.setItem(
                        item,
                        createEl('iframe', {
                            src: `https://www.youtube${matches[1] || ''}.com/embed/${matches[2]}${
                                matches[3] ? `?${matches[3]}` : ''
                            }`,
                            width: 1920,
                            height: 1080,
                            ...iframeAttrs,
                            ...attrs,
                        })
                    );

                    // Vimeo
                } else if ((matches = src.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/))) {
                    try {
                        const { height, width } = await (
                            await fetch(
                                `https://vimeo.com/api/oembed.json?maxwidth=1920&url=${encodeURI(
                                    src
                                )}`,
                                {
                                    credentials: 'omit',
                                }
                            )
                        ).json();

                        this.setItem(
                            item,
                            createEl('iframe', {
                                src: `https://player.vimeo.com/video/${matches[1]}${
                                    matches[2] ? `?${matches[2]}` : ''
                                }`,
                                width,
                                height,
                                ...iframeAttrs,
                                ...attrs,
                            })
                        );
                    } catch (e) {
                        this.setError(item);
                    }
                }
            },
        },
    ],

    methods: {
        loadItem(index = this.index) {
            const item = this.getItem(index);

            if (!this.getSlide(item).childElementCount) {
                trigger(this.$el, 'itemload', [item]);
            }
        },

        getItem(index = this.index) {
            return this.items[getIndex(index, this.slides)];
        },

        setItem(item, content) {
            trigger(this.$el, 'itemloaded', [this, html(this.getSlide(item), content)]);
        },

        getSlide(item) {
            return this.slides[this.items.indexOf(item)];
        },

        setError(item) {
            this.setItem(item, '<span vds-icon="icon: bolt; ratio: 2"></span>');
        },

        showControls() {
            clearTimeout(this.controlsTimer);
            this.controlsTimer = setTimeout(this.hideControls, this.delayControls);

            addClass(this.$el, 'vds-active', 'vds-transition-active');
        },

        hideControls() {
            removeClass(this.$el, 'vds-active', 'vds-transition-active');
        },
    },
};

function createEl(tag, attrs) {
    const el = fragment(`<${tag}>`);
    attr(el, attrs);
    return el;
}
