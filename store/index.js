export const state = () => ({
  
  reference: 'rootState',
  debug: true,
  
})

export const actions = {
  
  async nuxtServerInit ({dispatch}) {
    
    await dispatch('cms/getContentByCodename', {
      codename: 'site_settings',
      mutation: 'cms/resolveToStore',
      module: 'cms',
    });
    await dispatch('cms/getContentByCodename', {
      codename: 'primary_navigation',
      mutation: 'cms/resolveToStore',
      module: 'cms',
    });
    await dispatch('cms/getContentByModel', {
      model: 'page',
      mutation: 'cms/resolveToStore',
      module: 'cms',
      splitItems: true,
    });
    await dispatch('cms/getContentByModel', {
      model: 'form',
      mutation: 'cms/resolveToStore',
      module: 'cms',
      splitItems: true,
    });
    await dispatch('cms/getContentByCodename', {
      codename: 'site_footer',
      mutation: 'cms/resolveToStore',
      module: 'cms',
    });
  },
}