<template>
  <el-container class="page-home">
    <el-aside width="200px" class="page-home__aside">
      <SectionAside/>
    </el-aside>

    <el-container class="page-home__body">
      <el-main class="page-home__main">
        <SectionUsers/>
      </el-main>

      <BlockPagination
          v-if="!usersStore.searchVal"
          :count="usersStore.totalUsersCount"
          @changePage="changePage"
      />

      <el-footer class="page-home__footer">
        <SectionFooter/>
      </el-footer>
    </el-container>
  </el-container>
</template>


<script lang="ts">
export default {
  name: 'PageHome'
}
</script>

<script setup lang="ts">
import { onBeforeMount } from 'vue';

import { useUsersStore } from '../../stores/users'
import { useLoadingStore } from '../../stores/loading'

const usersStore = useUsersStore()
const loadingStore = useLoadingStore()

import SectionUsers from '@/components/sections/users/index.vue'
import SectionAside from '@/components/sections/aside/index.vue'
import SectionFooter from '@/components/sections/footer/index.vue'
import BlockPagination from '@/components/blocks/pagination/index.vue'


const changePage = async function (val: number) {
  usersStore.setActivePage(val)
  const isDouble = usersStore.users[String(usersStore.activePage)]
  if (isDouble) return
  loadingStore.stChangeLoading(true)
  try {
    await usersStore.stGetAllUsers()
  } catch (e) {
    console.log(e);
  } finally {
    loadingStore.stChangeLoading(false)
  }
}

onBeforeMount(async () => {
  const isDouble = usersStore.users[String(usersStore.activePage)]
  if (isDouble) return
  loadingStore.stChangeLoading(true)
  try {
    await usersStore.stGetAllUsers()

  } catch (e) {
    console.log(e);
  } finally {
    loadingStore.stChangeLoading(false)
  }

})
</script>

<style lang="scss">
.page-home {
  max-width: 900px;
  margin: 0 auto;

  &__aside {
    display: flex;
    position: sticky;
    margin-top: 20px;
    top: 20px;
    align-self: flex-start;
    height: calc(100vh - 40px);
  }
}

.page-main {
  &__col {
    & + & {
      margin-top: 15px;
    }
  }
}

.el-input__wrapper {
  background-color: rgba(255, 255, 255, 0.0) !important;
}
</style>
