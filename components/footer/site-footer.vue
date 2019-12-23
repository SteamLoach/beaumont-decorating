<template>

  <footer class="site-footer">
    <div class="site-footer-inner">
      <section class="footer-column">
        <ul class="contact">
          <li v-for="item in siteFooter.contactColumn"
              :key="item.key">
            <SVG-Loader :icon="item.icon"></SVG-Loader>
            <div v-html="item.text"></div>
          </li>
        </ul>
      </section>

      <section class="footer-column">
        <ul class="quicklinks">
          <li v-for="item in siteFooter.quicklinkColumn"
              :key="item.key">
            <nuxt-link :to="item.route"> {{item.title}} </nuxt-link>
          </li>
          <li @click="$scrollPage({target: 'body'})"> <span>Top</span>  </li>
        </ul>
      </section>

      <section class="footer-column">
        <ul class="credits">
          <li v-for="item in siteFooter.creditColumn"
              :key="item.key"
              v-html="item.text">
          </li>
        </ul>
      </section>
    </div>
  </footer>

</template>


<script>

export default {
  
  computed: {
    siteFooter: function() {
      return this.$store.state.cms.siteFooter;
    }
  }
  
}

</script>



<style lang="scss">

  .site-footer {
    @include row(center, center);
    color: $offset-font-color;
    background-color: $brand-1;
    
    .svg-icon {
      height: 1.2rem;
      width: 1.2rem;
      margin-right: $space-lighter;
      fill: $offset-font-color;
    }
  }
  
  .site-footer-inner {
    @include row(between, start);
    max-width: $standard-content-width;
    @include pad-scale(
      y,
      $space-light,
    );
  }
  
  .footer-column {
    @include column-scale (
      $default: 24,
      $on-laptop: 8,
    );
    padding: $space-light;
    
    ul {
      @include column-menu(
        $link-width: 100%,
        $link-align: left,
        $link-color: $offset-font-color,
        $link-size: 1rem,
      );
      
      li {
        @include wrapper(start, center, $no-wrap: true);
      }
      
      &.quicklinks {
      @include text-align-from($laptop, center);
      }
    
      &.credits {
      @include text-align-from($laptop, right);
      }
    }
    
      a, span {
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      } 
  }
  
  

</style>