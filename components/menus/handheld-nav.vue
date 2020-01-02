<template>

  <nav class="handheld-nav"
       :class="{'is-active': Modals.handheldNav}">
  
    <div class="handheld-nav-close"
         @click="toggleModal('handheldNav')">
      <SVG-Loader :icon="'thick-menu-close'"></SVG-Loader>
    </div>
    
    <ul class="handheld-nav-links">
      <li v-for="item in primary_nav.nav_items"
          :key="item._uid">
        <span @click="toggleModal('handheldNav', 0)">
          <nuxt-link :to="item.route.url"> {{item.title}} </nuxt-link>
        </span>
      </li>
    </ul>
  
  </nav>

</template>

<script>


import {modalState} from '~/mixins/modalState.js';
  
export default {
  
  mixins: [modalState],
  
  computed: {
    primary_nav: function() {
      return this.$store.state.cms.primary_nav.content;
    }
  }
  
}  
  
</script>

<style lang="scss">

  .handheld-nav {
    @include slide-in-modal(
      $in-from: right,
    );
    @include column-scale(
      $default: 24,
    );
    text-align: center;
    background-color: $page-background;
    @include standard-transition($function: linear);
  }
  
  .handheld-nav-close {
    @include wrapper(end, center);
    @include pad-scale(
      xy,
      $default: $space-light,
    );
    &:hover {cursor: pointer};
    .svg-icon { 
      @include xy-size($space-heavy);
      fill: $brand-1;
    }
  }
  
  .handheld-nav-links {
    @include column-menu(
      $link-size: 1.4rem,
      $link-color: $brand-1,
    );
    
      a {
        @include y-margin($outer-space-lightest);
        border-bottom: $space-lightest solid transparent;
        @include standard-transition(all);
        
        &:hover,
        &.nuxt-link-exact-active {
        border-color: $brand-1;
        }
      } 
    }

</style>