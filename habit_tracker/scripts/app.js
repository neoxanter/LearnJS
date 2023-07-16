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

const saveData = () => {
    localStorage.setItem(HABIT_KEY, JSON.stringify(habits))
}

const rerenderMenu = (activeHabitId) => {
    if (!activeHabitId) {
        return;
    }
    for (const habit of habits) {

    }
}

(() => {
    loadData()
})()