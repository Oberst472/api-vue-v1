<script setup lang="ts">
</script>

<template>
    <div>
      <router-view/>
    </div>
</template>

<style lang="scss">
.app-main {
  &__aside {
    padding: 20px;
    position: sticky;
    top: 0;
  }
  &__footer {
    height: auto;
    padding: 10px 0;
    display: flex;
    justify-content: center;
  }
}
</style>
