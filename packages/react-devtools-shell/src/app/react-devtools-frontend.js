import {
  initialize as _initializeFrontend,
  createBridge as _createFrontendBridge,
} from 'react-devtools-inline/frontend';

export function hookNamesModuleLoaderFunction() {
  return import('react-devtools-inline/hookNames');
}
export const initializeFrontend = _initializeFrontend;
export const createFrontendBridge = _createFrontendBridge;
