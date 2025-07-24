import { ref } from 'vue'
import type { IExpense } from '../Types/Expense'
import { defineStore } from 'pinia'
export const useExpenseList = defineStore('expense', () => {
  const expenses = ref<IExpense[]>([])
  const addExpense = (expense:IExpense) => {
    expenses.value.push(expense)
  }
  return {expenses, addExpense}
})
