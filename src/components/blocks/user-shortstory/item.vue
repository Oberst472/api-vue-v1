<template>
  <div class="block-item">
    <span class="block-item__title"><slot/>:</span>
    <span class="block-item__title__desc">{{ props.val }}</span>
  </div>
</template>


<script lang="ts">
export default {
  name: 'LBlockItem'
}
</script>

<script setup lang="ts">
const props = defineProps({
  val: {
    type: String,
    default: ''
  }
})

</script>

<style lang="scss">
.block-item {
  font-size: 14px;
  display: inline-flex;

  &__title {
    opacity: 0.5;
    min-width: 80px;
  }

  &__desc {
  }
}
</style>
