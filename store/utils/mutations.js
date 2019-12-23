export default {
  
  isActive(state, dir) {
    state[dir.target] = dir.state;
  },
  
  isActiveToggle(state, target) {
    state[target] = !state[target] ;
  },
  
  setScrollPosition(state, val) {
    state.scrollPosition = val;
  }
  
}