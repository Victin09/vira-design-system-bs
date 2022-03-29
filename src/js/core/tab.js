import Switcher from './switcher';
import Class from '../mixin/class';
import { hasClass } from 'vds-util';

export default {
    mixins: [Class],

    extends: Switcher,

    props: {
        media: Boolean,
    },

    data: {
        media: 960,
        attrItem: 'vds-tab-item',
    },

    connected() {
        const cls = hasClass(this.$el, 'vds-tab-left')
            ? 'vds-tab-left'
            : hasClass(this.$el, 'vds-tab-right')
            ? 'vds-tab-right'
            : false;

        if (cls) {
            this.$create('toggle', this.$el, { cls, mode: 'media', media: this.media });
        }
    },
};
