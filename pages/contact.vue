<template>

  <main class="contact-page">
    
    <div class="contact-page-inner">
      
      <contact-form v-for="form in story.content.contact_form"
                    :form="form"
                    :key="form._uid"></contact-form>

      <article v-for="details in story.content.contact_details"
               v-editable="details"
               :key="details._uid"
               class="contact-details">
        <div v-for="item in details.menu_items"
             v-editable="item"
             :key="item._uid"
             class="contact-item">
          <SVG-Loader :icon="item.icon"></SVG-Loader>
          <p>  {{item.text}} </p>
        </div>
      </article>
  
  </div>
    
  </main>

</template>


<script>

import {metaData} from '~/mixins/metaData';
import {storyblokBridge} from '~/mixins/storyblokBridge';
  
export default {
  
  mixins: [metaData, storyblokBridge],
    
}

</script>


<style lang="scss">
  
  .contact-page {
    background: $brand-shade-1;
    
    .contact-page-inner {
      @include row(around, start);
      max-width: 1400px;
      @include pad-scale(
        y,
        $default: $outer-space-heavier,
        $on-laptop: $outer-space-heavier,
      );
      margin: 0 auto;
      }
    
    .contact-form {
      @include column-scale(
        $default: 22,
        $on-laptop: 12,
      );
      @include margin-scale(
        y,
        $on-laptop: $outer-space-heavy,
      );
    }
    
    .contact-details {
      @include card($medium-card...);
      @include column-scale(
        $default: 22, 
        $on-tablet: 18,
        $on-laptop: 8,
      );
      @include margin-scale(
        top,
        $default: $outer-space-medium,
        $on-laptop: $outer-space-heavy,
      );
    }
    
    .contact-item {
      @include wrapper(start, start, $no-wrap: true);
      font-size: 1rem;
      p {padding-left: $space-lighter;}
      .svg-icon {
        min-height: 1.6rem;
        min-width: 1.6rem;
        fill: $brand-1;
      }
    }
    
  }

</style>

