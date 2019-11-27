export const state = () => ({
  
  reference: 'rootState',
  debug: true,
  
})

export const actions = {
  
  async nuxtServerInit ({dispatch}) {
    
    await dispatch('cms/getContentByModel', {
      model: 'page',
      mutation: 'cms/resolveToStore',
      module: 'cms',
      splitItems: true,
    });
  },
}