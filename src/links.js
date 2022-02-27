import { deepQueryAll } from './helpers';
import { ROOT } from './context';

let timerId;

function stripQuery(href) {
  return href.replace(/\?.+$/, '');
}

function handleHashLinks(links) {
  const arr = [];

  links.forEach(link => {
    const id = link.getAttribute('to').slice(1);
    const target = link.vdsQueryById(id);

    if (!target) return;

    const rect = target.getBoundingClientRect();
    const offset = rect.y;

    if (target) {
      arr.push({
        link,
        id,
        target,
        offset,
      });
    }
  });

  if (!arr.length) return;

  arr.sort((a, b) => b.offset - a.offset);

  let map = arr.find(map => map.offset <= 0);

  if (map) {
    map.link.vdsSetMod('current', true);
  }

  arr.forEach(mp => {
    if (mp !== map) {
      mp.link.vdsSetMod('current', false);
    }
  });
}

/**
 *
 * @param {VdsElement} el
 */
export function handleLinkState(el) {
  const link = el.querySelector('a');

  if (!link) return;

  const href = link.href;
  const hasQueryParams = href.includes('?');
  const noHashLocation = location.href.replace(location.hash, '');

  el.vdsSetMod('current', !hasQueryParams
    ? href === stripQuery(noHashLocation)
    : href === noHashLocation);
}

export function handleLinksState(force = false) {
  if (timerId && !force) return;

  if (force) {
    clearTimeout(timerId);
  }

  timerId = setTimeout(() => {
    timerId = null;

    const hashLinks = deepQueryAll(ROOT, '[vds-action][to^="#"]');
    const otherLinks = deepQueryAll(ROOT, '[vds-action][to]:not([to^="#"])');

    otherLinks.forEach(handleLinkState);

    handleHashLinks(hashLinks);
  }, force ? 0 : 100);
}

export default function () {
  window.addEventListener('scroll', handleLinksState, { passive: true });
  window.addEventListener('popstate', handleLinksState, { passive: true });

  setTimeout(handleLinksState, 50);
}
