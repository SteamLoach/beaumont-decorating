<template>

  <section class="page-intro-panel">
    <div class="page-intro-inner">
      <article class="page-intro-wrapper">
        <h2> <span> {{content.title}} </span> </h2>
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
      @include row(center, center);
      @include x-from($laptop, between);
      max-width: $wide-content-width;
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
      @include pad-from($laptop, $right: $space-heaviest,);
      font-size: 1rem;
      @include text-align-until($laptop, center);
      
      h2 span {
        @include pseudo-span-from(
          $laptop,
          $has-width: 75%,
          $has-spacing: $space-medium,
        );
        
        @include pseudo-span-until(
          $laptop,
          $has-width: 50%,
          $is-centered: true,
          $has-spacing: $space-medium,
        );
      }
      
      p {
        @include pad-scale(
          bottom,
          $default: $space-light,
        );
      }
    }
    
    .intro-content-right {
      position: relative;
      align-self: stretch;
    }
    
    .page-intro-image {
      border-radius: $border-radius;
      @include shadow($under-shadow);
    }
  }

</style>














