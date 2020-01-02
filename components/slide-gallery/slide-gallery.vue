<template>

  <section class="slide-gallery">
    
    <!-- Slide Gallery -->
    <div class="image-aperture">
      <div class="image-strip"
           :style="stripPosition"
           @click="toggleModal('lightbox')">
        <div v-for="item in images"
             :style="$setBackgroundImage(item.image)"
             class="image-slide"></div>
      </div>
    </div>
    
    <!-- Slide Controls -->
    <div class="slide-controls">
      <div class="previous-image"
            @click="traverseDown">
        <SVG-Loader :icon="'horizontal-arrow'"></SVG-Loader>
      </div>

      <div class="next-image"
            @click="traverseUp">
        <SVG-Loader :icon="'horizontal-arrow'"></SVG-Loader>
      </div>
    </div>
    
    <!-- Lightbox -->
    <div class="lightbox-outer"
       :class="{'is-active': Modals.lightbox}">
    
      <div class="lightbox-close"
           @click="toggleModal('lightbox')">
        <SVG-Loader :icon="'close-button'"></SVG-Loader>
      </div>
      
      <div class="lightbox-inner">
        <img :src="mxn_traverseArray[mxn_counter].image"/>
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

import { traverseArray } from '~/mixins/traverseArray.js';
import {modalState} from '~/mixins/modalState.js';
  
export default {
  
  mixins: [traverseArray, modalState],
  
  props: ['images'],
  
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
    @include xy-size(100%);
    overflow: hidden;
    border-radius: $border-radius;
    @include shadow($under-shadow);
  }
  
  .image-strip {
    @include container(start,center,$no-wrap: true);
    @include xy-size(100%);
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
    @include shadow($under-shadow);
  }
  
  .next-image,
  .previous-image {
    z-index: 1;
    @include xy-size(3rem);
    @include wrapper(center, center);
    &:hover {cursor: pointer;} 
    .svg-icon {
      width: 1rem;
      margin: 0;
    }
  }
  
  .next-image {
    background-color: $brand-1;
    .svg-icon {
      fill: $offset-font-color;
      transform: rotate(180deg);
    }
  }
  .previous-image {
    background-color: $page-background;
    .svg-icon {
      fill: $font-color;
    }
  }
  
  
  ////Lightbox
  .lightbox-outer {
    @include fullscreen-overlay();
    @include standard-transition();
    
    &.is-active {
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














