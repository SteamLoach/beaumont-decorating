import {mapMutations} from 'vuex'; 

export const modalState = {
    
  computed: {
    Modals: function() {
      return this.$store.state.utils
    }
  },
  
  methods: {
    
    toggleModal: function(modal, pos = false) {
      
      if (!this.Modals[modal]) {
        
        this.setScrollPosition(window.scrollY);
        
        document.body.style.position = 'fixed';
        document.body.style.top = `-${this.Modals.scrollPosition}px`
        
        this.isActive({target: modal, state: true});        
      } 
      
      else if (this.Modals[modal]) {
        
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, pos || this.Modals.scrollPosition);
        this.isActive({target: modal, state: false});
        
      }
    },
    
    ...mapMutations({
      isActive: 'utils/isActive',
      isActiveToggle: 'utils/isActiveToggle',
      setScrollPosition: 'utils/setScrollPosition'
    })
  }  
}