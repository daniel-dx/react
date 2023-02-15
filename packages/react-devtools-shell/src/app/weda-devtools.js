/** @flow */

import {createElement} from 'react';
import {createRoot} from 'react-dom/client';

import {
  activateBackend,
  initializeBackend,
  initializeFrontend,
  hookNamesModuleLoaderFunction,
} from './react-devtools-api';

// This is a pretty gross hack to make the runtime loaded named-hooks-code work.
// TODO (Webpack 5) Hoepfully we can remove this once we upgrade to Webpack 5.
// $FlowFixMe
__webpack_public_path__ = '/dist/'; // eslint-disable-line no-undef

const iframe = ((document.getElementById('target'): any): HTMLIFrameElement);

const {contentDocument, contentWindow} = iframe;

// Helps with positioning Overlay UI.
contentWindow.__REACT_DEVTOOLS_TARGET_WINDOW__ = window;

initializeBackend(contentWindow);

// Initialize the front end and activate the backend early so that we are able
// to pass console settings in local storage to the backend before initial render
const DevTools = initializeFrontend(contentWindow);

// Activate the backend only once the DevTools frontend Store has been initialized.
// Otherwise the Store may miss important initial tree op codes.
activateBackend(contentWindow);

const container = ((document.getElementById('devtools'): any): HTMLElement);

inject('dist/app-index.js', () => {
  const root = createRoot(container);
  root.render(
    createElement(DevTools, {
      browserTheme: 'light',
      enabledInspectedElementContextMenu: true,
      hookNamesModuleLoaderFunction,
      canViewElementSourceFunction: false,
      warnIfLegacyBackendDetected: true,
      warnIfUnsupportedVersionDetected: true,

      // 隐藏 tabbar
      showTabBar: false,
      // 隐藏设置
      hideSettings: true,
      // 隐藏 Suspend the selected component
      hideToggleSuspenseAction: true,
      // 隐藏 Log this component data to the console
      hideLogAction: true,
      // 隐藏 View source for this element
      hideViewSourceAction: true,
      // 隐藏 renderedBy
      hideRenderedBy: true
    }),
  );
});

function inject(sourcePath, callback) {
  const script = contentDocument.createElement('script');
  script.onload = callback;
  script.src = sourcePath;

  ((contentDocument.body: any): HTMLBodyElement).appendChild(script);
}
