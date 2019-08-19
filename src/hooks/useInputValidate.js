import { useState } from 'react'


const useValidate = (rules = []) => {
    const [value, setValue] = useState('')
    const [hint, setHint] = useState(false)
    let error;
    const validate = () => {
        
        rules.every(rule => {
            error = rule.getValidationError(value);
            return !error
        })
        setHint(error)
        return !error
    }
    return {
        value,
        onChange: (e) => setValue(e.target.value),
        validate,
        hint
    }
}

export default useValidate