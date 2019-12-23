export const metaData = {
  
  head() {
    return {
      
      title: this.Page.metaTitle,
      
      meta: [
        { hid: 'description', name: 'description', content: this.Page.metaDescription }
      ]
      
    }
  }
  
}