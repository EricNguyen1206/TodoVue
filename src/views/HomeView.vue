<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { useStore } from 'vuex'
// import { useStore } from 'vuex'
import { debounce } from 'lodash'

import BaseButton from '@/components/BaseButton.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import BaseTag from '@/components/BaseTag.vue'
import ComponentTable from '@/components/ComponentTable.vue'
import { adapterEnumToOptions } from '../utils/adapterEnumToOptions'

import { ENUM_LEVEL, ENUM_SORT } from '../constant'
import type { TypeLevel, TypeSort } from '../declaration'

const store = useStore()
const dispatch = store.dispatch
const inputValue = ref<string>('')
const searchTerm = ref<string>('')
const todoList = computed(() => store.state.todoList.data)
const selectSort = ref<TypeSort | ''>('')
const selectLevel = ref<TypeLevel>(ENUM_LEVEL.Small)

const optionsSortData = adapterEnumToOptions(ENUM_SORT)
const optionLevelData = adapterEnumToOptions(ENUM_LEVEL)

const form = reactive({
  searchValue: ''
})

const searchDebounce = debounce((value: string) => {
  searchTerm.value = value
}, 1000)

onMounted(() => {
  dispatch('readTodoDataAction')
})

watch(form, (newValue, _) => {
  searchDebounce(newValue.searchValue)
})

/**
 * dispatch action to add todo to the store
 * @param {string} value - todo content
 */
const addTodo = (value: string) => {
  if (typeof value === 'string' && value.trim() !== '') {
    store.dispatch({
      type: 'createTodoAction',
      payload: {
        name: value,
        level: selectLevel.value
      }
    })
    clearInput()
  }
}

/**
 * Clear input after create todo or cancel
 */
const clearInput = () => {
  inputValue.value = ''
  selectLevel.value = ENUM_LEVEL.Small
}
/**
 * clear search input after click clear Button
 */
const clearSearch = () => {
  form.searchValue = ''
}

/**
 * update data sort option
 * @param {TypeSort} value
 */
const handleOptionSortChange = (value: TypeSort) => {
  typeof value === 'string' && (selectSort.value = value)
}

/**
 * update data level option
 * @param {TypeLevel} value
 */
const handleOptionLevelChange = (value: TypeLevel) => {
  typeof value === 'string' && (selectLevel.value = value)
}
</script>

<!-- Page UI -->
<template>
  <div
    id="inputarea"
    class="w-full flex flex-col justify-start items-center sm:flex-row sm:justify-between sm:items-start mt-4"
  >
    <div class="sm:w-[593px] w-full flex flex-col sm:flex-row justify-start">
      <base-input
        class-name="sm:w-[362px] block min-w-full px-2 py-1 mb-2 sm:mt-0 text-primary bg-white border rounded-md focus:border-primary-dark focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
        placeholder="Search item name"
        v-model="form.searchValue"
        suffixButton="Clear"
        @click="clearSearch"
        buttonClass="bg-primary hover:bg-primary-dark text-white py-1 px-2 rounded-l-none"
      />
      <div class="ml-2 mt-2 sm:ml-8 sm:mt-0 flex">
        <base-select
          class-name="w-[80px] h-8 py-1 px-2 text-xs border rounded"
          :options="optionsSortData"
          default="Sort By"
          @change="handleOptionSortChange"
        />
        <base-tag
          v-if="selectSort"
          class-name="h-8 w-[108px] ml-2 py-1 px-2 bg-success text-white text-base"
        >
          {{ selectSort }}
        </base-tag>
      </div>
    </div>

    <div class="w-full mt-2 sm:w-[464px] sm:mt-0">
      <h2 class="w-full py-1 px-2 bg-primary text-white text-center rounded">
        Add item
      </h2>
      <div class="flex justify-between mr-[20px] mt-4 flex-wrap">
        <base-input
          v-model="inputValue"
          @enter="addTodo"
          placeholder="Item name"
          class-name="block min-w-full px-2 py-1 mb-2 sm:mt-0 text-primary bg-white border rounded-md focus:border-primary-dark focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
        />
        <base-select
          class-name="w-[83px] border rounded py-1 p-2 text-xm"
          :options="optionLevelData"
          @change="handleOptionLevelChange"
        />
        <base-button
          @click="addTodo(inputValue)"
          class-name="text-white bg-primary-dark border"
        >
          Submit
        </base-button>
        <base-button
          @click="clearInput"
          class-name="text-gray-800 bg-white border border-gray-300"
        >
          Cancel
        </base-button>
      </div>
    </div>
  </div>

  <component-table
    v-model="todoList"
    :searchTerm="searchTerm"
    :selectSort="selectSort"
  />
</template>

<style scoped></style>
