<template>

  <main>
  
    <page-header :content="Page.header[0]"></page-header>
    
    <Content-Panel-Loader :panels="Page.contentPanels"></Content-Panel-Loader>
  
  </main>

</template>

<script>

export default {
  
  computed: {
    Page: function() {
      return this.$store.state.cms.homepage;
    }
  }
  
}

</script>

<style lang="scss">

</style>
