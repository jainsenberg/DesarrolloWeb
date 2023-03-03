/*import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

const useCounter = ({value}) => {
    const [counter, setCounter] = useState( value )

    const handleAdd = () => {
      setCounter( counter +1)
    }
    const handleSubstract = () => {
      console.log('llamando handleSubstract')
      setCounter(counter - 1)
    }
  
  const handleReset = () => {
      console.log('llamando handleReset')
      setCounter(counter * 0)
    }
  
    return (
    
        <>
        <h1>Counter</h1>
        <span>{counter}</span>
        <button onClick={() => handleAdd()}> +1 </button>
        <button onClick = {()=> handleSubstract()}>-1</button>
        <button onClick = {()=> handleReset()}>{value}</button>
        </>
  )
}
useCounter.proptypes = {
    value: PropTypes.number.isRequired
  }
  useCounter.defaultProps = {
    value: 0
  }

export default useCounter

*/
