import React, { useState } from 'react'

const useDebounce = (state, delay) => {
  const[debouncedState, setDebouncedState] = useState()
  useEffect(() => {
    const debouncedFunction = setTimeout(()=>{
        setDebouncedState(state)
    },delay)

    return(()=>{
        clearTimeout(debouncedFunction)
    })
   
}, [state])

return debouncedState
}

export default useDebounce
