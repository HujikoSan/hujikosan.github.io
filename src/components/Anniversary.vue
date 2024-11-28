<script setup>
import { ref, computed } from 'vue'

const include_base_date = ref(true)

const base_year = ref(2024)
const base_month = ref(11)
const base_date = ref(28)

const base_date_in_days = computed(() => {
  return get_passed_days(base_year.value, base_month.value + 1, base_date.value)
})

const target_year = ref(2024)
const target_month = ref(11)
const target_date = ref(28)

const target_date_in_days = computed(() => {
  return get_passed_days(target_year.value, target_month.value + 1, target_date.value)
})

const passed_days = computed(() => {
  return target_date_in_days.value - base_date_in_days.value + (include_base_date.value ? 1 : 0)
})

const anniversary_description = computed(() => {
  return search_anniversary_description(target_year.value, target_month.value, target_date.value,
                                          base_year.value, base_month.value, base_date.value, include_base_date.value)
})

function search_anniversary_description(target_year, target_month, target_date,
                                        base_year, base_month, base_date, include_base_date) {
  var addidion = (include_base_date ? 1 : 0)
  var result = "記念日！"
  console.log(addidion)
  console.log(get_passed_days(target_year, target_month + 1, target_date) - get_passed_days(base_year, base_month + 1, base_date)
              + addidion)

  if (target_year == base_year && target_month == base_month && target_date == base_date) {
    result = "当日！"
    return result
  }else if (target_date == base_date) {
    var passed_years = target_year - base_year
    var passed_months = target_month - base_month + passed_years * 12
    result = passed_months + "ヶ月記念日！"
  }else if ((get_passed_days(target_year, target_month + 1, target_date) - get_passed_days(base_year, base_month + 1, base_date)
                  + addidion) % 100 == 0) {
    result = get_passed_days(target_year, target_month + 1, target_date) - get_passed_days(base_year, base_month + 1, base_date)
                  + addidion + "日記念日！"
  }else {
    var [ty, tm, td] = [target_year, target_month, target_date]

    var count_of_increment = 0
    while ((get_passed_days(ty, tm + 1, td) - get_passed_days(base_year, base_month + 1, base_date)
                  + addidion) % 100 != 0 && count_of_increment < 5000) {
      tm++
      count_of_increment++
      if (tm == 12) {
        ty++
        tm = 0
      }
    }
      result = get_passed_days(ty, tm + 1, td) - get_passed_days(base_year, base_month + 1, base_date)
      + addidion + "日記念日の" + count_of_increment + "ヶ月前！"
  }
  return result
}

function get_passed_days(year, month, date) {
  var d = new Date(year, month, date)
  return Math.floor(d / (1000 * 60 * 60 * 24))
}

</script>

<template>
  <div>
    <h1>毎日が記念日！</h1>
    <p>基準日: </p>
    <input type="number" v-model="base_year" />
    <input type="number" v-model="base_month" />
    <input type="number" v-model="base_date" />
    <p>目標日: </p>
    <input type="number" v-model="target_year" />
    <input type="number" v-model="target_month" />
    <input type="number" v-model="target_date" />
    <p>
      <label><input type="checkbox" v-model="include_base_date" />
      基準日を含める
      </label>
    </p>

    <p>経過日数: {{ passed_days }}日</p>
  </div>
  <div>
    <h2>{{ target_year }}年{{ target_month }}月{{ target_date }}日は、</h2>
    <h2>{{ base_year }}年{{ base_month }}月{{ base_date }}日から見て、</h2>
    <h2>{{ anniversary_description }}</h2>
  </div>
</template>
