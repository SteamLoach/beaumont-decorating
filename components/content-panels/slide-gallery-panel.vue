<template>

  <article v-editable="content"
           class="content-panel slide-gallery-panel">
  
    <div class="content-panel-inner">
    
      <slide-gallery :images="content.gallery_images"></slide-gallery>
  
    </div>
  
  </article>

</template>


<script>

export default {
  
  props: ['content']
  
}

</script>


<style lang="scss">

  .slide-gallery-panel {
    @include margin-scale(
      y,
      $on-tablet: $outer-space-light,
      $on-laptop: $outer-space-medium,
    );
  }

</style>