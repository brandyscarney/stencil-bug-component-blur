import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-bug-component-blur',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "shell",
  },
  extras: {
    /**
     * `experimentalSlotFixes` is necessary in Stencil v4 until the fixes described in
     * {@link https://stenciljs.com/docs/config-extras#experimentalslotfixes the Stencil docs for the flag} are the
     * default behavior (slated for a future Stencil major version).
     */
    experimentalSlotFixes: true,
    /**
     * `experimentalScopedSlotChanges` is necessary in Stencil v4 until the fixes described in
     * {@link https://stenciljs.com/docs/config-extras#experimentalscopedslotchanges the Stencil docs for the flag} are
     * the default behavior (slated for a future Stencil major version).
     */
    experimentalScopedSlotChanges: true,
  }
};
