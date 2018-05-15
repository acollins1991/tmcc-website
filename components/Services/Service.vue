<template>
  <div class="uk-margin-xlarge-bottom tmcc-service">
    <div class="tmcc-service__description" data-aos="fade-up">
      <slot name="description"></slot>
    </div>
    <slot name="image"></slot>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'Service',
  mounted(){
    AOS.init();
  }
}
</script>

<style lang="scss" scoped>
.tmcc-service {
  position: relative;
  overflow:hidden;
  height:500px;
  &__description {
    background-color:#ffffff;
    width: 600px;
    padding: 12px 40px;
  }
  &__image {
    position:absolute;
    top:50%;
    right:0;
    transform: translateY(-50%);
    height:auto;
    width:75%;
    z-index:-1;
  }
  &:nth-child(2n) {
    .tmcc-service__description {
      float:right;
    }
    .tmcc-service__image {
      left:0;
      right:unset;
    }
  }
}
</style>
