<template>

  <nav class="primary-nav">
  
    <ul class="nav-item-wrapper">
      <li v-for="item in primaryNav.menuItems"
          :key="item.key">
        <nuxt-link :to="item.route"> {{item.title}} </nuxt-link>
      </li>
    </ul>
  
  </nav>

</template>


<script>

export default {
  
  computed: {
    primaryNav: function() {
      return this.$store.state.cms.primaryNavigation;
    }
  }
  
}

</script>



<style lang="scss">

  .primary-nav {
    z-index: 999;
    position: absolute;
    @include row(end, center);
    @include standard-transition(all);
    
    &:hover {
      background-color: rgba($shade-light, $base-opacity);
    }
  }
  
  .nav-item-wrapper {
    @include inline-menu(
      $link-color: $brand-1,
      $link-pad: $space-lighter,
    );
    @include hidden-until($laptop);
    @include column-scale(
      $default: 20,
      $on-desktop: 16,
    );
    padding-top: $space-lighter;
    
    a {
      border-bottom: $space-lightest solid transparent;
      @include standard-transition(all);
      &:hover,
      &.nuxt-link-exact-active {
        border-color: $brand-1;
      }
    }
    
    
  }

</style>