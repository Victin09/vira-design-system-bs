import Behavior from './behavior';
import { generateId, query } from '../helpers';

let counter = 0;

export default class DebugBehavior extends Behavior {
  constructor(host, value) {
    super(host, value);

    this.debuggerId = value;
  }

  connected() {
    this.connect();

    this.log('connected');
  }

  changed(name, value) {
    this.log('changed', { name, value });
  }

  disconnected() {
    this.log('disconnected');
  }

  connect() {
    const debugEl = this.getDebugger();

    if (!debugEl) return;

    debugEl.vdsUse('debugger').then(Debug => {
      Debug.componentPromise.then(() => {
        const { host } = this;

        if (!host.vdsDebugId) {
          const debugId = ++counter;

          window[`el${debugId}`] = host;

          Object.keys(host.vdsBehaviors || {})
            .forEach(name => {
              window[`${name}${counter}`] = host.vdsBehaviors[name];
            });

          host.vdsDebugId = debugId;
        }

        Debug.set({ target: host });
      });
    });
  }

  getDebugger() {
    const { host } = this;
    let id = this.debuggerId.trim();

    if (this.debugger && this.debugger.vdsId === id) {
      return this.debugger;
    }

    if (!id) {
      const debugEl = query(host, 'vds-debug');

      if (debugEl) {
        generateId(debugEl);

        this.debuggerId = debugEl.vdsId;

        this.debugger = debugEl;

        return debugEl;
      } else {
        return;
      }
    }

    const debugEl = query(host, `#${id.trim()}`);

    if (debugEl) {
      this.debugger = debugEl;

      return debugEl;
    }
  }

  log(event, detail) {
    const debugEl = this.getDebugger();

    if (!debugEl) return;

    debugEl.vdsUse('debugger').then(Debug => {
      Debug.componentPromise.then(() => {
        Debug.component.log(event, detail);
      });
    });
  }
}
