<template>
  <el-container class="page-user">

      <el-main class="page-user__main">
        <BlockUserInfo
            @getInfo="getInfo"
            :info="userStore.userInfo"
        />
      </el-main>

      <el-footer class="page-home__footer">
        <SectionFooter/>
      </el-footer>
    </el-container>
</template>

<script lang="ts">
export default {
  name: 'PageUserInfo'
}
</script>

<script lang="ts" setup>
import SectionFooter from '@/components/sections/footer/index.vue'
import BlockUserInfo from '@/components/blocks/user-info/index.vue'
import { useUsersStore } from '../../stores/users';
import { useLoadingStore } from '../../stores/loading';
const userStore = useUsersStore()
const loadingStore = useLoadingStore()

const getInfo = async (id: number) => {
  console.log(4);
  loadingStore.stChangeLoading(true)
  try {
    await userStore.stGetUserById(id)
  } catch (e) {
    console.log(e);
  }
  finally {
    loadingStore.stChangeLoading(false)
  }
}
</script>


<style scoped lang="scss">
.page-user {
  margin: 0 auto;
  max-width: 900px;
  min-height: 100vh;
  display: flex !important;
  align-items: center;
  justify-content: center;
  &__main {
    display: flex;
    width: 100%;
    align-items: center;
  }
  &__footer {
    box-sizing: border-box;
  }
}
</style>
