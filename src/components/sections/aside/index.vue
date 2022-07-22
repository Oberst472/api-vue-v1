<template>
    <div class="section-aside">
      <BlockSearch @search="search">Search</BlockSearch>
    </div>
</template>


<script lang="ts">
export default {
  name: 'SectionAside'
}
</script>

<script setup lang="ts">
import { useUsersStore } from '../../../stores/users';

const usersStore = useUsersStore()

import BlockSearch from '@/components/blocks/search/index.vue'
const search = function (val: string) {
  usersStore.searchVal = val
}
</script>

<style lang="scss" scoped>
.section-aside {
  background-color: rgba(83, 83, 83, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;

  align-self: flex-start;
  height: calc(100vh - 40px);
  padding: 20px;

}
</style>
