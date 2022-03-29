import ViraDesignSystem from './vds-core';
import * as components from './components/index';
import { each } from 'vds-util';

each(components, (component, name) => ViraDesignSystem.component(name, component));

export default ViraDesignSystem;
