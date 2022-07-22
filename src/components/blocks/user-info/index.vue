<template>
  <article class="block-user-info">
    <div class="block-user-info__photo-box">
      <el-avatar :size="200" :src="img"/>
    </div>
    <div class="block-user-info__info-box">
      <UiTextInfo class="block-user-info__item" v-if="name" :val="name">Name</UiTextInfo>
      <UiTextInfo class="block-user-info__item" v-if="height" :val="height">Height</UiTextInfo>
      <UiTextInfo class="block-user-info__item" v-if="mass" :val="mass">Mass</UiTextInfo>
      <UiTextInfo class="block-user-info__item" v-if="gender" :val="gender">Gender</UiTextInfo>
      <UiTextInfo class="block-user-info__item" v-if="films" :val="films">Films</UiTextInfo>
      <UiTextInfo class="block-user-info__item" v-if="hairColor" :val="hairColor">Hair color</UiTextInfo>
      <UiTextInfo class="block-user-info__item" v-if="skinColor" :val="skinColor">Scin color</UiTextInfo>
      <UiTextInfo class="block-user-info__item" v-if="eyeColor" :val="eyeColor">Eye color</UiTextInfo>
    </div>

    <el-button
        class="block-user-info__btn"
        type="danger"
        :icon="ArrowLeft"
        circle
        @click="comeBack"
    />

  </article>
</template>


<script lang="ts">
export default {
  name: 'BlockUserInfo'
}
</script>


<script setup lang="ts">
import { ArrowLeft } from '@element-plus/icons-vue'
import { useRouter, useRoute } from 'vue-router';

const router = useRouter()
const route = useRoute()

import { computed, onMounted, Ref, ref, watch } from 'vue';
import { User } from '../../../types/typeUsers';

import UiTextInfo from '@/components/ui/text-info/index.vue'

const props = defineProps({
  info: {
    type: Object,
    default: () => {
      return {}
    }
  }
})
const emits = defineEmits(['getInfo'])
const detailInfo: Ref<User | null> = ref(null)


const name = computed(() => detailInfo?.value?.name || '')
const height = computed(() => detailInfo?.value?.height || '')
const mass = computed(() => detailInfo?.value?.mass || '')
const gender = computed(() => detailInfo?.value?.gender || '')
const films = computed(() => detailInfo?.value?.films?.length || 0)
const hairColor = computed(() => detailInfo?.value?.hair_color || '')
const skinColor = computed(() => detailInfo?.value?.skin_color || '')
const eyeColor = computed(() => detailInfo?.value?.eye_color || '')
const img = computed(() => {
  return props.info?.img ?
      props.info?.img :
      '../../src/assets/img/placeholder.webp'
})

const comeBack = function () {
  router.push({name: 'PageHome'})
}
onMounted(() => {
  const {id, info} = route.params
  info ?
      //@ts-ignore
      detailInfo.value = JSON.parse(route.params.info) :
      emits('getInfo', parseFloat(String(id)))
})
//@ts-ignore
watch(() => props.info, () => detailInfo.value = props.info)
</script>

<style lang="scss">
.block-user-info {
  position: relative;
  width: 100%;
  background-color: rgba(83, 83, 83, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 15px 5px 15px;
  box-sizing: border-box;

  &__info-box {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }

  &__item {
    padding: 5px 0;
  }

  &__btn {
    position: absolute;
    left: 15px;
    top: 15px;
  }

}
</style>
