<template>
  <div class="container">
    <client-only>
      <vue-pdf class="your-pdf-class" :src="pdfSrc" :page="1" @num-pages="pdfPageCount = $event"></vue-pdf>
      <div v-if="pdfPageCount > 1">
          <div v-for="(pageNum, index) in pdfPageCount " :key="index">
              <vue-pdf class="your-pdf-class" :src="pdfSrc" :page="pageNum" v-if="pageNum > 1"></vue-pdf>
          </div>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
        pdfSrc: '/compressed.tracemonkey-pldi-09.pdf',
        pdfPageCount : 0,
    }
  }
}
</script>
