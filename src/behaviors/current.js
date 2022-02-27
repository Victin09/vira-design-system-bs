import { deepQueryAll } from '../helpers';
import { ROOT } from '../context';
import Behavior from './behavior';

const history = window.history;

const _wr = function (type) {
  return function () {
    const rv = History.prototype[type].apply(history, arguments);
    const e = new Event(type.toLowerCase());
    window.dispatchEvent(e);
    return rv;
  };
};

history.pushState = _wr('pushState')
history.replaceState = _wr('replaceState');

let timerId;

function handleHashLinks() {
  const links = deepQueryAll(ROOT, '[is-current-spy] > a[href^="#"]');
  const arr = [];

  links.forEach(link => {
    const id = link.getAttribute('href').slice(1);
    const target = link.parentNode.vdsQueryById(id);

    if (!target) return;

    const rect = target.getBoundingClientRect();
    const offset = rect.y;

    if (target) {
      arr.push({
        link,
        id,
        target,
        offset,
        parent: link.parentNode,
      });
    }
  });

  if (!arr.length) return;

  arr.sort((a, b) => b.offset - a.offset);

  let map = arr.find(map => map.offset <= 1);

  if (map) {
    map.parent.vdsSetMod('current', true);
  }

  arr.forEach(mp => {
    if (mp !== map) {
      mp.parent.vdsSetMod('current', false);
    }
  });
}

function isCurrent(href) {
  if (href == null) return false;

  let locHref = location.href.replace(location.hash, '');

  locHref = locHref.replace(/\/$/, '');
  href = href.replace(/\/$/, '');

  return href === locHref;
}

export function handleLinkState(link) {
  const href = link.href;

  link.parentNode && link.parentNode.vdsSetMod && link.parentNode.vdsSetMod('current', isCurrent(href));
}

export function handleLinksState(force = false) {
  if (timerId && !force) return;

  if (force) {
    clearTimeout(timerId);
  }

  timerId = setTimeout(() => {
    timerId = null;

    const otherLinks = deepQueryAll(ROOT, '[is-current-spy] > a:not([href^="#"])');

    handleHashLinks();
    otherLinks.forEach(handleLinkState);
  }, force ? 0 : 100);
}

['popstate', 'pushstate', 'replacestate'].forEach(eventName => {
  window.addEventListener(eventName, () => {
    requestAnimationFrame(handleLinksState);
    setTimeout(handleLinksState, 250);
  }, { passive: true });
});

['scroll', 'hashchange'].forEach((eventName) => {
  window.addEventListener(eventName, handleHashLinks, { passive: true });
});

setTimeout(handleLinksState, 50);

export default class CurrentBehavior extends Behavior {
  connected() {
    this.setMod('current-spy', true);

    this.on('tap', () => {
      this.setMod('current', true);
    });
  }

  disconnected() {
    this.setMod('current-spy', false);
  }
}
