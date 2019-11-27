import Vue from 'vue'



//Content 
import pageHeader from '~/components/page-header/page-header.vue' ;
Vue.component('page-header', pageHeader) ;





//Loaders
import ContentPanelLoader from '~/components/content-panels/Content-Panel-Loader.vue'
import SVGLoader from '~/components/svg-icons/SVG-Loader.vue';
////
Vue.component('Content-Panel-Loader', ContentPanelLoader) ;
Vue.component('SVG-Loader', SVGLoader) ;



