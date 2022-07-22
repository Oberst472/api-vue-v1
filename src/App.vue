<script setup lang="ts">
import UiLoading from '@/components/ui/loading/index.vue'
import { useLoadingStore } from './stores/loading';

const useLoading = useLoadingStore()
</script>

<template>
  <div>
    <router-view/>
    <Transition>
      <UiLoading v-show="useLoading.isLoading" id="kik"/>
    </Transition>
  </div>
</template>

<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transition: opacity 0.5s ease;
}
</style>
