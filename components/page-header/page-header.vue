<template>

  <header class="page-header"
          :style="$setBackgroundImage(content.image.url)">
  
    <div class="header-inner">
      <div class="title-wrapper">
        <h1> {{content.title}} </h1>
        <h2> {{content.strapline}} </h2>
        <slot></slot>
      </div>
    </div>
  
  </header>

</template>


<script>

export default {
  
  props: ['content'],
  
}

</script>



<style lang="scss">

  .page-header {
    @include centered-background();
  }
  
  .header-inner {
    @include height-scale(
      $default: 90vh,
    );
    @include row(center, center);
    text-align: center;
    background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8), rgba(0,0,0,0));
    
    .title-wrapper  {
      
      h1, h2 {
        @include pad-scale(
          xy,
          $default: $space-lighter,
        );
        color: $offset-font-color;
      }
      
      h2 {font-weight: 300;}
      
      h1 {
        @include font-size-scale(
          $default: 2rem,
          $on-tablet: 2.6rem,
          $on-laptop: 3.2rem,
        );
      }
      h2 {
        @include font-size-scale(
          $default: 1rem,
          $on-tablet: 1.4rem,
          $on-laptop: 1.8rem,
        );
      }
    }
  }
  

</style>