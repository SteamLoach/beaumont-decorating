<template>

  <section class="content-panel-loader">
    <component v-for="panel in panels"
               :is="panel.componentReference"
               :key="panel.key"
               :content="panel"></component>
  </section>

</template>



<script>
  
import servicePanel from './service-panel.vue'
import reviewPanel from './review-panel.vue'
import recentProjectPanel from './recent-project-panel.vue'
import slideGalleryPanel from './slide-gallery-panel.vue'
import teaserPanel from './teaser-panel.vue'
  
export default {
  
  props: ['panels'],
  
  components: {
    servicePanel,
    reviewPanel,
    recentProjectPanel,
    slideGalleryPanel,
    teaserPanel,
  }
  
}

</script>

<style lang="scss">

  .content-panel-loader {
    @include row(center, center);
    
    .content-panel {
      @include row(center, center);
      @include pad-scale(
        x,
        $default: $space-lighter,
        $on-tablet: $space-medium,
        $on-laptop: $space-heavy,
      );
      @include pad-scale(
        y,
        $default: $space-heavy,
      ); 
    }
    
    .content-panel-title {
      width: 100%;
      @include pad-scale (
        x,
        $default: $space-lighter,
      );
      padding-bottom: $space-light;
      text-align: center;
      span {
        @include pseudo-span(
          $has-height: 5px,
          $has-width: 75%,
          $has-spacing: $space-light,
          $is-centered: true,
        );
      }
    }
    
    .content-panel-inner {
      @include row(around, stretch);
      max-width: $standard-content-width;
    }

    
  }

</style>