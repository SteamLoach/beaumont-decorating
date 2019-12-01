<template>
  <div>
    <primary-nav></primary-nav>
    <handheld-nav :state="handheldNavState"></handheld-nav>
    <span class="handheld-nav-toggle-wrapper"
          @click="isActiveToggle('handheldNav')">
      <handheld-nav-toggle :state="handheldNavState"></handheld-nav-toggle>
    </span>
    <nuxt />
    <site-footer></site-footer>
  </div>
</template>

<script>

import primaryNav from '~/components/menus/primary-nav.vue';
import handheldNav from '~/components/menus/handheld-nav.vue';
import handheldNavToggle from '~/components/menus/handheld-nav-toggle.vue';
import siteFooter from '~/components/footer/site-footer.vue';

import {isActive} from '~/mixins/isActive.js';
  
export default {
  
  mixins: [isActive],
  
  components: {
    primaryNav,
    handheldNav,
    handheldNavToggle,
    siteFooter,
  },
  
  computed: {
    handheldNavState: function() {
      return this.$store.state.utils.handheldNav;
    }
  }
  
}

</script>

<style lang="scss">

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
