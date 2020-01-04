<template>
    <component :is="iconComponent"></component>
</template>




<script>

//Homepage
import fencePosts from '~/components/svg-icons/exterior/fence-posts.vue';
import livingRoom from '~/components/svg-icons/interior/living-room.vue' ; 
  
//Contact 
import phoneIcon from '~/components/svg-icons/contact/phone-icon.vue';
import locationIcon from '~/components/svg-icons/contact/location-icon.vue';
import facebookIcon from '~/components/svg-icons/contact/facebook-icon.vue';
import paperPlane from '~/components/svg-icons/contact/paper-plane.vue' ;
  
//Interior
import paintBrush from '~/components/svg-icons/interior/paint-brush.vue';
import paintBucket from '~/components/svg-icons/interior/paint-bucket.vue';
import paintRoller from '~/components/svg-icons/interior/paint-roller.vue';
import plasterRepair from '~/components/svg-icons/interior/plaster-repair.vue';
import wallpaper from '~/components/svg-icons/interior/wallpaper.vue';
//Exterior
import faciaSofits from '~/components/svg-icons/exterior/facia-sofits.vue';
import garageDoor from '~/components/svg-icons/exterior/garage-door.vue';
import exteriorRender from '~/components/svg-icons/exterior/exterior-render.vue';
import woodenWindows from '~/components/svg-icons/exterior/wooden-windows.vue';

//Utils
import closeButton from '~/components/svg-icons/utils/close-button.vue';
import downArrow from '~/components/svg-icons/utils/down-arrow.vue';
import triangleIcon from '~/components/svg-icons/utils/triangle-icon.vue';
import menuButton from '~/components/svg-icons/utils/menu-button.vue';
import menuClose from '~/components/svg-icons/utils/menu-close.vue';
import thickMenuClose from '~/components/svg-icons/utils/thick-menu-close.vue';
import horizontalArrow from '~/components/svg-icons/utils/horizontal-arrow';
  
export default {
  
  props: ['icon'],
  
  computed: {
    iconComponent: function() {
      return this.$toCase.camel(this.icon) ; 
    }
  },
  
  components: {
    fencePosts,
    livingRoom,
    paintBrush,
    paintBucket,
    paintRoller,
    plasterRepair,
    wallpaper,
    faciaSofits,
    garageDoor,
    exteriorRender,
    woodenWindows,
    phoneIcon,
    facebookIcon,
    locationIcon,
    paperPlane,
    closeButton,
    downArrow,
    triangleIcon,
    menuButton,
    menuClose,
    thickMenuClose,
    horizontalArrow,
  }
  
}

</script>

<style lang="scss"></style>