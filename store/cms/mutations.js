export default {
  
//Storyblok fetch site settings  
  setSettings (state, settings) {
    settings.forEach(setting => {
      state[this.$toCase.snake(setting.name)] = setting
    })
  }
  
}