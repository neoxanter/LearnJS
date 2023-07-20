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

const rerenderMenu = (activeHabit) => {
    if (!activeHabit) {
        return;
    }
    for (const habit of habits) {
        let existed = document.querySelector(`[menu-habit-id="${habit.id}"]`)
        if (!existed) {

        }
        if (activeHabit.id === habit.id) {
            existed.classList.add('menu__item_active')
        } else {
            existed.classList.remove('menu__item_active')
        }
    }
}

const rerender = (activeHabitId) => {
    const activeHabit = habits.find(habit => habit.id === activeHabitId)
}

(() => {
    loadData()
})()