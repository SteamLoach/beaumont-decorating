import Vue from 'vue'



//Content 
import pageHeader from '~/components/page-header/page-header.vue' ;
import slideGallery from '~/components/slide-gallery/slide-gallery.vue';
import pageIntroPanel from '~/components/content-panels/page-intro-panel.vue';
////
Vue.component('page-header', pageHeader) ;
Vue.component('slide-gallery', slideGallery) ;
Vue.component('page-intro-panel', pageIntroPanel) ;


//Forms
import contactForm from '~/components/forms/contact-form.vue';
////
Vue.component('contact-form', contactForm);


//Loaders
import ContentPanelLoader from '~/components/content-panels/Content-Panel-Loader.vue'
import SVGLoader from '~/components/svg-icons/SVG-Loader.vue';
////
Vue.component('Content-Panel-Loader', ContentPanelLoader) ;
Vue.component('SVG-Loader', SVGLoader) ;


//Utils
import scrollDownArrow from '~/components/page-header/scroll-down-arrow.vue';
////
Vue.component('scroll-down-arrow', scrollDownArrow);


