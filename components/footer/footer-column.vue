<template>

  <div v-editable="column"
       class="footer-column">
    <ul :class="column.type">
      
      <li v-if="column.type === 'credits'"
          class="footer-item"> 
        <p> Ⓒ Beaumont Decorating {{currentYear}} </p>
      </li>
      
      <li v-for="item in column.links"
          :key="item._uid">
        
        <div v-if="item.component === 'nav-link'"
             class="footer-item">
          <nuxt-link :to="item.route.url"> {{item.title}} </nuxt-link>
        </div>
        
        <div v-else-if="item.component === 'link-with-icon'"
             class="footer-item">
          <SVG-Loader :icon="item.icon"></SVG-Loader>
          <a :href="item.route.url"> {{item.text}} </a>
        </div>
        
        <div v-else-if="item.component === 'text-with-icon'"
             class="footer-item">
          <SVG-Loader :icon="item.icon"></SVG-Loader>
          <p> {{item.text}} </p>
        </div>
        
        <div class="footer-item">
          <p v-if="item.component === 'text-item'">
            {{item.text}} 
          </p>
        </div>
        
      </li>
      
      <li v-if="column.type === 'quicklinks'"
          @click="$scrollPage({target: 'body'})"
          class="footer-item"> 
        <span>Top</span>
      </li>
  
    </ul>
  </div>


</template>


<script>

export default {
  props: ["column"],
  
  computed: {
    currentYear: function() {
      return new Date().getFullYear();
    }
  }
}

</script>

<style lang="scss">

  .footer-column {
    @include column-scale (
      $default: 24,
      $on-laptop: 8,
    );
    padding: $space-light;
    
    ul {
      @include column-menu(
        $link-width: 100%,
        $link-align: left,
        $link-color: $offset-font-color,
        $link-size: 1rem,
      );
      
      .footer-item {
        @include wrapper(start, center, $no-wrap: true);
      }
      
      &.quicklinks {
        @include text-align-from($laptop, center);
      }
    
      &.credits {
        @include text-align-from($laptop, right);
      }
    }
    
      a, span {
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      } 
  }

</style>