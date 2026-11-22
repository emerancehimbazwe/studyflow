import { useState } from 'react'

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue)

  function toggle() {
    setValue(previous => !previous)
  }

  return [value, toggle, setValue]
}

export default useToggle
