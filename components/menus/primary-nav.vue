<template>

  <nav v-editable="primary_nav"
       class="primary-nav">
  
    <ul class="nav-item-wrapper">
      <li v-for="item in primary_nav.nav_items"
          :key="item._uid">
        <nuxt-link :to="item.route.url"> {{item.title}} </nuxt-link>
      </li>
    </ul>
  
  </nav>

</template>


<script>

export default {
  
  computed: {
    primary_nav: function() {
      return this.$store.state.cms.primary_nav.content;
    },
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