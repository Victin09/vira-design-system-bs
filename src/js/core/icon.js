import SVG from './svg';
import closeIcon from '../../images/components/close-icon.svg';
import closeLarge from '../../images/components/close-large.svg';
import marker from '../../images/components/marker.svg';
import navbarToggleIcon from '../../images/components/navbar-toggle-icon.svg';
import overlayIcon from '../../images/components/overlay-icon.svg';
import paginationNext from '../../images/components/pagination-next.svg';
import paginationPrevious from '../../images/components/pagination-previous.svg';
import searchIcon from '../../images/components/search-icon.svg';
import searchLarge from '../../images/components/search-large.svg';
import searchNavbar from '../../images/components/search-navbar.svg';
import slidenavNext from '../../images/components/slidenav-next.svg';
import slidenavNextLarge from '../../images/components/slidenav-next-large.svg';
import slidenavPrevious from '../../images/components/slidenav-previous.svg';
import slidenavPreviousLarge from '../../images/components/slidenav-previous-large.svg';
import spinner from '../../images/components/spinner.svg';
import totop from '../../images/components/totop.svg';
import {
    $,
    addClass,
    apply,
    css,
    each,
    hasClass,
    hyphenate,
    isRtl,
    isString,
    parents,
    swap,
} from 'vds-util';

const icons = {
    spinner,
    totop,
    marker,
    'close-icon': closeIcon,
    'close-large': closeLarge,
    'navbar-toggle-icon': navbarToggleIcon,
    'overlay-icon': overlayIcon,
    'pagination-next': paginationNext,
    'pagination-previous': paginationPrevious,
    'search-icon': searchIcon,
    'search-large': searchLarge,
    'search-navbar': searchNavbar,
    'slidenav-next': slidenavNext,
    'slidenav-next-large': slidenavNextLarge,
    'slidenav-previous': slidenavPrevious,
    'slidenav-previous-large': slidenavPreviousLarge,
};

const Icon = {
    install,

    extends: SVG,

    args: 'icon',

    props: ['icon'],

    data: {
        include: ['focusable'],
    },

    isIcon: true,

    beforeConnect() {
        addClass(this.$el, 'vds-icon');
    },

    methods: {
        async getSvg() {
            const icon = getIcon(this.icon);

            if (!icon) {
                throw 'Icon not found.';
            }

            return icon;
        },
    },
};

export default Icon;

export const IconComponent = {
    args: false,

    extends: Icon,

    data: (vm) => ({
        icon: hyphenate(vm.constructor.options.name),
    }),

    beforeConnect() {
        addClass(this.$el, this.$name);
    },
};

export const Slidenav = {
    extends: IconComponent,

    beforeConnect() {
        addClass(this.$el, 'vds-slidenav');
        const icon = this.$props.icon;
        this.icon = hasClass(this.$el, 'vds-slidenav-large') ? `${icon}-large` : icon;
    },
};

export const Search = {
    extends: IconComponent,

    beforeConnect() {
        this.icon =
            hasClass(this.$el, 'vds-search-icon') && parents(this.$el, '.vds-search-large').length
                ? 'search-large'
                : parents(this.$el, '.vds-search-navbar').length
                ? 'search-navbar'
                : this.$props.icon;
    },
};

export const Close = {
    extends: IconComponent,

    beforeConnect() {
        this.icon = `close-${hasClass(this.$el, 'vds-close-large') ? 'large' : 'icon'}`;
    },
};

export const Spinner = {
    extends: IconComponent,

    methods: {
        async getSvg() {
            const icon = await Icon.methods.getSvg.call(this);

            if (this.ratio !== 1) {
                css($('circle', icon), 'strokeWidth', 1 / this.ratio);
            }

            return icon;
        },
    },
};

const parsed = {};
function install(ViraDesignSystem) {
    ViraDesignSystem.icon.add = (name, svg) => {
        const added = isString(name) ? { [name]: svg } : name;
        each(added, (svg, name) => {
            icons[name] = svg;
            delete parsed[name];
        });

        if (ViraDesignSystem._initialized) {
            apply(document.body, (el) =>
                each(ViraDesignSystem.getComponents(el), (cmp) => {
                    cmp.$options.isIcon && cmp.icon in added && cmp.$reset();
                })
            );
        }
    };
}

function getIcon(icon) {
    if (!icons[icon]) {
        return null;
    }

    if (!parsed[icon]) {
        parsed[icon] = $((icons[applyRtl(icon)] || icons[icon]).trim());
    }

    return parsed[icon].cloneNode(true);
}

function applyRtl(icon) {
    return isRtl ? swap(swap(icon, 'left', 'right'), 'previous', 'next') : icon;
}
