import {defineConfig} from 'vite'
import Vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import voie from "vite-plugin-voie";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Components({
      dirs: "src/components",
      dts: true,
    }),
    voie(),
  ]
})
