import globalAPI from './global';
import hooksAPI from './hooks';
import stateAPI from './state';
import instanceAPI from './instance';
import componentAPI from './component';
import * as util from 'vds-util';

const ViraDesignSystem = function (options) {
    this._init(options);
};

ViraDesignSystem.util = util;
ViraDesignSystem.data = '__vds__';
ViraDesignSystem.prefix = 'vds-';
ViraDesignSystem.options = {};
ViraDesignSystem.version = VERSION;

globalAPI(ViraDesignSystem);
hooksAPI(ViraDesignSystem);
stateAPI(ViraDesignSystem);
componentAPI(ViraDesignSystem);
instanceAPI(ViraDesignSystem);

export default ViraDesignSystem;
