<template>

  <section class="slide-gallery">
  
    <image-lightbox :src="images[mxn_counter].url"></image-lightbox>
    
    <div class="image-aperture">
      <div class="image-strip"
           :style="stripPosition"
           @click="isActive({target: 'lightBox', state: true})">
        <div v-for="item in images"
             :style="$setBackgroundImage(item.url)"
             class="image-slide"></div>
      </div>
    </div>
    
    <div class="slide-controls">
      <div class="previous-image"
            @click="traverseDown">
        <img src="~/assets/images/left-arrow.webp">
      </div>

      <div class="next-image"
            @click="traverseUp">
        <img src="~/assets/images/right-arrow-white.webp">
      </div>
    </div>
  
  </section>
  

</template>


<script>

import {isActive} from '~/mixins/isActive.js';
import { traverseArray } from '~/mixins/traverseArray.js';
import imageLightbox from '~/components/slide-gallery/image-lightbox.vue'
  
export default {
  
  mixins: [isActive, traverseArray],
  
  props: ['images'],
  
  components: {
    imageLightbox,
  },
  
  data() {
    return {
      mxn_counter: 0,
    }
  },
  
  computed: {
    
    mxn_traverseArray: function() {
      return this.images;
    },
    
    stripPosition: function() {
      return `left: -${this.mxn_counter * 100}%`
    }
  },
  
}


</script>


<style lang="scss">
  
  .slide-gallery {
    position: relative;
    @include height-scale(
      $default: 60vh,
      $on-tablet: 70vh,
      $on-laptop: 65vh,
      $on-desktop: 80vh,
    );
    @include column-scale(
      $default: 24,
    );
    @include margin-scale(
      bottom,
      $default: $outer-space-medium,
    );
    @include content-card(medium);
  }
  
  .image-aperture {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  
  .image-strip {
    height: 100%;
    @include container(start,center);
    flex-wrap: nowrap;
    width: 100%;
    @include standard-transition(
      $duration: 0.8s,
      $function: ease-out,
    );
    &:hover {cursor: pointer;}
  }
  
  .image-slide {
    height: 100%;
    min-width: 100%;
    max-width: 100%;
    @include centered-background();
  }
  
  .slide-controls {
    position: absolute;
      bottom: -1rem;
    @include x-center-absolute();
    @include wrapper(center, center, $no-wrap: true);
    @include under-shadow();
  }
  
  .next-image,
  .previous-image {
    z-index: 1;
    height: 4rem;
    width: 4rem;
    @include wrapper(center, center);
    &:hover {cursor: pointer;} 
  }
  
  .next-image {background-color: $brand-1;}
  .previous-image {background-color: $page-background;}

  
</style>