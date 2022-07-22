<template>
  <div class="block-pagination">
    <el-pagination
        background
        layout="prev, pager, next"
        :total="props.count"
        :page-size="10"
        @current-change="emits('changePage', $event)"
    />
  </div>
</template>


<script lang="ts">
export default {
  name: 'BlockPagination'
}
</script>

<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue';
import { fa } from 'element-plus/es/locale';

const props = defineProps({
  count: {
    name: '',
    required: true,
  }
})
const emits = defineEmits(['changePage'])
</script>

<style lang="scss">
.block-pagination {
  margin: 20px;
  display: flex;
  justify-content: center;
  position: sticky;
  bottom: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 20px;
  transition-duration: 0.3s;

  &--bg {
    background-color: rgba(68, 68, 68, 0.9);

  }

  &::v-deep(.el-pagination) {
    padding: 0 !important;
  }
}
</style>
