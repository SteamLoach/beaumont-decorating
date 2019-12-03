<template>
  <main>
    <page-header :content="Page.header[0]">
      <scroll-down-arrow :scroll="{target: '.page-header', axis: 'bottom'}"></scroll-down-arrow>
    </page-header>
    <Content-Panel-Loader :panels="Page.contentPanels"></Content-Panel-Loader>
  </main>
</template>


<script>

export default {
  
  computed: {
    Page: function() {
      return this.$store.state.cms.exteriorServices;
    }
  }
  
}

</script>


<style lang="scss">



</style>