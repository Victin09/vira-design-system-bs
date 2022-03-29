import ViraDesignSystem from './api/index';
import Core from './core/core';
import boot from './api/boot';
import * as components from './core/index';
import { each } from 'vds-util';

// register components
each(components, (component, name) => ViraDesignSystem.component(name, component));

// core functionality
ViraDesignSystem.use(Core);

boot(ViraDesignSystem);

export default ViraDesignSystem;
