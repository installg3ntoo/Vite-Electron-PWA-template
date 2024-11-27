import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import { resolve } from 'path'

import baseConfig from './vite.config';



// https://vitejs.dev/config/
export default defineConfig({
  main: {
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'electron/main/index.js')
        }
      },
      outDir: resolve(__dirname, 'dist-electron/out/main'),
    },
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'electron/preload/index.js')
        }
      },
      outDir: resolve(__dirname, 'dist-electron/out/preload'),
    },
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    ...baseConfig,
    root: '.',
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'index.html')
        }
      },
      outDir: resolve(__dirname, 'dist-electron/out/renderer'),
    },
    define: {
      'import.meta.env.VITE_REACT_APP_ENV': JSON.stringify('electron'),
    },
  }
})
