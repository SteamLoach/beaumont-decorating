<template>

  <main>
    
    <page-header v-for="header in story.content.page_header"
                 :content="header"
                 :key="header._uid">
      <scroll-down-arrow :scroll="{target: '.page-header', axis: 'bottom'}"></scroll-down-arrow>
    </page-header>
    
    <page-intro-panel v-for="intro in story.content.page_intro"
                      v-editable="intro"
                      :content="intro"
                      :key="intro._uid">
    </page-intro-panel>
    
    <Content-Panel-Loader :panels="story.content.content_panels"></Content-Panel-Loader>
    
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



</style>