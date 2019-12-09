<template>

  <section class="slide-gallery">
    
    <!-- Slide Gallery -->
    <div class="image-aperture">
      <div class="image-strip"
           :style="stripPosition"
           @click="isActive({target: 'lightbox', state: true})">
        <div v-for="item in images"
             :style="$setBackgroundImage(item.url)"
             class="image-slide"></div>
      </div>
    </div>
    
    <!-- Slide Controls -->
    <div class="slide-controls">
      <div class="previous-image"
            @click="traverseDown">
        <SVG-Loader :icon="'triangle-icon'"></SVG-Loader>
      </div>

      <div class="next-image"
            @click="traverseUp">
        <SVG-Loader :icon="'triangle-icon'"></SVG-Loader>
      </div>
    </div>
    
    <!-- Lightbox -->
    <div class="lightbox-outer"
       :class="lightboxState">
    
      <div class="lightbox-close"
           @click="isActive({target: 'lightbox', state: false})">
        <SVG-Loader :icon="'close-button'"></SVG-Loader>
      </div>
      
      <div class="lightbox-inner">
        <img :src="mxn_traverseArray[mxn_counter].url"/>
      </div>
      
      <div class="lightbox-next" 
           @click="traverseUp">
        <span>&#8250;</span>
      </div>
      <div class="lightbox-previous" 
           @click="traverseDown">
        <span>&#8249;</span>
      </div>
  
    </div>
  
  </section>
  

</template>


<script>

import {isActive} from '~/mixins/isActive.js';
import { traverseArray } from '~/mixins/traverseArray.js';
  
export default {
  
  mixins: [isActive, traverseArray],
  
  props: ['images'],
  
  data() {
    return {
      mxn_counter: 0,
      fader: false,
    }
  },
    
  computed: {
    
    mxn_traverseArray: function() {
      return this.images;
    },
    
    stripPosition: function() {
      return `left: -${this.mxn_counter * 100}%`
    },
    
    lightboxState: function() {
      return this.$store.state.utils.lightbox ;
    },
  }, 
}


</script>


<style lang="scss">
  
  
  ////Slide Gallery
  .slide-gallery {
    position: relative;
    min-height: 350px;
    @include height-scale(
      $default: 60vh,
      $on-tablet: 70vh,
      $on-laptop: 75vh,
      $on-desktop: 80vh,
    );
    @include column-scale(
      $default: 24,
    );
    @include margin-scale(
      bottom,
      $default: $outer-space-medium,
    );
    
  }
  
  .image-aperture {
    height: 100%;
    width: 100%;
    overflow: hidden;
    border-radius: $border-radius;
    @include under-shadow();
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
      bottom: -1.5rem;
    @include x-center-absolute();
    @include wrapper(center, center, $no-wrap: true);
    @include under-shadow();
  }
  
  .next-image,
  .previous-image {
    z-index: 1;
    height: 3rem;
    width: 3rem;
    @include wrapper(center, center);
    &:hover {cursor: pointer;} 
    .svg-icon {
      width: 0.8rem;
      margin: 0;
    }
  }
  
  .next-image {
    background-color: $brand-1;
    .svg-icon {fill: $offset-font-color;}
  }
  .previous-image {
    background-color: $page-background;
    .svg-icon {
      fill: $font-color;
      transform: rotate(180deg);
    }
  }
  
  
  ////Lightbox
  .lightbox-outer {
    z-index: 999;
    overflow: hidden;
    position: fixed;
    opacity: 0; 
      top: 0;
      left: 0;
    height: 0%;
    width: 0%;
    background-color: rgba(#000, 0.9);
    @include standard-transition();
    
    &.is-active {
      display: block;
      opacity: 1;
      height: 100%;
      width: 100%;
      @include pad-scale(
      xy,
      $default: $space-lighter,
      $on-phablet: $space-light,
      $on-laptop: $space-medium,
      $on-desktop: $space-heaviest,
    );
    }
  }
  
  .lightbox-close {
    z-index: 999;
    position: absolute;
      top: $space-light;
      left: $space-light;
    @include height-scale(
      $default: 2rem,
    );
    @include custom-scale(
      $default: 2rem,
    );
    &:hover {cursor: pointer;}
    .svg-icon {
      fill: $page-background;
    }
  }
  
  .lightbox-inner {
    @include wrapper(center, center);
    height: 100%;
    width: 100%;
    img {
      border-radius: $border-radius;
    }
  }
    
  .lightbox-next,
  .lightbox-previous {
    z-index: 5;
    position: absolute;
    padding: $space-lighter;
    @include font-size-scale(
      $default: 4rem,
      $on-tablet: 6rem,
      $on-laptop: 8rem,
    );
    &:hover{cursor: pointer}
  }
  
  .lightbox-next {
    right: 0;
    @include y-center-absolute();
  }
  .lightbox-previous {
    left: 0;
    @include y-center-absolute();
  }

  
</style>














