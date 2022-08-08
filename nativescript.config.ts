import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'de.awesomebible.Losungen',
  appPath: 'app',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig;