import { setAttr, parseParams, log } from '../helpers';

const PARAMS_MAP = new Map;

export default class Behavior {
  static get params() {
    return {};
  }

  static get allParams() {
    const parent = Object.getPrototypeOf(this);

    if (!PARAMS_MAP.get(this)) {
      PARAMS_MAP.set(this, {
        ...(parent && parent.allParams || {}),
        ...(this.params || {}),
      });
    }

    return PARAMS_MAP.get(this);
  }

  constructor(host, _params) {
    this.host = host;
    this.ref = host.vdsRef || host;
    const params = Object.create(this.constructor.allParams);

    if (_params && typeof _params === 'string') {
      parseParams(_params, params);
    }

    this.params = params;
  }

  /**
   * Require other behavior
   * @param name
   * @returns {undefined|Promise<Behavior>}
   */
  use(name) {
    return this.host.vdsUse(name);
  }

  is(name) {
    return !!this.host.vdsBehaviors[name];
  }

  /**
   * Require other behaviors
   * @param behaviors
   */
  require(...behaviors) {
    behaviors.forEach(name => {
      this.host.vdsUse(name);
    });
  }

  setContext(name, value, force) {
    this.host.vdsSetContext(name, value, force);
  }

  setMod(name, value) {
    this.host.vdsSetMod(name, value);
  }

  hasMod(name) {
    return this.host.vdsHasMod(name);
  }

  setName(name) {
    this.host.vdsSetName(name);
  }

  hasName(name) {
    return this.host.vdsHasName(name);
  }

  setAria(name, value) {
    this.host.vdsSetAria(name, value);
  }

  setAttr(name, value) {
    setAttr(this.host, name, value);
  }

  hasAttr(name) {
    return this.host.hasAttribute(name);
  }

  linkContext(name, cb, localName) {
    if (!localName && localName !== false) {
      localName = name;
    }

    if (!this.host.vdsHasContextHook(name)) {
      this.host.vdsSetContextHook(name, (data) => {
        const oldValue = this[localName];

        if (localName) {
          this[localName] = data;
        }

        cb(data, oldValue);
      });
    }

    const value = this.parentContext[name];

    if (value != null) {
      if (localName) {
        this[localName] = value || null;
      }

      cb(value);
    }
  }

  on(eventName, cb, options) {
    if (Array.isArray(eventName)) {
      for (let name of eventName) {
        this.on(name, cb, options);
      }

      return () => {
        for (let name of eventName) {
          this.off(name, cb);
        }
      };
    }

    this.host.addEventListener(eventName, cb, options);

    return () => {
      this.off(eventName, cb);
    };
  }

  off(eventName, cb) {
    this.host.removeEventListener(eventName, cb);
  }

  hasParam(param) {
    return this._params.includes(param);
  }

  get context() {
    return this.host.vdsContext;
  }

  get parentContext() {
    return this.host.vdsParentContext;
  }

  get isConnected() {
    return this.host.vdsIsConnected;
  }

  get isShadowAllowed() {
    return this.host.vdsIsShadowAllowed;
  }

  get uniqId() {
    return this.host.vdsUniqId;
  }

  doAction(action, value) {
    if (!action) {
      action = this.host.getAttribute('action');
    }

    if (action) {
      const actionCallback = this.parentContext[`action:${action}`];

      log('trigger action', this.host, action, value, actionCallback);

      if (actionCallback) {
        actionCallback(value);

        return true;
      }
    }

    return false;
  }

  get hasPopup() {
    return !!this.host.vdsDeepQuery('[is-popup]');
  }

  emit(name, detail = null, options = {}) {
    if (name !== 'log') {
      log('emit', { element: this, name, detail, options });
    }

    const event = new CustomEvent(name, {
      detail,
      bubbles: false,
      ...options,
    });

    event.vdsTarget = this.host;

    this.host.dispatchEvent(event);
  }
}
