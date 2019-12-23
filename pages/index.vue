<template>

  <main class="homepage">
  
    <page-header :content="Page.header[0]"></page-header>
    
    <page-intro-panel :content="{title: Page.pageTitle, intro: Page.pageIntro}">
      <div class="intro-content-right">
        <contact-form :form="ContactForm"></contact-form>
      </div>
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
      return this.$store.state.cms.homepage;
    },
    ContactForm: function() {
      return this.$store.state.cms.contactForm;
    }    
  }
  
}

</script>

<style lang="scss">

  .homepage {
    .contact-form {
      z-index: 1;
      width: 100%;
      @include position-from(
        $laptop,
        absolute,
        $top: -8rem,
        $right: 0,
      );
    }
  }
  

      
</style>

























