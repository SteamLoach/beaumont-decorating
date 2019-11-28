<template>

  <main>
  
    <page-header :content="Page.header[0]"></page-header>
    
    <section class="">
        <contact-form :form="ContactForm"></contact-form>
    </section>
    
    <Content-Panel-Loader :panels="Page.contentPanels"></Content-Panel-Loader>
  
  </main>

</template>

<script>

export default {
  
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

</style>
