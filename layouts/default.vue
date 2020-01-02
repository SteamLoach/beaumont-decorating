<template>
  <div class="site-wrapper">
    
    <primary-nav></primary-nav>
    <handheld-nav></handheld-nav>  

    <div class="handheld-nav-toggle"
         @click="toggleModal('handheldNav')">
      <SVG-Loader :icon="'menu-button'"></SVG-Loader>
    </div>
        
    <nuxt />
    
  <site-footer></site-footer>
  
  </div>
</template>

<script>

import primaryNav from '~/components/menus/primary-nav.vue';
import handheldNav from '~/components/menus/handheld-nav.vue';
import handheldNavToggle from '~/components/menus/handheld-nav-toggle.vue';
import siteFooter from '~/components/footer/site-footer.vue';

import {modalState} from '~/mixins/modalState.js';
  
export default {
  
  mixins: [modalState],
  
  components: {
    primaryNav,
    handheldNav,
    handheldNavToggle,
    siteFooter,
  },
  
  computed: {
    Utils: function() {
      return this.$store.state.utils;
    },
        
  }
  
}

</script>

<style lang="scss">
  
  html {@include html-base();}
  
  .site-wrapper {
    position: relative;
  }
  
  .handheld-nav-toggle {
    z-index: 1;
    position: fixed;
      right: 0;
    @include hidden-from($laptop);
    @include xy-size($space-heavy);
    @include margin-scale(
      xy,
      $default: $space-light,
      $on-tablet: $outer-space-lightest,
    );
    &:hover {cursor: pointer;}
    .svg-icon {
      fill: $brand-1;
    }
  }
  
  .handheld-nav-toggle-wrapper {
    z-index: 999;
    position: fixed;
      right: 0;
    @include hidden-from($laptop);
    @include margin-scale(
      xy,
      $default: $space-lighter,
      $on-tablet: $outer-space-lightest,
    );
    
  }
  
</style>
