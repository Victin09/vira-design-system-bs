import Modal from '../mixin/modal';
import {
    $,
    addClass,
    css,
    Deferred,
    hasClass,
    height,
    html,
    isString,
    on,
    removeClass,
} from 'vds-util';

export default {
    install,

    mixins: [Modal],

    data: {
        clsPage: 'vds-modal-page',
        selPanel: '.vds-modal-dialog',
        selClose:
            '.vds-modal-close, .vds-modal-close-default, .vds-modal-close-outside, .vds-modal-close-full',
    },

    events: [
        {
            name: 'show',

            self: true,

            handler() {
                if (hasClass(this.panel, 'vds-margin-auto-vertical')) {
                    addClass(this.$el, 'vds-flex');
                } else {
                    css(this.$el, 'display', 'block');
                }

                height(this.$el); // force reflow
            },
        },

        {
            name: 'hidden',

            self: true,

            handler() {
                css(this.$el, 'display', '');
                removeClass(this.$el, 'vds-flex');
            },
        },
    ],
};

function install({ modal }) {
    modal.dialog = function (content, options) {
        const dialog = modal(
            `<div class="vds-modal">
                <div class="vds-modal-dialog">${content}</div>
             </div>`,
            options
        );

        dialog.show();

        on(
            dialog.$el,
            'hidden',
            async () => {
                await Promise.resolve();
                dialog.$destroy(true);
            },
            { self: true }
        );

        return dialog;
    };

    modal.alert = function (message, options) {
        return openDialog(
            ({ labels }) => `<div class="vds-modal-body">${
                isString(message) ? message : html(message)
            }</div>
            <div class="vds-modal-footer vds-text-right">
                <button class="vds-button vds-button-primary vds-modal-close" autofocus>${
                    labels.ok
                }</button>
            </div>`,
            options,
            (deferred) => deferred.resolve()
        );
    };

    modal.confirm = function (message, options) {
        return openDialog(
            ({ labels }) => `<form>
                <div class="vds-modal-body">${isString(message) ? message : html(message)}</div>
                <div class="vds-modal-footer vds-text-right">
                    <button class="vds-button vds-button-default vds-modal-close" type="button">${
                        labels.cancel
                    }</button>
                    <button class="vds-button vds-button-primary" autofocus>${labels.ok}</button>
                </div>
            </form>`,
            options,
            (deferred) => deferred.reject()
        );
    };

    modal.prompt = function (message, value, options) {
        return openDialog(
            ({ labels }) => `<form class="vds-form-stacked">
                <div class="vds-modal-body">
                    <label>${isString(message) ? message : html(message)}</label>
                    <input class="vds-input" value="${value || ''}" autofocus>
                </div>
                <div class="vds-modal-footer vds-text-right">
                    <button class="vds-button vds-button-default vds-modal-close" type="button">${
                        labels.cancel
                    }</button>
                    <button class="vds-button vds-button-primary">${labels.ok}</button>
                </div>
            </form>`,
            options,
            (deferred) => deferred.resolve(null),
            (dialog) => $('input', dialog.$el).value
        );
    };

    modal.labels = {
        ok: 'Ok',
        cancel: 'Cancel',
    };

    function openDialog(tmpl, options, hideFn, submitFn) {
        options = { bgClose: false, escClose: true, labels: modal.labels, ...options };

        const dialog = modal.dialog(tmpl(options), options);
        const deferred = new Deferred();

        let resolved = false;

        on(dialog.$el, 'submit', 'form', (e) => {
            e.preventDefault();
            deferred.resolve(submitFn?.(dialog));
            resolved = true;
            dialog.hide();
        });

        on(dialog.$el, 'hide', () => !resolved && hideFn(deferred));

        deferred.promise.dialog = dialog;

        return deferred.promise;
    }
}
