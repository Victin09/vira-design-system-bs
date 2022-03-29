/* global marked */

import uniqid from 'uniqid';
import {escape} from 'he';
import {append, includes, remove} from 'vds-util';

export function sluggify(text) {
    return text.toLowerCase().trim().replace(/&amp;| & /g, '-and-').replace(/&.+?;/g, '').replace(/[\s\W-]+/g, '-');
}

export function parse(markdown, cb) {

    const renderer = new marked.Renderer({langPrefix: 'lang-'});
    const base = new marked.Renderer({langPrefix: 'lang-'});
    const modal = (href, text) => {
        const slug = `modal-${sluggify(text)}`;
        return `<a href="#${slug}" vds-toggle><p class="vds-margin-large-bottom"><img src="${href}" alt="${text}"></p></a>
                <div id="${slug}" class="vds-modal-full" vds-modal>
                    <div class="vds-modal-dialog vds-flex vds-flex-center vds-flex-middle vds-height-viewport">
                        <button class="vds-modal-close-full" type="button" vds-close></button>
                        <img src="${href}" alt="${text}">
                    </div>
                </div>`;
    };
    const example = code => {

        const id = uniqid('code-');

        return `<div class="vds-position-relative vds-margin-medium">

                    <ul vds-tab="swiping: false">
                        <li><a href="#">Preview</a></li>
                        <li><a href="#">Markup</a></li>
                    </ul>

                    <ul class="vds-switcher vds-margin">
                        <li>${code}</li>
                        <li><pre><code id="${id}" class="lang-html">${escape(code)}</code></pre></li>
                    </ul>

                    <div class="vds-position-top-right vds-margin-small-top">
                        <ul class="vds-iconnav">
                            <li><a class="js-copy" vds-tooltip="Copy to Clipboard" rel="#${id}"><img class="vds-icon" src="../images/icon-clipboard.svg" vds-svg></a></li>
                            <li><a class="js-codepen" vds-tooltip="Edit on Codepen" rel="#${id}"><img class="vds-icon" src="../images/icon-flask.svg" vds-svg></a></li>
                        </ul>
                    </div>
                </div>`;
    };

    renderer.strong = text => text === 'Note' ? `<span class="vds-label">${text}</span>` : `<strong>${text}</strong>`;
    renderer.list = text => `<ul class="vds-list vds-list-disc">${text}</ul>`;
    renderer.image = (href, title, text) => href.match(/modal$/) ? modal(href, text) : base.image(href, title, text);
    renderer.link = (href, title, text) => href.match(/\.md/) ? base.link(href.replace(/.md(.*)/, '$1'), title, text) : base.link(href, title, text);
    renderer.code = (code, lang, escaped) => lang === 'example' ? example(code) : '<div class="vds-margin-medium">' + base.code(code, lang, escaped) + '</div>';
    renderer.hr = () => '<hr class="vds-margin-large">';
    renderer.table = (header, body) => `<div class="vds-overflow-auto"><table class="vds-table vds-table-divider"><thead>${header}</thead><tbody>${body}</tbody></table></div>`;
    renderer.heading = (text, level) => `<h${level} id="${sluggify(text)}" class="vds-h${level > 1 ? level + 1 : level} tm-heading-fragment"><a href="#${sluggify(text)}">${text}</a></h${level}>`;

    return marked(markdown, {renderer}, (err, content) => {

        if (includes(content, '{%isodate%}')) {
            content = content.replace(/{%isodate%}/g, (new Date(Date.now() + 864e5 * 7)).toISOString().replace(/\.\d+Z/, '+00:00'));
        }

        if (cb) {
            cb.apply(this, [err, content]);
        }
    });
}

// https://blog.codepen.io/documentation/api/prefill/
export function openOnCodepen(code) {

    const regexp = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    const scripts = (code.match(regexp) || []).join('\n').replace(/<\/?script>/g, '');
    const base = location.href.substring(0, location.href.lastIndexOf('/'));

    code = code
        .replace(regexp, '')
        .replace(/<(?:img|a)[^>]+(?:src|href)="(?!\/|#|[a-z0-9\-.]+:)(.+?)"|url\((?!\/|#|[a-z0-9\-.]+:)(.+?)\)/g, (match, src, url) => match.replace(src || url, `${base}/${src || url}`));

    const nc = Date.now() % 9999;
    let data = {
        title: '',
        description: '',
        html: code,
        html_pre_processor: 'none',
        css: '',
        css_pre_processor: 'none',
        css_starter: 'neither',
        css_prefix_free: false,
        js: scripts || '',
        js_pre_processor: 'none',
        js_modernizr: false,
        html_classes: '',
        css_external: `https://getvds.com/assets/vds/dist/css/vds.css?nc=${nc}`,
        js_external: `https://getvds.com/assets/vds/dist/js/vds.js?nc=${nc};https://getvds.com/assets/vds/dist/js/vds-icons.js?nc=${nc}`
    };

    data = JSON.stringify(data)
        // Quotes will screw up the JSON
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');

    const [form] = append(document.body, `<form action="https://codepen.io/pen/define" method="POST" target="_blank">
            <input type="hidden" name="data" value='${data}'>
        </form>`);

    form.submit();
    remove(form);

}

export function html(el, html) {
    el.innerHTML = '';
    const range = document.createRange();
    range.selectNode(el);
    el.appendChild(range.createContextualFragment(html));
}
