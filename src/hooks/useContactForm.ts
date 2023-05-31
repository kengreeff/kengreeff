import { useState } from 'react'
import type {Dispatch, SetStateAction} from 'react'

const defaultState = {
  email: '',
  message: '',
  loading: false,
  mobile: '',
  name: '',
  success: false,
}

interface SubmitFormParams {
  data: Partial<typeof defaultState>,
  setState: Dispatch<SetStateAction<typeof defaultState>>,
}

const submitForm = async (params: SubmitFormParams) => {
  const { data, setState } = params

  setState((prevState) => ({
    ...prevState,
    loading: true,
    success: false,
  }))

  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const body = await response.json()

  if (!response.ok){
    setState((prevState) => ({
      ...prevState,
      loading: false,
      success: false,
    }))

    const { errors } = body
    throw new Error(errors[0])
  }

  setState((prevState) => ({
    ...prevState,
    loading: false,
    success: true,
  }))

  return true
}

function useContactForm(){
  const [state, setState] = useState(defaultState)
  const { email, message, mobile, name } = state

  return {
    callbacks: {
      setState: (params: Partial<typeof defaultState>) => setState(prevState => {
        const newState = { ...prevState, ...params }
        return newState
      }),
      submitForm: (e) => {
        e.preventDefault()
        submitForm({
          data: { email, message, mobile, name },
          setState,
        })
      }
    },
    state,
  }
}

export default useContactForm
