<template>

  <article class="content-panel teaser-panel">
  
    <div class="content-panel-inner">
  
      <div v-for="item in content.teaserItems"
           :key="item.key"
           class="teaser-item"
           :style="$setBackgroundImage(item.image.url)">
        
        <div class="teaser-item-inner">
          <div class="teaser-title">
            <h3> {{item.title}} </h3>
            <nuxt-link :to="item.route">
              <button> {{item.button}} </button>
            </nuxt-link>
          </div>  
        </div>
      </div>
      
    </div>
  
  </article>

</template>


<script>

export default {
  
  props: ['content']

}

</script>


<style lang="scss">
  
  .content-panel.teaser-panel {
    .content-panel-inner {
      max-width: 1400px;
    }
  }
  
  .teaser-panel {
    
    @include margin-scale(
      top,
      $on-laptop: $outer-space-heavier,
    );
  }
  
  .teaser-item {
    @include column-scale(
      $default: 22,
      $on-phablet: 18,
      $on-laptop: 11,
    );
    @include centered-background();
    
    &:first-child {
    @include margin-scale(
      bottom,
      $default: $outer-space-medium,
      $on-tablet: $outer-space-heavy,
      $on-laptop: 0,
    );
    }
  }
  
  .teaser-item-inner {
    @include wrapper(center, center);
    width: 100%;
    text-align: center;
    color: $offset-font-color;
    background-color: rgba(#000, 0.4);
    @include standard-transition();
    &:hover {background-color: rgba(#000, 0.8);}
    
    .teaser-title {
    
      @include margin-scale(
        y,
        $default: $outer-space-heavier,
        $on-laptop: 6rem,
      );
      
      h3 {
        width: 100%;
        padding-bottom: $space-medium;
        font-size: 2rem;
        color: $offset-font-color;
      }
    
      button {
        padding: $space-lighter;
        border: 2px solid $offset-font-color;
        border-radius: $border-radius;
        &:hover {
          color: $font-color;
          background-color: $offset-font-color;
        }
    }
      
      
    }

  }

</style>