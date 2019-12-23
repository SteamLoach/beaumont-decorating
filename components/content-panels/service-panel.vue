<template>

  <article class="content-panel service-panel"
           :class="content.classExtensions">
    
    <h2 class="content-panel-title"><span> {{content.title}} </span></h2>
    
    <div class="content-panel-inner">
      
      <div v-for="item in content.serviceItems"
           class="service-item">
        <SVG-Loader :icon="item.icon"></SVG-Loader>
        <h3 class="card-title"><span>{{item.title}}</span></h3>
        <p> {{item.text}} </p>
      </div>
    
    </div>
    
  </article>

</template>




<script>
  
export default {
  
  props: ['content'],
  
}
</script>




<style lang="scss">
  
  .service-panel {
    &.interior-services {background-color: $brand-shade-1;}
    &.exterior-services {background-color: $brand-shade-accent;}
  }

    
  .service-item {
    @include card(
      $medium-card...,
      $has-shadow: false,
      $has-border-radius: false,
    );
    @include column-scale(
      $default: 22,
      $on-phablet: 20,
      $on-tablet: 11, 
      $on-laptop: 7
      );
    @include margin-scale(
      bottom,
        $default: $outer-space-light,
        $on-tablet: $outer-space-medium
      );
      
      h3 {padding-bottom: 0;}
      h3 span {
        @include pseudo-span(
          $has-height: 5px,
          $has-fill: $shade-light,
          $has-spacing: $space-lighter,
        );
      }
      
      .svg-icon {
        width: 100px;
        height: 100px;
        fill: $brand-1;
        .svg-icon-accent {
          fill: $brand-accent;
        }
      } 
    
      &:hover {
        background-color: $brand-1;
        h3 {
          color: $offset-font-color;
          span:after {
            background-color: $brand-accent;
          }
        }
        p {color: $shade-dark;}
        .svg-icon {fill: $offset-font-color;}
      }
    }
    
</style>