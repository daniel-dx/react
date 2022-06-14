import {
  activate as _activateBackend,
  initialize as _initializeBackend,
  createBridge as _createBackendBridge,
} from 'react-devtools-inline/backend';

export const activateBackend = _activateBackend;
export const initializeBackend = _initializeBackend;
export const createBackendBridge = _createBackendBridge;

export default {
  activateBackend,
  initializeBackend,
  createBackendBridge,
};
