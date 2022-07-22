<template>
  <section class="ui-loading">
    <div class="ui-loading__img"></div>
    <div class="ui-loading__load"></div>
  </section>
</template>


<script lang="ts">
export default {
  name: 'UiLoading'
}
</script>

<script setup lang="ts">

</script>

<style lang="scss">
.ui-loading {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;

  background-color: #424242;

  &__img {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url('@/assets/img/bg.webp');
    opacity: 0.4;
  }

  &__load {
    content: '';
    margin: auto;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    border: 2px solid #ffffff;
    border-top-color: transparent;
    animation-name: spin;
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    left: 50%;
    top: 50%;
    position: absolute;
  }
}


@keyframes spin {
  from {
    transform: translate(-50%) rotate(0deg);
  }
  to {
    transform: translate(-50%) rotate(360deg);
  }
}
</style>
