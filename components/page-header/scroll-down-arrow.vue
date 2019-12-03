<template>

  <span class="scroll-down-arrow"
        @click="$scrollPage(scroll)">
    <SVG-Loader :icon="'down-arrow'"></SVG-Loader>
  </span>

</template>


<script>

export default {
  
  props: ['scroll']
  
}

</script>


<style lang="scss">

  .scroll-down-arrow {
    position: relative;
      top: 0rem;
    display: inline-block;
    margin: 0 auto;
    @include standard-transition(all);
    &:hover {
      cursor: pointer;
      top: $space-lighter;
    }
    .svg-icon {
      height: 2rem;
      width: 2rem;
      fill: $offset-font-color;
    }
  }

</style>