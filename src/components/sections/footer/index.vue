<template>
  <section class="section-footer">
    &#169;{{ new Date().getFullYear() }} <span>Разработано профессионалами. Не пытайтесь повторить.</span>
  </section>
</template>


<script lang="ts">
export default {
  name: 'SectionFooter'
}
</script>

<script setup lang="ts">

</script>

<style lang="scss">
.section-footer {
  height: auto;
  padding: 0;
  display: flex;
  justify-content: center;
  font-size: 12px;
  opacity: 0.5;
  flex-direction: column;
  align-items: center;
}
</style>
