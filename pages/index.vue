<template>

  <main>
  
    <page-header :content="Page.header[0]"></page-header>
    
    
    <section class="page-intro-panel">
      <div class="page-intro-inner">
        <article class="page-title-wrapper">
          <h2> {{Page.pageTitle}} </h2>
          <p> {{Page.pageIntro}} </p>
        </article>
        <contact-form :form="ContactForm"></contact-form>
      </div>
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

  .page-intro-panel {
    @include row(center, center);
    
    .page-intro-inner {
      @include row(center, center);
      @include x-from($laptop, start);
      max-width: 1248px;
      @include margin-scale(
        x,
        $default: 0,
        $on-laptop: $space-light,
      );
      @include margin-scale(
        bottom,
        $default: $space-light,
        $on-laptop: $outer-space-heaviest,
      );
    }
    
    .page-title-wrapper {
      @include pad-scale(
        xy,
        $default: $space-heavy,
      );
      font-size: 1rem;
      @include text-align-until($laptop, center);
      
      h2 {
        @include underline-span-until(
          $laptop,
          $width: 50%,
          $centered: true,
        );
        @include underline-span-from(
          $laptop,
          $width: 75%,
        );
      }
      
      h2, p {
        @include pad-scale(
          y,
          $default: $space-light,
        );
      }
    }
    
    .contact-form {
      z-index: 1;
      @include position-from(
        $laptop,
        absolute,
        $right: 0,)
    }
    
    .contact-form,
    .page-title-wrapper {
      @include column-scale(
        $default: 23,
        $on-tablet: 20,
        $on-laptop: 12,
      );
    }
  }
  
</style>

























