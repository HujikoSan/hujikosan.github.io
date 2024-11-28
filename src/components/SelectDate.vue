<script setup>
  import { ref, watch, computed } from 'vue'

  const year = ref(new Date().getFullYear())
  const month = ref(new Date().getMonth() + 1)
  const date = ref(new Date().getDate())

  const maxDate = computed(() => new Date(year.value, month.value, 0).getDate());

  const emit = defineEmits(['date'])

  watch([year, month], () => {
      if (date.value > maxDate.value) {
        date.value = maxDate.value
      }
  })
  watch([year, month, date], () => {
    console.log(year.value, month.value, date.value)
    emit('date', [year.value, month.value, date.value])
  })
</script>

<template>
  <input type="number" v-model="year" />年
  <select v-model="month">
    <option v-for="i in 12" :key="i" :value="i">{{ i }}</option>
  </select>月
  <select v-model="date">
    <option v-for="i in maxDate" :key="i" :value="i">{{ i }}</option>
  </select>日
</template>
