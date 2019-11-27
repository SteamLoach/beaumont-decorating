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
  
export default {
  
  props: ['panels'],
  
  components: {
    servicePanel,
  }
  
}

</script>

<style lang="scss">

  .content-panel-loader {
    @include row(center, center);
    
    .content-panel {
      @include pad-scale(
        x,
        $default: $space-lighter,
        $on-tablet: $space-medium,
        $on-laptop: $space-heavy,
      );
      @include pad-scale(
        y,
        $default: $space-lighter,
        $on-tablet: $space-light,
        $on-laptop: $space-medium,
      ); 
    }
    
    .content-panel-title {
      @include pad-scale (
        bottom, 
        $default: $space-heavier,
      );
      text-align: center;
      span {
        @include underline-span(
          $height: 5px,
          $width: 75%,
          $centered: true,
        );
        padding-bottom: $space-medium;
      }
    }
    
    .content-panel-inner {
      @include row(around, stretch);
      max-width: $max-content-width;
    }

    
  }

</style>