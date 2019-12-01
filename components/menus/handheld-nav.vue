<template>

  <nav class="handheld-nav"
       :class="state">
  
    <ul>
      <li v-for="item in handheldNav.menuItems"
          :key="item.key">
        <nuxt-link :to="item.route"> {{item.title}} </nuxt-link>
      </li>
    </ul>
  
  </nav>

</template>

<script>

export default {
  
  props: ['state'],
  
  computed: {
    handheldNav: function() {
      return this.$store.state.cms.primaryNavigation;
    }
  }
  
}  
  
</script>

<style lang="scss">

  .handheld-nav {
    z-index: 10;
    overflow-y: scroll;
    position: fixed;
      top: 0;
      left: -100%;
    height: 100vh;
    @include column-scale(
      $default: 24,
    );
    @include pad-scale(
      y,
      $default: $space-heavier,
    );
    background-color: $page-background;
    @include standard-transition($function: linear);
    
    &.is-active {
      left: 0;
    }
    
    a {
      width: 100%;
      @include pad-scale(
        y,
        $default: $space-light,
      );
      text-align: center;
      color: $brand-1;
      font-size: 1.4rem;

    }
  }

</style>