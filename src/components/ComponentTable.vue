<!-- component overview
Render a Table of todo
Props {Todo[]} modelValue is todo data for table
-->
<script setup lang="ts">
import { computed, ref, watch, type PropType } from 'vue'
import { useStore } from 'vuex'

import BaseButton from './BaseButton.vue'
import BaseInput from './BaseInput.vue'
import BaseSelect from './BaseSelect.vue'
import BaseTag from './BaseTag.vue'
import { adapterEnumToOptions } from '../utils/adapterEnumToOptions'
import { searchTodoByName } from '../utils/searchTodoByName'

import { ENUM_LEVEL, ENUM_SORT } from '../constant'
import type { Todo, TypeLevel, TypeSort } from '../declaration'

const store = useStore()
const dispatch = store.dispatch
const selectLevel = ref<TypeLevel>(ENUM_LEVEL.Medium)
const editingTodoId = ref<number | null>(null)
const editingTodoValue = ref<string>('')

const props = defineProps({
  modelValue: {
    type: Array as () => Todo[],
    require: true
  },
  searchTerm: {
    type: String
  },
  selectSort: {
    type: String as PropType<TypeSort | ''>
  }
})

/**
 * Processed todo data (computed value)
 * {TypeSort} selectSort - sort todo by level or name
 * {string} searchTem - return list todo match search engine
 * @return {Todo[]} - the todo list after processes
 */
const filteredTodoList = computed(() => {
  if (props.modelValue) {
    let result = props.modelValue
    if (props.selectSort !== '') {
      switch (props.selectSort) {
        // sort todo by level Small-High
        case ENUM_SORT.LevelASC:
          result.sort((a, b) =>
            a.level === ENUM_LEVEL.High && b.level !== ENUM_LEVEL.High
              ? 1
              : a.level === ENUM_LEVEL.Medium
              ? b.level === ENUM_LEVEL.Small
                ? 1
                : -1
              : -1
          )
          break

        // sort todo by level High-Small
        case ENUM_SORT.LevelDESC:
          result.sort((a, b) =>
            a.level === ENUM_LEVEL.High && b.level !== ENUM_LEVEL.High
              ? -1
              : a.level === ENUM_LEVEL.Medium
              ? b.level === ENUM_LEVEL.Small
                ? -1
                : 1
              : 1
          )
          break

        // sort todo by name A-Z
        case ENUM_SORT.NameASC:
          result.sort((a, b) => (a.name > b.name ? -1 : a.name < b.name ? 1 : 0))
          break

        // sort todo by name Z-A
        case ENUM_SORT.NameDESC:
          result.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
          break
      }
    }

    if (props.searchTerm) {
      result = searchTodoByName(props.modelValue, props.searchTerm)
    }
    return result
  } else {
    return []
  }
})

/**
 * listen if a todo is edited
 * then fill the value of todo to input field, level todo to select
 */
watch(editingTodoId, (newId, _) => {
  if (newId !== null && props.modelValue) {
    const index = props.modelValue?.findIndex((todo: Todo) => todo.id === newId)
    editingTodoValue.value = props.modelValue[index].name
    selectLevel.value = props.modelValue[index].level
  }
})

/**
 * Notify for listerner above that a todo item is editing
 * @param {number} todoId - id of Todo object
 */
const handleEditing = (todoId: number) => {
  editingTodoId.value = todoId
}
const handleCancelEdit = () => {
  editingTodoId.value = null
}
const handleOptionLevelChange = (value: TypeLevel) => {
  typeof value === 'string' && (selectLevel.value = value)
}

/**
 * Save edit todo value:
 * begin clone new todo list,
 * find todo item with editingTodoId,
 * then dispatch edit todo action to store
 */
const handleSaveEdit = () => {
  if (editingTodoId.value !== null) {
    dispatch({
      type: 'updateTodoAction',
      payload: {
        id: editingTodoId.value,
        name: editingTodoValue.value,
        level: selectLevel.value,
        status: false,
        user: store.getters.username
      } as Todo
    })
  }
  editingTodoId.value = null
}

/**
 * Delete todo item
 * @param {number} todoId - id of Todo object is deleted
 */
const handleDeleteTodo = (todoId: number) => {
  dispatch({
    type: 'deleteTodoAction',
    payload: todoId
  })
}
</script>

<template>
  <div class="flex flex-col mt-4">
    <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div
        class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
      >
        <table class="min-w-full">
          <!-- table head -->
          <thead>
            <tr>
              <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                #
              </th>

              <th
                class="w-full px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                Name
              </th>

              <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                Level
              </th>

              <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                Action
              </th>
            </tr>
          </thead>

          <!-- table body -->
          <tbody class="bg-white">
            <tr v-for="todo in filteredTodoList" :key="todo.id">
              <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <!-- Check if todo is editing -->
                <p class="text-sm font-medium leading-5 text-gray-900">
                  {{ todo.id }}
                </p>
              </td>

              <!-- display todo value (name) -->
              <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <base-input
                  v-if="editingTodoId !== null && editingTodoId === todo.id"
                  v-model="editingTodoValue"
                />
                <div v-else class="text-sm leading-5 text-gray-900">
                  {{ todo.name }}
                </div>
              </td>

              <!-- display todo priority (level) -->
              <td class="px-6 py-4 text-center border-b border-gray-200 whitespace-nowrap">
                <base-select
                  v-if="editingTodoId !== null && editingTodoId === todo.id"
                  class-name="w-[80px] h-8 py-1 px-2 text-xs border rounded"
                  :options="adapterEnumToOptions(ENUM_LEVEL)"
                  @change="handleOptionLevelChange"
                />
                <base-tag
                  v-else
                  :className="`mr-0 text-white 
                      ${todo.level === ENUM_LEVEL.Small && 'bg-gray-500 '} 
                      ${todo.level === ENUM_LEVEL.Medium && 'bg-info'} 
                      ${todo.level === ENUM_LEVEL.High && 'bg-danger'} 
                    `"
                >
                  {{ todo.level }}
                </base-tag>
              </td>

              <!-- action on todo item -->
              <td
                class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap"
              >
                <base-button
                  v-if="editingTodoId !== null && editingTodoId === todo.id"
                  className="bg-white text-gray-500 border"
                  @click="handleCancelEdit"
                >
                  Cancel
                </base-button>
                <base-button
                  v-else
                  @click="handleEditing(todo.id)"
                  className="text-white bg-warning"
                >
                  Edit
                </base-button>

                <base-button
                  v-if="editingTodoId !== null && editingTodoId === todo.id"
                  @click="handleSaveEdit"
                  className="ml-1 bg-success text-white"
                >
                  Save
                </base-button>
                <base-button
                  v-else
                  className="text-white bg-danger ml-1"
                  @click="handleDeleteTodo(todo.id)"
                  >Delete</base-button
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
