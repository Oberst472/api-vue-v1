<script setup lang="ts">
import PageMain from '@/pages/home/index.vue'
</script>

<template>
    <el-container>
      <el-header>Header</el-header>

      <el-main>
        <PageMain/>
      </el-main>

      <el-footer>Footer</el-footer>
    </el-container>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
