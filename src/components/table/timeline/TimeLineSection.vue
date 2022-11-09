<script lang="ts" setup>
defineProps({
  year: [String, Number]
})
</script>
<template>
  <section>
      <article class="mb-5 py-2 px-5 bg-blue-500 text-sm font-bold text-white inline-block" aria-hidden="true">{{ year || 'YYYY' }}</article>
      <slot />
    </section>
</template>
