import {
  activate as _activateBackend,
  initialize as _initializeBackend,
} from 'react-devtools-inline/backend';
import {initialize as _initializeFrontend} from 'react-devtools-inline/frontend';

export function hookNamesModuleLoaderFunction() {
  return import('react-devtools-inline/hookNames');
}

export const activateBackend = _activateBackend
export const initializeBackend = _initializeBackend
export const initializeFrontend = _initializeFrontend
