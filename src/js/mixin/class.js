import { addClass, hasClass } from 'vds-util';

export default {
    connected() {
        !hasClass(this.$el, this.$name) && addClass(this.$el, this.$name);
    },
};
