export const storyblokBridge = {
  
  
  asyncData (context) {
      
    return context.app.$storyapi.get(`cdn/stories${context.route.name === 'index' ? '/home' : context.route.fullPath}`,
      {version: process.env.DRAFT_OR_PUBLISHED,})
        .then((res) => {
        return res.data
        })
        .catch((res) => {
          context.error({
          statusCode: res.response.status,
          message: res.response.data
        }) ; 
      }) ;
  },
  
  
  mounted() {
    this.$storybridge.on(['published', 'change'], (event) => {
      if (!event.slugChanged) {
        // Reload the page on save events (publish, save button or autosave)
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true
        })
      }
    })
  },
  
}