<script setup>
import { ref, computed, watch } from 'vue'

const diskCount = ref(3)
const towers = ref([[], [], []])
const selected = ref(null)

function reset() {
  towers.value = [
    Array.from({ length: diskCount.value }, (_, i) => diskCount.value - i),
    [],
    []
  ]
  selected.value = null
}

function selectTower(index) {
  if (selected.value === null) {
    if (towers.value[index].length > 0) {
      selected.value = index
    }
  } else {
    if (selected.value === index) {
      selected.value = null
      return
    }
    const from = selected.value
    const disk = towers.value[from][towers.value[from].length - 1]
    const targetTop = towers.value[index][towers.value[index].length - 1]
    if (!targetTop || disk < targetTop) {
      towers.value[index].push(towers.value[from].pop())
    }
    selected.value = null
  }
}

const solved = computed(() => towers.value[2].length === diskCount.value)

watch(diskCount, reset, { immediate: true })
</script>

<template>
  <div>
    <h1>ハノイの塔</h1>
    <p>
      <label>ディスクの数: <input type="number" v-model.number="diskCount" min="1" /></label>
      <button @click="reset">リセット</button>
    </p>
    <div class="towers">
      <div
        v-for="(tower, tIndex) in towers"
        :key="tIndex"
        class="tower"
        :class="{ selected: selected === tIndex }"
        @click="selectTower(tIndex)"
      >
        <div v-for="(disk, dIndex) in [...tower].reverse()" :key="dIndex" class="disk" :style="{ width: disk * 20 + 'px' }">
          {{ disk }}
        </div>
        <div class="base"></div>
      </div>
    </div>
    <p v-if="solved">クリア！</p>
    <p><router-link to="/">back</router-link></p>
  </div>
</template>

<style scoped>
.towers {
  display: flex;
  justify-content: space-around;
  margin-top: 1em;
  height: 200px;
  align-items: flex-end;
}
.tower {
  width: 30%;
  border-left: 2px solid #333;
  border-right: 2px solid #333;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding-bottom: 1em;
  cursor: pointer;
}
.tower.selected {
  outline: 2px solid red;
}
.disk {
  background-color: #90caf9;
  border: 1px solid #1e88e5;
  height: 20px;
  margin-bottom: 2px;
  text-align: center;
  color: #000;
}
.base {
  height: 10px;
}
</style>

