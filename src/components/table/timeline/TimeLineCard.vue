<style scoped>
.timeline-card {
  @apply relative mx-4 rounded-sm border-l-4 border-solid border-l-blue-500 shadow-md shadow-gray-400 bg-gray-100 pt-6 pb-5 pl-6;
  z-index: 1;
}
.timeline-card::before {
  @apply bg-blue-500 absolute;
	content: "";
  width: 1.25rem;
	height: 2px;
	top: 1rem;
  left: -1.25rem;
	z-index: 0;
}
.timeline-card header {
  @apply py-1 px-5 bg-gray-300 text-sm font-bold text-gray-700 inline-flex;
}
.timeline-card header span:first-child::after {
  @apply px-1;
  content: "~";
}
.timeline-card .timeline-content {
  @apply pt-2;
}
</style>
<script lang="ts" setup>
defineProps({
  stDate: String,
  edDate: String
})
</script>
<template>
  <li class="timeline-card">
    <header>
      <span>{{ stDate || 'YYYY-MM' }}</span>
      <span>{{ edDate || 'YYYY-MM' }}</span>
    </header>
    <div class="timeline-content">
      <slot />
    </div>
  </li>
</template>
