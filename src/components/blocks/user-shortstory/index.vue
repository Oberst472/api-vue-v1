<template>
  <component
      :is="itemTag"
      class="user-shortstory"
      :to="{name: 'PageUser', params: {id, lol: 66, info: JSON.stringify(props.info)}, meta: {lol: 77}}"
  >
    <div class="user-shortstory__photo-box">
      <el-avatar :size="100" :src="img"/>
    </div>

    <div class="user-shortstory__info-box">
      <UiTextInfo class="user-shortstory__item" v-if="name" :val="name">Name</UiTextInfo>
      <UiTextInfo class="user-shortstory__item" v-if="height" :val="height">Height</UiTextInfo>
      <UiTextInfo class="user-shortstory__item" v-if="mass" :val="mass">Mass</UiTextInfo>
      <UiTextInfo class="user-shortstory__item" v-if="gender" :val="gender">Gender</UiTextInfo>
      <UiTextInfo class="user-shortstory__item" v-if="films" :val="films">Films</UiTextInfo>
    </div>
  </component>
</template>

<script lang="ts">
export default {
  name: 'BlockUserShortStory'
}
</script>

<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import UiTextInfo from '@/components/ui/text-info/index.vue'

const props = defineProps({
  info: {
    type: Object,
    default: () => {
      return {}
    }
  },
  tag: {
    type: String,
    default: ''
  }
})
const name = computed(() => props.info?.name || '')
const height = computed(() => props.info?.height || '')
const mass = computed(() => props.info?.mass || '')
const gender = computed(() => props.info?.gender || '')
const films = computed(() => props.info?.films?.length || 0)
const img = computed(() => {
  return props.info?.img ?
      props.info?.img :
      '../../src/assets/img/placeholder.webp'
})
const itemTag = computed(() => props.tag || 'article')
const id = computed(() => {
  const userId = props?.info?.url.split('people/')[1]
  const n = name?.value.split(' ').join('-').toLowerCase()
  return `${parseFloat(userId)}-${n}`
})
</script>

<style scoped lang="scss">
.user-shortstory {
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
  background-color: rgba(83, 83, 83, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  gap: 15px;
  padding: 15px;
  border-radius: 10px;
  transition-duration: 0.3s;
  transition-property: background-color, transform;
  &:hover {
    background-color: rgba(83, 83, 83, 0.3);
  }
  &:active {
    opacity: 0.7;
  }

  &__info-box {
    display: inline-flex;
    flex-direction: column;
  }

  &__item {
    & + & {
      margin-top: 5px;
    }
  }
}

</style>
<style>
.el-avatar img {
  width: 60% !important;
  object-fit: contain !important;
}
</style>
