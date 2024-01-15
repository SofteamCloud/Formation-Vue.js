<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th v-for="item in headers" :ref="item" class="px-6 py-3">
            {{ item }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in rows" :ref="item" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td class="px-6 py-4">{{ item }}</td>
          <td class="px-6 py-4">
            <a href="#">
              <IconTrash @click="removeTodoItem(item)" />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import IconTrash from '@/components/icons/IconTrash.vue'

defineProps({
  rows: Array
})

const emits = defineEmits(['removeTodoItem'])


const headers = ['Tâche', '-']

const removeTodoItem = (value) => {
  emits('removeTodoItem', value)
}
</script>