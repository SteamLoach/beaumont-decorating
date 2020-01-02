export default {
  
  ////Storyblok
  loadSettings (context) {
    return this.$storyapi.get('cdn/stories', {
      version: process.env.DRAFT_OR_PUBLISHED,
      "starts_with": "settings/",
    }).then((res) => {
      context.commit('setSettings', res.data.stories)
    })
  },
  
  
  
}