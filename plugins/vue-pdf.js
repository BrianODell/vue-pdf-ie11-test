import Vue from 'vue'
import pdf from "vue-pdf/src/vuePdfNoSssNoWorker.vue";

import(
  /* webpackChunkName: "my-chunk-name" */
  '~/node_modules/pdfjs-dist/build/pdf.worker.entry.js'
);

Vue.component('vue-pdf', pdf)
