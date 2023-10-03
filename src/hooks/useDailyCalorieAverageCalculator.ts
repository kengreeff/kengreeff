import { useState } from 'react'

type DefaultState = {
  friday: number,
  goal: 'gain' | 'lose' | 'maintain',
  monday: number,
  saturday: number,
  sunday: number,
  thursday: number,
  tuesday: number,
  wednesday: number,
}

const calculateDailyAverage = (state: DefaultState) => {
  const {
    friday,
    monday,
    saturday,
    sunday,
    thursday,
    tuesday,
    wednesday,
  } = state

  const total = friday + monday + saturday + sunday + thursday + tuesday + wednesday
  return Math.round(total / 7)
}

const calculateSuggestedCalories = (state: DefaultState) => {
  const { goal } = state
  const dailyAverage = calculateDailyAverage(state)

  if (goal === 'gain'){
    return {
      lower: dailyAverage + 275,
      upper: dailyAverage + 500,
    }
  }

  if (goal === 'lose'){
    return {
      upper: dailyAverage - 275,
      lower: dailyAverage - 500,
    }
  }

  return {
    lower: dailyAverage,
    upper: dailyAverage,
  }
}

const defaultState: DefaultState = {
  friday: 0,
  goal: 'gain',
  monday: 0,
  saturday: 0,
  sunday: 0,
  thursday: 0,
  tuesday: 0,
  wednesday: 0,
}

function useDailyCalorieAverageCalculator(){
  const [state, setState] = useState(defaultState)

  const isValid = Object.values(state)
    .filter(value => typeof value === 'number')
    .every(value => Number(value) > 0)

  return {
    callbacks: {
      setState: (newState: Partial<DefaultState>) => {
        setState(prevState => ({
          ...prevState,
          ...newState,
        }))
      },
    },
    dailyAverage: calculateDailyAverage(state),
    isValid,
    state,
    suggestedCalories: calculateSuggestedCalories(state), 
  }
}

export default useDailyCalorieAverageCalculator
