'use strict'

let habits = []
const HABIT_KEY = 'HABIT_KEY'

const loadData = () => {
    const habitString = localStorage.getItem(HABIT_KEY)
    const habitArray = JSON.parse(habitString)

if (Array.isArray(habitArray)) {
    habits = habitArray
}
}