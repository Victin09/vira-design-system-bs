import CONTEXT from '../context';
import {
  hasRuleSet,
  attrsQuery,
  generateCSS,
  transferCSS,
  STYLE_MAP,
  insertRuleSet,
  removeRuleSet,
  removeRulesById,
} from '../css';
import {
  parseThemeAttr,
  applyTheme,
  composeThemeName,
  applyDefaultMods,
  BASE_THEME,
  ALL_THEME_MODS,
  THEME_TYPE_MODS,
  THEME_ATTR,
  declareTheme
} from '../themes';
import { generateCSSByZones, RESPONSIVE_ATTR, RESPONSIVE_MOD } from '../responsive';
import {
  getParent,
  query,
  generateId,
  devMode,
  warn,
  log,
  computeStyles,
  queryById,
  error,
  parseAllValues,
  extractMods,
  isResponsiveAttr,
  normalizeAttrStates,
  parseAttrStates,
  deepQuery,
  deepQueryAll,
  queryChildren,
  setImmediate,
  isEqual,
  setBoolAttr,
  setAria,
  decPoint,
  isNoValue,
} from '../helpers';
import { isPropDeclarable, declareProp, GLOBAL_ATTRS } from '../compatibility';
import displayAttr from '../styles/display';
import themeAttr from '../styles/theme';
import propAttr from '../styles/prop';
import combine from '../combinators/index';
import behaviors from '../behaviors';
import { setThemeAttr, h } from '../dom-helpers';

export const ELEMENTS_MAP = {};

const NAMES_MAP = {};
const GENERATORS_MAP = {};
const STYLES_MAP = {};
const MIXINS_MAP = {};
const COMBINATORS_MAP = {};
const TEMPLATES_MAP = {};
const PROPS_MAP = {};
const ATTRS_MAP = {};
const BEHAVIORS_MAP = {};
const CONTEXT_MAP = {};
const SETTER_PROPS = [
  'value',
  'pressed',
  'checked',
  'selected',
  'disabled',
  'hidden',
  'special',
  'warning',
  'danger',
  'success',
  'assert',
];

export function getAllAttrs() {
  return Object.keys(GENERATORS_MAP).reduce((arr, tag) => {
    const map = GENERATORS_MAP[tag];

    Object.keys(map)
      .forEach(attr => {
        if (!arr.includes(attr)) {
          arr.push(attr);
        }
      });

    return arr;
  }, []);
}

/**
 * List of all ViraDesign tags.
 * @type {String[]}
 */
const TAG_LIST = [];

/**
 * @typedef VdsElement
 * @type {HTMLElement|VdsAbstract}
 */

/**
 * @typedef ViraDesignContext
 * @property allowShadow {boolean}
 * @property $shadowRoot {HTMLFragment}
 * @property $parentShadowRoot {HTMLFragment}
 */

/**
 * @typedef ViraDesignMixin
 * @method [init]
 * @method [connected]
 * @method [disconnected]
 * @method [changed]
 * @method [set]
 */

/**
 * @class
 * @abstract
 * @property vdsContext {ViraDesignContext}
 * @property vdsParent {VdsElement}
 * @property vdsParentContext {ViraDesignContext}
 * @property vdsBehaviors {Array<ViraDesignMixin>}
 */
export default class VdsAbstract extends HTMLElement {
  /**
   * Element tag name.
   * @returns {String}
   */
  static get vdsTag() {
    return 'vds-abstract'; // abstract tag
  }

  /**
   * In case the tag has `display: contents` transfer all styles to the child.
   * @return {string}
   */
  static get vdsContents() {
    return '';
  }

  /**
   * Element ARIA Role.
   * @returns {String}
   */
  static get vdsRole() {
    return '';
  }

  /**
   * Auto-id applied to element.
   * @returns {string}
   */
  static get vdsId() {
    return '';
  }

  /**
   * Method to extract element css with current element context.
   * @protected
   * @param Element {Object} - VdsAbstract (HTMLElement)
   * @param tag {String} - tag name
   * @returns {Array<String>}
   */
  static vdsExtractCSS(Element, tag) {
    const _this = this;

    return this.vdsCSS({
      tag: tag || Element.vdsTag,
      get css() {
        return _this.vdsGetParentCSS(Element, tag);
      },
      shadow: tag === ':host',
    });
  }

  /**
   * Parent element
   */
  static get vdsParentClass() {
    const parent = Object.getPrototypeOf(this);

    if (parent.vdsTag != null) return parent;
  }

  /**
   * Method to generate parent CSS with current element context.
   * @param Element
   * @param tag {String}
   * @returns {Array<String>}
   */
  static vdsGetParentCSS(Element, tag) {
    let parent = this;

    do {
      parent = parent.vdsParentClass;
    } while (parent && parent.vdsCSS && parent.vdsCSS === this.vdsCSS);

    if (parent && parent.vdsCSS) {
      return parent.vdsExtractCSS(Element, tag);
    }

    return [];
  }

  /**
   * Static css generation method for an element.
   * @param tag - current tag name
   * @param css - current css
   * @returns {Array}
   */
  static vdsCSS({ tag, css }) {
    return [];
  }

  static get vdsName() {
    return '';
  }

  static get vdsNames() {
    let name = this.hasOwnProperty('vdsName') ? this.vdsName : this.vdsTag.replace(/^vds-/, '');

    const ignoreNames = name.split(/\s+/g).filter((nm) => {
      return nm.startsWith('-');
    }).map(nm => nm.replace('-', ''));

    const names = (
      NAMES_MAP[this.vdsTag]
      || (NAMES_MAP[this.vdsTag]
        = [...(name ? name.split(/\s+/g) : []), ...(this.vdsParentClass && this.vdsParentClass.vdsNames || [])].reverse())
    );

    return names.filter(nm => !ignoreNames.includes(nm) && !ignoreNames.includes(nm.replace(/^-/, '')));
  }

  /**
   * @private
   */
  static get vdsAllGenerators() {
    return (
      GENERATORS_MAP[this.vdsTag]
      || (GENERATORS_MAP[this.vdsTag] = {
        ...(this.vdsParentClass && this.vdsParentClass.vdsAllGenerators || {}),
        ...this.vdsGenerators
      })
    );
  }

  /**
   * Static template declaration
   * @return {string}
   */
  static get vdsTemplate() {
    return '';
  }

  /**
   * @private
   */
  static get vdsCachedTemplate() {
    return TEMPLATES_MAP[this.vdsTag] || (TEMPLATES_MAP[this.vdsTag] = this.vdsTemplate);
  }

  /**
   * Allow Shadow DOM usage on the element
   * @return {boolean|null}
   */
  static get vdsShadowRoot() {
    return null; // use global setting
  }

  /**
   * Element attribute config.
   * @returns {Object}
   */
  static get vdsGenerators() {
    return {
      id: '',
      /**
       * CSS Display value.
       * @param val
       */
      display: displayAttr,
      responsive: '',
      as: '',
      theme: themeAttr,
      prop: propAttr,
    };
  }

  /**
   * List of attributes.
   * @returns {Array}
   */
  static get vdsGeneratorsList() {
    return Object.keys(this.vdsAllGenerators);
  }

  /**
   * A list of attributes that are used as props or helpers
   * @return {Array<String>}
   */
  static get vdsPropsList() {
    const tag = this.vdsTag;
    const baseAttrs = VdsAbstract.vdsAllGenerators;

    return (PROPS_MAP[tag]
      || (PROPS_MAP[tag] = Object
        .entries(this.vdsAllGenerators)
        .reduce((list, entry) => {
          const name = entry[0];

          if (!entry[1]
            && !name.startsWith('vds-')
            && !name.startsWith('use-')
            && !(name in baseAttrs)) {
            list.push(name);
          }

          return list;
        }, []))
    );
  }

  /**
   * Initial attribute values of the Element.
   */
  static get vdsAttrs() {
    return {};
  }

  /**
   * Default styles of the Element.
   * They are used only to generate initial CSS for elements.
   */
  static get vdsStyles() {
    return {
      display: 'none',
    };
  }

  /**
   * Initial attribute values of the Element.
   */
  static get vdsContext() {
    return {};
  }

  /**
   * @private
   */
  static get vdsAllContext() {
    return (
      CONTEXT_MAP[this.vdsTag] ||
      (CONTEXT_MAP[this.vdsTag] = {
        ...(this.vdsParentClass && this.vdsParentClass.vdsAllContext || {}),
        ...(this.vdsContext || {}),
      })
    );
  }

  /**
   * @private
   */
  static get vdsAllStyles() {
    return (
      STYLES_MAP[this.vdsTag] ||
      (STYLES_MAP[this.vdsTag] = {
        ...(this.vdsParentClass && this.vdsParentClass.vdsAllStyles || {}),
        ...(this.vdsStyles || {}),
      })
    );
  }

  /**
   * @private
   */
  static get vdsAllAttrs() {
    if (this.vdsTag in ATTRS_MAP) {
      return ATTRS_MAP[this.vdsTag];
    }

    const allAttrs = {
      ...(this.vdsParentClass && this.vdsParentClass.vdsAllAttrs || {}),
      ...(this.vdsAttrs || {}),
    };

    if (!Object.keys(allAttrs)) {
      ATTRS_MAP[this.vdsTag] = null;
      return;
    }

    ATTRS_MAP[this.vdsTag] = allAttrs;

    return allAttrs;
  }

  /**
   * Element behaviors.
   * They are used to inject reusable logic into elements.
   */
  static get vdsBehaviors() {
    return {};
  }

  /**
   * @private
   */
  static get vdsAllBehaviors() {
    return (
      MIXINS_MAP[this.vdsTag] ||
      (MIXINS_MAP[this.vdsTag] = {
        ...(this.vdsParentClass && this.vdsParentClass.vdsAllBehaviors || {}),
        ...(this.vdsBehaviors || {}),
      })
    );
  }

  /**
   * Element combinators.
   * They are used to generate initial CSS for elements.
   */
  static get vdsCombinators() {
    return {};
  }

  /**
   * @private
   */
  static get vdsAllCombinators() {
    return (
      COMBINATORS_MAP[this.vdsTag] ||
      (COMBINATORS_MAP[this.vdsTag] = {
        ...(this.vdsParentClass && this.vdsParentClass.vdsAllCombinators || {}),
        ...(this.vdsCombinators || {}),
      })
    );
  }

  /**
   * @private
   * @returns {String[]}
   */
  static get observedAttributes() {
    return this.vdsGeneratorsList;
  }

  static vdsInit() {
    const tag = this.vdsTag;

    if (!tag || TAG_LIST.includes(tag)) return;

    TAG_LIST.push(tag);

    if (!ELEMENTS_MAP[tag]) {
      ELEMENTS_MAP[tag] = this;
    }

    // Generate default styles on first attributeChangeCallback() instead.
    this.vdsGenerateDefaultStyle();
  }

  static get vdsBehaviorList() {
    const tag = this.vdsTag;

    return (
      BEHAVIORS_MAP[tag]
      || (BEHAVIORS_MAP[tag] = Object
        .keys(this.vdsAllBehaviors)
        .filter(name => this.vdsAllBehaviors[name] != null))
    );
  }

  static vdsGenerateDefaultStyle(isHost = false, dontInject = false, force = false) {
    let tag = this.vdsTag;

    const cssName = isHost ? `${tag}:host` : tag;

    if (force) {
      removeRuleSet(cssName);
    } else {
      // already declared
      if (STYLE_MAP[cssName] && !dontInject) return;
    }

    if (isHost) {
      tag = ':host';
    }

    log('default style generated', tag);

    let el = this;

    let css = el.vdsExtractCSS(el) || [];

    const allAttrs = this.vdsAllGenerators;
    const allStyles = this.vdsAllStyles;
    const transferChild = this.vdsContents;
    const combinators = Object.values(this.vdsAllCombinators);

    const globalAttrs = Object.keys(allAttrs).filter(attr => GLOBAL_ATTRS.includes(attr) && allAttrs[attr]);

    if (globalAttrs.length) {
      error('incorrect declaration of vdsGenerators, global attributes are used for styling:', globalAttrs.join(','));

      return;
    }

    Object.keys(allAttrs).forEach(attr => {
      if (!VdsAbstract.prototype.hasOwnProperty(attr) && isPropDeclarable(attr)) {
        declareProp(VdsAbstract, attr);
      }
    });

    if (!isHost) {
      combinators.forEach(combinator => {
        const styles = combine(combinator, allStyles);

        if (styles.length) {
          if (transferChild) {
            styles.forEach(map => {
              map.$suffix += `>${transferChild}`;
            });
          }

          css.push(...generateCSS(tag, styles, false));
        }
      });
    }

    Object.keys(allStyles)
      .forEach(name => {
        let value = allStyles[name];

        if (value == null) return;

        value = String(value).replace(/\n\s+/g, ' ');

        let styles;

        const isProp = name.startsWith('@');

        styles = computeStyles(name, value, allAttrs, allStyles);

        if (!styles) return;

        let query = `${tag}${name !== 'text' && !isProp ? `:not([${name}])` : ''}`;

        if (transferChild) {
          css.push(...generateCSS(`${query}:not(:empty) > ${transferChild}`, styles, true));
          css.push(...generateCSS(`${query}:empty`, styles, true));
        } else {
          css.push(...generateCSS(query, styles, true));
        }
      });

    if (transferChild) {
      css.push(...generateCSS(tag, [{ display: 'contents' }], true));
    }

    if (!dontInject) {
      insertRuleSet(tag, css);
    } else {
      return css.join('\n');
    }
  }

  constructor() {
    super();

    this.vdsRef = null;
    this.vdsThemes = {};
  }

  /**
   * @param {String} name
   * @param {*} oldValue
   * @param {*} value
   * @param {Boolean} force - Reapply CSS.
   */
  attributeChangedCallback(name, oldValue, value, force) {
    if (!ELEMENTS_MAP[this.constructor.vdsTag]) {
      this.constructor.vdsInit();
    }

    const origValue = value;

    // ignore attribute to declare custom properties
    if (devMode && name === 'prop' && this.hasAttribute('prop')) {
      warn('unable to use private "prop" attribute.');

      return;
    }

    let varAttr;

    if (name === 'vds') return;

    if (name.startsWith('use-')) {
      name = name.replace('use-', '');

      if (name === 'behaviors') return;

      if (behaviors.has(name)) {
        this.vdsUse(name, value);
      }

      return;
    }

    if (name === 'id') {
      generateId(this); // trigger id generation

      return;
    }

    switch (name) {
      case RESPONSIVE_ATTR:
        generateId(this);

        if (!this.vdsIsConnected) return;

        this.vdsSetContext('responsive', {
          context: this,
          zones: value.split('|'),
        });

        this.vdsVerifyChildren({
          responsive: true,
          shadow: true,
        });

        return;
      case THEME_ATTR:
        if (!this.vdsIsConnected) {
          this.vdsApplyAttr(THEME_ATTR);

          return;
        }

        this.vdsEnsureThemes();
    }

    if (!this.vdsAttrValues) {
      this.vdsAttrValues = {};
    }

    this.vdsChanged(name, oldValue, value);

    if (this.vdsAttrValues[name]) {
      oldValue = this.vdsAttrValues[name];
    }

    // if dynamic attr
    if (isResponsiveAttr(value)) {
      varAttr = this.vdsGetDynamicAttr(name, value);

      value = varAttr.value;
    }

    this.vdsAttrValues[name] = value;

    if (devMode && !name.startsWith('attr-') && name !== 'control') {
      if (value !== origValue || isResponsiveAttr(value)) {
        this.setAttribute(`attr-${name}`, normalizeAttrStates(value));
      }

      if (this.hasAttribute('debug')) {
        this.ViraDesignbug('attribute changed', {
          name,
          oldValue,
          value: this.getAttribute(name),
          computedValue: value,
        });
      }
    }

    if (value == null || !this.constructor.vdsAllGenerators[name]) return;

    this.vdsApplyCSS(name, varAttr);
  }

  /**
   * @private
   */
  connectedCallback() {
    // check properties with setters and getters
    SETTER_PROPS.forEach(prop => {
      if (prop in this) {
        const value = this[prop];

        delete this[prop]; // remove own property

        this[prop] = value; // trigger Vira setter
      }
    });

    // the flag tells that it's a sync phase of element connection.
    // it's used to detect whether or not apply a transition to hiding effect.
    this.vdsInitial = true;

    if (!ELEMENTS_MAP[this.constructor.vdsTag]) {
      this.constructor.vdsInit();
    }

    if (this.vdsFirstConnect == null) {
      this.vdsFirstConnect = true;
    }

    let parent = this.parentNode;

    // cache parent to have reference in onDisconnected callback
    this.vdsParent = parent;

    this.vdsCreateContext();

    if (!this.id) {
      if (this.constructor.vdsId) {
        this.id = this.constructor.vdsId;
      }
    } else {
      generateId(this);
    }

    if (this.constructor.vdsRole && !this.hasAttribute('role')) {
      this.setAttribute('role', this.constructor.vdsRole);
    }

    this.vdsIsConnected = true;

    this.vdsSetContextAttrs();

    if (this.vdsContext.$shadowRoot) {
      if (!hasRuleSet(this.constructor.vdsTag, this.vdsContext.$shadowRoot)) {
        if (!hasRuleSet(this.constructor.vdsTag)) {
          this.constructor.vdsGenerateDefaultStyle();
        }

        transferCSS(this.constructor.vdsTag, this.vdsContext.$shadowRoot);
      }

      this.vdsReapplyCSS();
    }

    if (this.vdsApplyAttrs) {
      this.vdsApplyAttrs.forEach(attr => {
        this.attributeChangedCallback(attr, null, this.getAttribute(attr), true);
      });

      this.vdsApplyAttrs = [];
    }

    if (this.hasAttribute(RESPONSIVE_ATTR)) {
      this.attributeChangedCallback(RESPONSIVE_ATTR, null, this.getAttribute(RESPONSIVE_ATTR), true);
    }

    this.setAttribute('vds', '');

    if (this.constructor.vdsContents) {
      this.setAttribute('vds-contents', '');
    }

    // on first connect (init)
    if (this.vdsFirstConnect) {
      this.vdsRender();
      this.vdsInit();

      const names = this.constructor.vdsNames;

      names.forEach(name => {
        this.setAttribute(`vds-${name}`, '');
      });

      const behaviorList = this.constructor.vdsBehaviorList;

      if (behaviorList.length) {
        for (let name of behaviorList) {
          this.vdsUse(name);
        }
      }

      const allAttrs = this.constructor.vdsAllAttrs;

      if (allAttrs) {
        this.vdsAutoAttrs = {};

        setTimeout(() => {
          Object.entries(allAttrs)
            .forEach(([attr, value]) => {
              if (value != null && !this.hasAttribute(attr)) {
                this.setAttribute(attr, String(value) || '');
                this.vdsAutoAttrs[attr] = this.getAttribute(attr);
              }
            });
        });
      }

      const vdsAllContext = this.constructor.vdsAllContext;

      Object.keys(vdsAllContext)
        .forEach(key => {
          const value = vdsAllContext[key];

          // if it's `attrs` declaration then add Shadow Root flag
          if (key.startsWith('attrs:')) {
            value.$shadowRoot = this.vdsContext.$shadowRoot;
          }

          this.vdsSetContext(key, value);
        });
    }

    if (this.hasAttribute(THEME_ATTR)) {
      setTimeout(() => {
        this.vdsEnsureThemes();
      }, 0);
    }

    this.vdsConnected();

    this.vdsBehaviorCall('connected');

    this.vdsFirstConnect = false;
    this.vdsIsConnectionComplete = true;

    setTimeout(() => {
      delete this.vdsInitial;
    });
  }

  /**
   * @private
   */
  disconnectedCallback() {
    delete this.vdsIsConnected;

    this.vdsDisconnected();

    if (this.vdsDisconnectedHooks) {
      this.vdsDisconnectedHooks.forEach(cb => cb());
      delete this.vdsDisconnectedHooks;

      log('disconnected hooks', { el: this });
    }

    if (this.id) {
      setTimeout(() => {
        removeRulesById(this.id);
      });
    }
  }

  get vdsRole() {
    return this.getAttribute('role') || this.constructor.vdsRole;
  }

  set vdsRole(value) {
    this.setAttribute('role', value);
  }

  /**
   * Get the ViraDesign ID of the element. Also generate unique id if it's not presented.
   * @returns {String}
   */
  get vdsId() {
    generateId(this);

    return this.getAttribute('vds-id');
  }

  /**
   * Get the unique ID of the element. Generate it if it's not presented.
   * @returns {String}
   */
  get vdsUniqId() {
    return generateId(this);
  }

  /**
   * Simple getter to tell others that it's a ViraDesign Element.
   * @returns {boolean}
   */
  get vdsElement() {
    return true;
  }

  /**
   * Generate CSS for specific query, attribute and its value.
   * Is used as separate method to provide API for definition elements.
   * @param {String} query - CSS query to apply styles.
   * @param {String} name - attribute (handler) name.
   * @param {String} value - attribute exact value (handler argument).
   * @param {Boolean} skipContents - private attribute to skip CONTENTS check.
   * @returns {undefined|Array} - output css
   */
  vdsGetCSS(query, name, value, skipContents) {
    const transferChild = this.constructor.vdsContents;

    if (!skipContents && transferChild) {
      return (this.vdsGetCSS(`${query}:not(:empty) > ${transferChild}`, name, value, true) || [])
        .concat(this.vdsGetCSS(`${query}:empty`, name, value, true) || []);
    }

    const isResponsive = value.includes('|');

    if (isResponsive) {
      value = normalizeAttrStates(value);

      const respContext = this.vdsContext && this.vdsContext.responsive && this.vdsContext.responsive.context;

      if (respContext) {
        const zones = ['max'].concat(respContext.getAttribute(RESPONSIVE_ATTR).split('|'));
        const styles = generateCSSByZones(this.constructor, query, name, value, zones);

        return respContext.vdsResponsive()(styles);
      }
    }

    let styles = computeStyles(name, value, this.constructor.vdsAllGenerators, this.constructor.vdsAllStyles);

    return generateCSS(query, styles, true);
  }

  /**
   * Create and apply CSS based on element's attributes.
   * @param {String} name - attribute name.
   * @param {*} [varAttr] - prepared value.
   * @param {Boolean} force - replace current CSS rule.
   * @param {Boolean} isHost
   */
  vdsApplyCSS(name, varAttr, force = false, isHost = false) {
    if (!isHost && this.vdsShadow) {
      this.vdsApplyCSS(name, varAttr, force, true);
    }

    let attrValue = this.getAttribute(name);

    if (attrValue == null) return;

    const attrs = { [name]: attrValue };

    let value;

    if (isResponsiveAttr(attrValue)) {
      if (!varAttr) {
        varAttr = this.vdsGetDynamicAttr(name, attrValue);
      }

      value = varAttr.value;
      Object.assign(attrs, varAttr.context);
    } else {
      value = attrValue;
    }

    const query = this.vdsGetQuery(attrs, isHost);
    const cssRoot = isHost ? this.vdsShadow : this.vdsContext && this.vdsContext.$shadowRoot;

    if (hasRuleSet(query, cssRoot)) {
      if (!force) return;

      removeRuleSet(query, cssRoot);
    } else if (hasRuleSet(query)) {
      transferCSS(query, cssRoot);

      return;
    }

    const css = this.vdsGetCSS(query, name, value) || [''];

    insertRuleSet(query, css);

    if (cssRoot) {
      transferCSS(query, cssRoot);
    }
  }

  vdsGetAttr(attr, firstValueOnly) {
    let value = this.getAttribute(attr);

    if (value == null) return value;

    if (!value) return value;

    const isResponsive = isResponsiveAttr(value);

    if (firstValueOnly) {
      if (isResponsive) {
        return parseAttrStates(value)[0].states[''];
      }

      return value;
    }

    if (isResponsive) {
      value = this.vdsGetDynamicAttr(attr, value).value;
    }

    return value;
  }

  vdsGetDynamicAttr(attr, value) {
    const context = {};

    if (!this.vdsContext) {
      this.vdsApplyAttr(attr);

      if (value.includes('|')) {
        context[`is-${RESPONSIVE_MOD}`] = null; // :not(...

        if (!value.includes('@')) {
          value = normalizeAttrStates(value, true);
        }
      }

      return {
        oldValue: this.vdsAttrValues[attr],
        value,
        context,
      };
    }

    value = value == null ? this.getAttribute(attr) : value;

    const responsive = this.vdsContext && this.vdsContext.responsive && this.vdsContext.responsive;
    const contextIds = new Set;
    const contextMod = `${attr}-ctx`;
    const contextModAttr = `is-${contextMod}`;
    const oldValue = this.vdsAttrValues && this.vdsAttrValues[attr];

    value = normalizeAttrStates(value);

    if (responsive && value.includes('|')) {
      context[`is-${RESPONSIVE_MOD}`] = responsive.context.vdsUniqId;

      this.vdsSetMod(RESPONSIVE_MOD, responsive.context.vdsUniqId);
    }

    if (contextIds.size) {
      context[contextModAttr] = Array.from(contextIds).join(' ');

      this.vdsSetMod(contextMod, context[contextModAttr]);
    }

    return {
      oldValue, value: value || '', context,
    };
  }

  /**
   * Set aria attribute.
   * @param {String} name
   * @param {Boolean|String|Number} value
   */
  vdsSetAria(name, value) {
    setAria(this, name, value);
  }

  vdsHasAria(name) {
    return (this.vdsRef || this).hasAttribute(`aria-${name}`);
  }

  /**
   * Set a local modifier.
   * @param {String} name
   * @param {String|boolean|*} value - TRUE sets attribute without false, FALSE = removes attribute.
   */
  vdsSetMod(name, value) {
    const mod = `is-${name}`;

    if (!this.vdsMods) {
      this.vdsMods = {};
    }

    const vdsMods = this.vdsMods;

    if (value === false || value == null) {
      this.removeAttribute(mod);

      delete vdsMods[name];
    } else {
      this.setAttribute(mod, value === true ? '' : value);

      vdsMods[name] = value;
    }
  }

  /**
   * Check if element have a local modifier with specific name.
   * @param {String} name
   * @returns {boolean}
   */
  vdsHasMod(name) {
    const mod = `is-${name}`;

    return this.hasAttribute(mod);
  }

  vdsSetName(name) {
    return this.setAttribute(`vds-${name}`, '');
  }

  vdsRemoveName(name) {
    return this.removeAttribute(`vds-${name}`);
  }

  vdsHasName(name) {
    const mod = `vds-${name}`;

    return this.hasAttribute(mod);
  }

  /**
   * Build a query with current tag name and provided attribute value.
   * @param {Object} attrs - dict of attributes with their values.
   * @param {Boolean} isHost - host declaration for Shadow DOM.
   * @returns {string}
   */
  vdsGetQuery(attrs = {}, isHost = false) {
    return `${isHost ? ':host' : this.constructor.vdsTag}${attrsQuery(attrs)}`;
  }

  /**
   * Attribute change reaction.
   * @param {String} name
   * @param {*} oldValue
   * @param {*} value
   */
  vdsChanged(name, oldValue, value) {
    if (value === undefined) {
      value = this.getAttribute(name);
    }

    this.vdsBehaviorCall('changed', [name, value]);

    switch (name) {
      case 'id':
      case 'as':
        this.vdsSetContextAttrs();
        break;
      case 'lang':
        this.vdsSetContext('locale', value);
        break;
      case 'warning':
      case 'danger':
      case 'success':
        setThemeAttr(this, name, value != null);
        return;
    }
  }

  /**
   * Called when element is first connected to the DOM.
   * Just before vdsConnected().
   * Called only once during element life-cycle.
   */
  vdsInit() {
  }

  /**
   * Called when element is connected to the DOM.
   * Can be called twice or more.
   * While using frameworks this method can be fired without element having parentNode.
   */
  vdsConnected() {
  }

  /**
   * Called when element is disconnected from the DOM.
   * Can be called more than once.
   */
  vdsDisconnected() {
    this.vdsBehaviorCall('disconnected');
  }

  /**
   * Trigger behavior hooks
   * @param {String} method
   * @param {Array} args
   */
  vdsBehaviorCall(method, args= []) {
    const behaviors = this.vdsBehaviors;

    if (!behaviors) return;

    Object.values(behaviors).forEach(behavior => {
      if (behavior[method]) {
        behavior[method](...args);
      }
    });
  }

  /**
   *
   * @param {Boolean} [force]
   * @param {Array<String>} [ignoreList]
   * @return {*}
   */
  vdsEnsureThemes(force, ignoreList = []) {
    const values = parseAllValues(this.vdsGetAttr(THEME_ATTR, true) || '');

    values.forEach((val) => {
      if (ignoreList.includes(val)) return;

      ignoreList.push(val);

      let theme = parseThemeAttr(val);

      const themeName = composeThemeName(theme);
      const key = `theme:${themeName}`;
      const baseTheme = this.vdsContext[`theme:${theme.name}`];
      const defaultType = theme.type;

      if (!baseTheme) return;

      if (baseTheme.mods) {
        const { mods } = extractMods(baseTheme.mods || '', ALL_THEME_MODS);

        const typeMod = mods.find(mod => THEME_TYPE_MODS.includes(mod));

        theme = applyDefaultMods(theme, baseTheme.mods);

        if (typeMod) {
          theme.type = defaultType !== 'main' ? defaultType : baseTheme.type;
        }
      }

      if (baseTheme && (!this.vdsContext[key] || baseTheme.lazy || force)) {
        if (baseTheme.lazy) {
          baseTheme.lazy = false;
          declareTheme(document.body, baseTheme.name, baseTheme.hue, baseTheme.saturation, baseTheme.pastel, baseTheme.mods || '');
        }

        applyTheme(baseTheme.$context || document.body, {
          hue: baseTheme.hue,
          saturation: baseTheme.saturation,
          pastel: baseTheme.pastel,
          ...theme,
        }, themeName);
      }
    });

    return values;
  }

  /**
   * Get parent that satisfies specified selector
   * @param {String} selector
   */
  vdsQueryParent(selector) {
    return getParent(this, selector);
  }

  /**
   * Get closest element that satisfies specified selector
   * @param {String} selector
   */
  vdsQuery(selector) {
    return query(this, selector);
  }

  /**
   * Get closest element that satisfies specified selector
   * @param {String} id
   * @param {Boolean} [includeNames]
   */
  vdsQueryById(id, includeNames) {
    return queryById(this, id, includeNames);
  }

  /**
   * Called when element parent changed its context.
   */
  vdsContextChanged(name) {
    const hooks = this.vdsContextHooks;

    if (!hooks || !hooks[name]) return;

    hooks[name](this.vdsParentContext[name]);

    log('hook fired', {
      el: this,
      hook: name,
    });
  }

  vdsSetContext(name, value, force) {
    if (!this.vdsContext) {
      if (!this.vdsContextTemp) {
        this.vdsContextTemp = {};
      }

      this.vdsContextTemp[name] = value;

      return;
    } else {
      const oldValue = this.vdsContext[name];

      if (value == null) {
        if (name in this.vdsContext) {
          delete this.vdsContext[name];
        } else if (!force) {
          return;
        }
      } else if (!isEqual(oldValue, value) || force) {
        this.vdsContext[name] = value;
      } else {
        return;
      }

      const elements = this.vdsDeepQueryAll('[vds]');

      elements.forEach(el => el.vdsContextChanged(name));
    }

    log('context changed', {
      el: this,
      name, value,
    });
  }

  vdsSetContextHook(name, hook, runOnInit) {
    if (!hook) return;

    if (!this.vdsContextHooks) {
      this.vdsContextHooks = {};
    }

    if (!this.vdsContextHooks) {
      this.vdsContextHooks = {};
    }

    const cache = this.vdsParentContext && this.vdsParentContext[name];

    if (runOnInit) {
      hook(cache);
    }

    this.vdsContextHooks[name] = hook;
  }

  vdsSetDisconnectedHook(hook) {
    if (!hook) return;

    if (!this.vdsDisconnectedHooks) {
      this.vdsDisconnectedHooks = [];
    }

    this.vdsDisconnectedHooks.push(hook);
  }

  vdsHasContextHook(name) {
    return this.vdsContextHooks && this.vdsContextHooks[name];
  }

  /**
   * @typedef VerifyOptions
   * @property vars {boolean}
   * @property responsive {boolean}
   * @property attrs {string}
   * @property shadow {boolean}
   * @property ignore {null|Array<string>}
   */

  /**
   *
   * @param options {null|VerifyOptions}
   */
  vdsVerifyChildren(options) {
    const selectors = ['[shadow-root]'];

    const force = options === true;
    const { vars, responsive, attrs, shadow } = options;
    const ignore = options.ignore;

    if (!this.vdsIsConnectionComplete) return;

    if (force) {
      selectors.push('[vds]', '[shadow-root]');
    } else {
      if (responsive) {
        selectors.push(`[is-${RESPONSIVE_MOD}="${this.vdsUniqId}"]`);
      }

      if (attrs) {
        selectors.push(attrs);
      }

      if (shadow) {
        selectors.push('[shadow-root]');
      }
    }

    const selector = selectors.join(', ');
    const elements = this.querySelectorAll(selector);

    log('verify children', { vars, responsive, attrs, shadow, selector });

    [this, ...elements].forEach(el => {
      if (ignore && ignore.includes(el)) return;

      if (el.vdsApplyCSS) {
        [...el.attributes].forEach(({ name, value }) => {
          if (name === RESPONSIVE_ATTR) return;

          if (vars || responsive) {
            el.attributeChangedCallback(name, null, value, true);
          }
        });
      }

      if (attrs && el.vdsSetContextAttrs) {
        log('apply context attrs', { el });

        if (this !== el && el.vdsApply) {
          el.vdsApply();
        }

        if (el.vdsSetContextAttrs) el.vdsSetContextAttrs();
      }

      if (shadow && el.vdsShadow) {
        el.vdsShadow.vdsVerifyChildren(options);
      }
    });
  }

  /**
   * Write message to the console.
   * Works only if `debug` attribute is presented on the element.
   * @param args
   */
  ViraDesignbug(...args) {
    if (devMode) {
      if (this.hasAttribute('debug')) {
        log({ $: this }, ...args);
      }
    } else {
      warn('forgot ViraDesignbug() call in production');
    }
  }

  /**
   * Return responsive definition for the styles set.
   * @returns {*}
   */
  vdsResponsive() {
    const points = this.getAttribute(RESPONSIVE_ATTR);

    if (this.vdsReponsiveFor === points) return this.vdsResponsiveDecorator;

    this.vdsReponsiveFor = points;

    if (!points) {
      return (this.vdsResponsiveDecorator = styles => styles);
    }

    const tmpPoints = points.split(/\|/);

    const mediaPoints = tmpPoints.map((point, i) => {
      if (!i) {
        return `@media (min-width: ${point})`;
      }

      const prevPoint = tmpPoints[i - 1];

      return `@media (max-width: ${decPoint(prevPoint)}) and (min-width: ${point})`;
    });

    mediaPoints.push(`@media (max-width: ${decPoint(tmpPoints.slice(-1)[0])})`);

    return (this.vdsResponsiveDecorator = styles => {
      return mediaPoints
        .reduce((arr, point, i) => {
          const stls = styles[i];

          if (!stls) return arr;

          stls.forEach(rule => {
            if (rule) {
              arr.push(`${point}{\n${rule}\n}\n`);
            }
          });

          return arr;
        }, []);
    });
  }

  /**
   * Scroll to element.
   * @param id
   */
  vdsScrollTo(id) {
    if (!id) return;

    const element = this.vdsQueryById(id);

    if (element) {
      scrollTo(0, element.getBoundingClientRect().y + window.pageYOffset);
    }
  }

  vdsApplyAttr(attrName) {
    if (!this.vdsApplyAttrs) {
      this.vdsApplyAttrs = [];
    }

    if (!this.vdsApplyAttrs.includes(attrName)) {
      this.vdsApplyAttrs.push(attrName);
    }
  }

  vdsReapplyCSS() {
    if (!this.vdsIsConnected) return;

    [...this.attributes].forEach(({ name, value }) => {
      if (value == null || !this.constructor.vdsAllGenerators[name]) return;

      this.vdsApplyCSS(name);
    });
  }

  attachShadow() {
    const shadow = HTMLElement.prototype.attachShadow.call(this, { mode: 'open' });

    this.vdsShadow = shadow;

    Object.assign(shadow, {
      vdsContext: Object.create(this.vdsContext),
      vdsSetContext: this.vdsSetContext,
      vdsVerifyChildren: this.vdsVerifyChildren,
      vdsDeepQuery: this.vdsDeepQuery,
      vdsDeepQueryAll: this.vdsDeepQueryAll,
      vdsIsConnectionComplete: true,
      vdsIsConnected: true,
    });

    Object.assign(shadow.vdsContext, {
      $shadowRoot: this.vdsShadow,
      $parentShadowRoot: this.vdsContext.$shadowRoot || null,
    });

    this.setAttribute('shadow-root', '');

    setImmediate(() => {
      this.vdsAttachShadowCSS();
    });

    return shadow;
  }

  vdsSetContextAttrs() {
    if (!this.vdsIsConnected || this.constructor.vdsNames.includes('definition')) return;

    if (!this.vdsContextAttrs) {
      this.vdsContextAttrs = new Set;
    }

    const context = this.vdsParentContext;
    const as = this.getAttribute('as');
    const id = this.getAttribute('vds-id');

    /**
     * @type {Set<String>}
     */
    const contextAttrs = this.vdsContextAttrs;
    const keys = [`attrs:${this.constructor.vdsTag}`];
    const $shadowRoot = context.$shadowRoot;
    const $parentShadowRoot = context.$parentShadowRoot;
    const names = this.constructor.vdsNames;

    if (as) {
      as.split(/\s+/g).forEach(name => {
        keys.push(`attrs:${name}`);
      });
    }

    if (names.length) {
      names.forEach(name => {
        keys.push(`attrs:${name}`);
      });
    }

    if (id) {
      keys.push(`attrs:${id}`);
    }

    const attrSets = keys.map(key => context[key]).filter(set => set);

    const attrs = {};

    attrSets.forEach(set => {
      if ($shadowRoot && $shadowRoot !== set.$shadowRoot) return;

      Object.assign(attrs, set);
    });

    if ($shadowRoot && id) {
      const shadowAttrs = context[`attrs:$${id}`];

      if (shadowAttrs && shadowAttrs.$shadowRoot === $parentShadowRoot) {
        Object.assign(attrs, shadowAttrs);
      }

      const deepShadowAttrs = context[`attrs:$$${id}`];

      if (deepShadowAttrs && deepShadowAttrs.$shadowRoot !== $shadowRoot) {
        Object.assign(attrs, deepShadowAttrs);
      }
    }

    delete attrs.$shadowRoot;

    if (!Object.keys(attrs).length && !contextAttrs.size) {
      return;
    }

    const clearAttrs = new Set(contextAttrs);

    Object.keys(attrs).forEach(name => {
      if (name.startsWith('$')) return;

      let value = attrs[name];

      const force = value && value.startsWith('!');

      if (force) {
        value = value.slice(1);
      }

      if ((!this.hasAttribute(name)) || force) {
        if (!contextAttrs.has(name)) {
          contextAttrs.add(name);
        }

        this.setAttribute(name, value);
      } else if (contextAttrs.has(name)) {
        this.setAttribute(name, value);
      }

      clearAttrs.delete(name);
    });

    clearAttrs.forEach(name => {
      this.removeAttribute(name);
    });
  }

  vdsCreateContext() {
    let parent = this.parentNode;

    while (parent && !parent.vdsContext && parent !== document.body) {
      parent = parent.parentNode;
    }

    if (this.vdsContext) {
      this.vdsContextTemp = this.vdsContext;
    }

    if (parent && parent.vdsContext) {
      const temp = this.vdsContext;

      this.vdsParentContext = parent.vdsContext;

      this.vdsContext = Object.create(parent.vdsContext);

      if (temp) {
        Object.assign(this.vdsContext, temp);
      }

      this.vdsSetMod('root', false);
    } else {
      this.vdsContext = Object.create(CONTEXT);
      this.vdsSetMod('root', true);

      this.vdsParentContext = CONTEXT;

      applyTheme(this, BASE_THEME, 'main');
    }

    if (this.vdsContextTemp) {
      Object.assign(this.vdsContext, this.vdsContextTemp);
    }

    delete this.vdsContextTemp;
  }

  vdsDeepQuery(selector) {
    return deepQuery(this, selector);
  }

  vdsDeepQueryAll(selector) {
    return deepQueryAll(this, selector);
  }

  vdsQueryChildren(selector) {
    return queryChildren(this, selector);
  }

  /** Behavior System **/

  /**
   * Require behavior
   * @param name {String} - Behavior name
   * @param [value] {String} - Options string
   * @return {null|Behavior}
   */
  vdsUse(name, value) {
    const allBehaviors = this.constructor.vdsAllBehaviors;

    const attrValue = this.getAttribute(`use-${name}`);
    const behavioursAttrValue = this.getAttribute('use-behaviors');

    if (isNoValue(attrValue) || isNoValue(behavioursAttrValue)) return Promise.resolve();

    let options = `${allBehaviors[name] || ''} ${value || ''}`;

    if (!this.vdsBehaviors) {
      this.vdsBehaviors = {};
    }

    if (!this.vdsBehaviorPromises) {
      this.vdsBehaviorPromises = {};
    }

    // search among behavior instances
    let behavior = this.vdsBehaviors[name];

    if (behavior) return Promise.resolve(behavior);

    // search among behavior promises
    let behaviorPromise = this.vdsBehaviorPromises[name];

    if (behaviorPromise) return behaviorPromise;

    // request Mixin class and create new instance
    return this.vdsBehaviorPromises[name] = behaviors.get(name).then(Behavior => {
      if (!Behavior) {
        throw error('behavior not found', Behavior);
      }

      behavior = new Behavior(this, options);

      this.vdsBehaviors[name] = behavior;

      behavior.$$name = name;

      // call hooks
      if (behavior.init) {
        behavior.init();
      }

      if (this.vdsIsConnected && behavior.connected) {
        behavior.connected();
      }

      return behavior;
    });
  }

  vdsRender() {
    const template = this.constructor.vdsCachedTemplate;

    if (!template) return;

    let host = this;

    if (this.vdsIsShadowAllowed) {
      host = this.attachShadow({ mode: 'open' });
    } else {
      this.vdsSetMod('host', true);
    }

    const temp = h('template');

    temp.innerHTML = template;

    host.appendChild(temp.content);
  }

  get vdsIsShadowAllowed() {
    const allowGlobal = !!HTMLElement.prototype.attachShadow;
    const allowContext = this.vdsContext.allowShadow;
    const allowOption = this.constructor.vdsShadowRoot;
    const shadowRootAttr = this.getAttribute('shadow-root');
    const allowAttr = !['n', 'no'].includes(shadowRootAttr);

    if (!allowGlobal) return;

    return allowContext
      && (allowOption || allowOption == null || (allowOption === false && allowAttr));
  }

  vdsAttachShadowCSS() {
    if (!this.vdsShadow) return;

    const shadowCSS = this.constructor.vdsExtractCSS(this.constructor, ':host');
    const tag = this.constructor.vdsTag;

    if (shadowCSS) {
      insertRuleSet(
        `shadow:${tag}`,
        shadowCSS,
        this.vdsShadow,
      );
    }

    insertRuleSet(
      `shadow:${tag}:outline`,
      [`:host([is-outline]) [vds], :host([is-outline]) [vds-contents] > *, :host([is-outline][vds-contents]) > * { outline: var(--border-width, 1px) solid var(--outline-color) !important; }`],
      this.vdsShadow,
    );

    const hostCSSName = `${tag}:host`;

    if (!hasRuleSet(hostCSSName)) {
      this.constructor.vdsGenerateDefaultStyle(true);
    }

    transferCSS(hostCSSName, this.vdsShadow);

    const generators = this.constructor.vdsAllGenerators;

    [...this.attributes].forEach(({ name, value }) => {
      if (!generators[name]) return;

      this.vdsApplyCSS(name, null, false, true);
    });
  }

  get vdsDisabled() {
    return this.hasAttribute('disabled');
  }

  set value(val) {
    if (this.vdsSetValue) {
      this.vdsSetValue(val, true);
    } else {
      this._value = val;
    }
  }

  get value() {
    return this.vdsGetValue ? this.vdsGetValue() : this._value;
  }

  set assert(val) {
    if (this.vdsSetAssert) {
      this.vdsSetAssert(val);
    } else {
      this._assert = val;
    }
  }

  get assert() {
    return this.vdsGetAssert ? this.vdsGetAssert() : this._assert;
  }

  set disabled(val) {
    setBoolAttr(this, 'disabled', val);
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }

  set hidden(val) {
    setBoolAttr(this, 'hidden', val);
  }

  get hidden() {
    return this.hasAttribute('hidden');
  }

  set pressed(val) {
    setBoolAttr(this, 'pressed', val);
  }

  get pressed() {
    return this.hasAttribute('pressed');
  }

  set checked(val) {
    this.pressed = val;
  }

  get checked() {
    return this.pressed;
  }

  set selected(val) {
    this.pressed = val;
  }

  get selected() {
    return this.pressed;
  }

  set special(val) {
    setBoolAttr(this, 'special', val);
  }

  get special() {
    return this.hasAttribute('special');
  }

  set danger(val) {
    setBoolAttr(this, 'danger', val);
  }

  get danger() {
    return this.hasAttribute('danger');
  }

  set warning(val) {
    setBoolAttr(this, 'warning', val);
  }

  get warning() {
    return this.hasAttribute('warning');
  }

  set success(val) {
    setBoolAttr(this, 'success', val);
  }

  get success() {
    return this.hasAttribute('success');
  }

  focus() {
    const ref = this.vdsRef || this;

    HTMLElement.prototype.focus.call(ref);
  }

  blur() {
    const ref = this.vdsRef || this;

    HTMLElement.prototype.blur.call(ref);
  }

  select() {
    if (this.vdsRef && this.vdsRef.select) {
      this.vdsRef.select();
    }
  }

  // get asList() {
  //   if (!this._asList) {
  //     const host = this;
  //
  //     this._asList = {
  //       values() {
  //         let attr = host.getAttribute('as');
  //
  //         if (attr) {
  //           attr = attr.trim();
  //         }
  //
  //         return attr ? attr.split(/\s+/g) : [];
  //       },
  //       contains(name) {
  //         return this.values().includes(name);
  //       },
  //       add(name) {
  //         const names = this.values();
  //
  //         if (!names.includes(name)) {
  //           names.push(name);
  //
  //           host.setAttribute('as', names.join(' '));
  //         }
  //       },
  //       remove(name) {
  //         const names = this.values();
  //
  //         if (names.includes(name)) {
  //           names.splice(names.indexOf(name), 1);
  //
  //           host.setAttribute('as', names.join(' '));
  //         }
  //       },
  //     };
  //   }
  //
  //   return this._asList;
  // }
}
