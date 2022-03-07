import { useState } from 'react'

export function useLocalStorage(key, initialValue) {
    // function to get the value
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            return initialValue
        }
    })

    // function to set the value
    const setValue = (value) => {
        try {
            setStoredValue(value)
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.log(error)
        }
    }

    return [storedValue, setValue]
}