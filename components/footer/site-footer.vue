<template>

  <footer v-editable="site_footer"
          class="site-footer">
    <div class="site-footer-inner">

      <footer-column v-for="column in site_footer.footer_columns"
                     :column="column"
                     :key="column._uid">
      </footer-column>  
      
    </div>
  </footer>

</template>


<script>

import footerColumn from '~/components/footer/footer-column.vue';
  
export default {
  
  components: {
    footerColumn,
  },
  
  computed: {
    site_footer: function() {
      return this.$store.state.cms.site_footer.content;
    },
  },
    
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
      margin-right: $space-light;
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
  
  
  

</style>