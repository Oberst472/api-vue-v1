<template>
  <div class="block-search">
    <span class="block-search__title"><slot/></span>

    <el-input
        v-model="val"
        placeholder="Enter the name"
        clearable
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'BlockInput'
}
</script>

<script lang="ts" setup>
import { ref, watch } from 'vue';

const emits = defineEmits(['search'])
const val = ref('')

watch(val, () => emits('search', val.value))
</script>

<style scoped lang="scss">
.block-search {
  display: flex;
  flex-direction: column;

  &__title {
    display: inline-flex;
    justify-content: center;
    font-size: 16px;
    margin-bottom: 15px;
  }
}
</style>
