<template>

  <main>
    
    <page-header :content="Page.header[0]">
      <scroll-down-arrow :scroll="{target: '.page-header', axis: 'bottom'}"></scroll-down-arrow>
    </page-header>
    
    <page-intro-panel :content="{title: Page.pageTitle, intro: Page.pageIntro}">
      <img class="page-intro-image" :src="Page.pageIntroImage.url"/>
    </page-intro-panel>
    
    <Content-Panel-Loader :panels="Page.contentPanels"></Content-Panel-Loader>
    
  </main>

</template>


<script>

import {metaData} from '~/mixins/metaData';
  
export default {
  
  mixins: [metaData],
  
  computed: {
    Page: function() {
      return this.$store.state.cms.interiorServices;
    }
  }
}

</script>


<style lang="scss">



</style>