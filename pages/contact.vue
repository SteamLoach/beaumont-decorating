<template>

  <main class="contact-page">
  
    <contact-form :form="ContactForm"></contact-form>
  
  </main>

</template>


<script>

export default {
  computed: {
    ContactForm: function() {
      return this.$store.state.cms.contactForm;
    }
  }
}

</script>


<style lang="scss">

  .contact-page {
    @include row(center, center);
    background: $shade-light;
    
    .contact-form {
      @include y-margin($outer-space-heavier);
      @include x-margin($outer-space-lighter);
      border-radius: 0;
      box-shadow: none;
    }
    
  }

</style>

