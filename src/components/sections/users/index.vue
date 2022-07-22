<template>
  <section>
    <el-row>
      <el-col
          class="page-main__col"
          v-for="item in items"
          :key="item.name"
      >
        <BlockUserShortStory :info="item" tag="router-link"/>
      </el-col>
    </el-row>
  </section>
</template>


<script lang="ts">
export default {
  name: 'SectionUsers'
}
</script>

<script setup lang="ts">
import { computed } from 'vue';

import { useUsersStore } from '../../../stores/users';

const usersStore = useUsersStore()

import BlockUserShortStory from '@/components/blocks/user-shortstory/index.vue'

const items = computed(() => {
  return usersStore.searchVal ?
      usersStore.getFoundUsers :
      usersStore.getUsers
})

</script>

<style lang="scss">

</style>
