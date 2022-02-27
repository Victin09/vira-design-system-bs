import { Remarkable } from 'remarkable';
import { linkify } from 'remarkable/linkify';
import vdsPlugin from 'remarkable-numl';

/** Parse Markdown into an Vds String. */
export default function markdownToVds(md, options = {}) {
  const converter = new Remarkable('full', {
    typographer: options.typographer,
  });

  if (options.linkify) {
    converter.use(linkify);
  }

  converter.use(vdsPlugin);

  let html = converter.render(md);

  if (options.inline) {
    html = html.replace(/^<vds-block padding="1x 0">/, '')
      .replace(/<\/vds-block>$/, '');
  }

  return html;
}
