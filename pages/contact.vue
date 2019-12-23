<template>

  <main class="contact-page">
    
    <div class="contact-page-inner">
      <contact-form :form="ContactForm"></contact-form>

      <article class="contact-details">

        <div v-for="item in ContactDetails"
             :key="item.key"
             class="contact-item">
          <SVG-Loader :icon="item.icon"></SVG-Loader>
          <div v-html="item.text"></div>
        </div>

      </article>
    </div>
    
  </main>

</template>


<script>

  
export default {
  
  head() {
    return {
      title: "Contact | Beaumont Decorating Chesterfield",
      meta: [
        { hid: 'description', name: 'description', content: "test test" }
      ]
      
    }
  },
  
  computed: {
    ContactForm: function() {
      return this.$store.state.cms.contactForm;
    },
    ContactDetails: function() {
      return this.$store.state.cms.siteSettings.contactDetails;
    }
    
  }
}

</script>


<style lang="scss">
  
  .contact-page {
    background: $brand-shade-1;
    
    .contact-page-inner {
      @include row(around, start);
      max-width: 1400px;
      @include pad-scale(
        y,
        $default: $outer-space-heavier,
        $on-laptop: $outer-space-heavier,
      );
      margin: 0 auto;
      }
    
    .contact-form {
      @include column-scale(
        $default: 22,
        $on-laptop: 12,
      );
      @include margin-scale(
        y,
        $on-laptop: $outer-space-heavy,
      );
    }
    
    .contact-details {
      @include card($medium-card...);
      @include column-scale(
        $default: 22, 
        $on-tablet: 18,
        $on-laptop: 8,
      );
      @include margin-scale(
        top,
        $default: $outer-space-medium,
        $on-laptop: $outer-space-heavy,
      );
    }
    
    .contact-item {
      @include wrapper(start, start, $no-wrap: true);
      font-size: 1rem;
      h4 {padding-bottom: $space-lightest;}
      div {padding-left: $space-light;}
      .svg-icon {
        min-height: 1.6rem;
        min-width: 1.6rem;
        fill: $brand-1;
      }
    }
    
  }

</style>

