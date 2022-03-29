import Accordion from './accordion';

export default {
    extends: Accordion,

    data: {
        targets: '> .vds-parent',
        toggle: '> a',
        content: '> ul',
    },
};
