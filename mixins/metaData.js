export const metaData = {
  
  head() {
    return {
      
      title: this.story.content.meta_title,
      
      meta: [
        { hid: 'description', name: 'description', content: this.story.content.meta_description }
      ]
      
    }
  }
  
}