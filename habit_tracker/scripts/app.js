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
        const existed = document.querySelector(`[menu-habit-id="${habit.id}"]`)
        if (!existed) {
            const element = document.createElement('button')
            element.setAttribute('menu-habit-id', habit.id)
            element.classList.add('menu__item')
            element.innerHTML = `<img src="./images/${habit.icon}.svg" alt="${habit.id}" />`
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
    rerender(habits[0].id)
})()