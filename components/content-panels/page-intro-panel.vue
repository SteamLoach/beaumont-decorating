<template>

  <section class="page-intro-panel">
    <div class="page-intro-inner">
      <article class="page-intro-wrapper">
        <h2> {{content.title}} </h2>
        <p> {{content.intro}} </p>
      </article>
      <slot></slot>
    </div>
  </section>

</template>


<script>

export default {

  props: ['content'],
  
}

</script>


<style lang="scss">

  .page-intro-panel {
    @include row(center, center);
    
    .page-intro-inner {
      @include row(center, start);
      @include x-from($laptop, between);
      max-width: 1400px;
      @include pad-scale(
        x,
        $default: $space-lighter,
        $on-laptop: $space-heavy,
      );
      @include pad-scale(
        y,
        $default: $space-heavy,
        $on-laptop: $space-heaviest,
      );
    }
    
    .page-intro-wrapper,
    .page-intro-image,
    .intro-content-right {
      @include column-scale(
        $default: 23,
        $on-tablet: 20,
        $on-laptop: 12,
      );
    }
  
    .page-intro-wrapper {
      @include pad-scale(
        right,
        $on-laptop: $space-heaviest,
      );
      font-size: 1rem;
      @include text-align-until($laptop, center);
      
      h2 {
        @include underline-span-until(
          $laptop,
          $width: 50%,
          $centered: true,
        );
        @include underline-span-from(
          $laptop,
          $width: 75%,
        );
      }
      
      h2, p {
        @include pad-scale(
          bottom,
          $default: $space-light,
        );
        margin-bottom: $space-light;
      }
    }
    
    .intro-content-right {
      position: relative;
      align-self: stretch;
    }
    
    .page-intro-image {
      border-radius: $border-radius;
      @include under-shadow();
    }
  }

</style>














