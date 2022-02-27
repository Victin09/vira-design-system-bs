import { registerProp } from './behaviors/widget';
import { VdsEl } from './elements';
const GENERATORS = VdsEl.prototype.vdsGenerators;

export default {
  define(name, cb) {
    registerProp(name, cb);

    if (!GENERATORS[name]) {
      GENERATORS[name] = '';
    }
  },
};
