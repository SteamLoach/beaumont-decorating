<template>

  <section v-editable="content"
           class="content-panel recent-project-panel">
  
    <h2 class="content-panel-title"><span> {{content.title}} </span></h2>
    
    <div class="content-panel-inner">
      <div v-for="item in content.recent_project_items"
           v-editable="item"
           class="recent-project-item"
           :style="$setBackgroundImage(item.image)">
        <span class="hover-prompt"> + </span>
        <div class="caption-wrapper">
          <p> <span> {{ item.caption }} </span> </p>
        </div>
        
      </div>
  
    </div>
  
  </section>

</template>


<script>

export default {
  
  props: ['content']
  
}

</script>


<style lang="scss">

  .recent-project-panel {
    
    .recent-project-item {
      position: relative;
      overflow: hidden;      
      @include column-scale(
        $default: 22,
        $on-phablet: 18,
        $on-tablet: 11,
        $on-laptop: 7
      );
      @include pad-scale(
        xy,
        $default: $outer-space-heaviest, 
      );
      @include margin-scale(
        bottom,
          $default: $outer-space-light,
          $on-tablet: $outer-space-medium
      );
      @include centered-background();
      
      .hover-prompt {
        position: absolute;
          bottom: 0;
          right: 0;
        font-size: 2rem;
        line-height: 1;
        padding-right: $space-light;
        color: $brand-1;
        opacity: 1;
        @include standard-transition(opacity);
      }
      
      &:hover {
        .caption-wrapper {top: 0;}
        .hover-prompt {opacity: 0;}
      }
    
      .caption-wrapper {
        @include container(center, center);
        position: absolute;
          top: -100%;
          left: 0;
        height: 100%;
        z-index: 1;
        font-size: 0.8rem;
        color: $offset-font-color;
        background-color: $brand-1;
        @include standard-transition(top);
        
        p {
          padding: $space-heavy;
          span {
            @include pseudo-span(
              $has-width: 75%,
              $has-spacing: $space-lighter,
              )
            }
        }
      }
    
    }
    
    
    
  }

</style>