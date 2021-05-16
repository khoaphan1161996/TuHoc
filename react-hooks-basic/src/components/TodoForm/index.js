import React,{useState} from 'react';

const TodoForm = (props) => {
    const [value,setValue] = useState('')
    
    const {handleAddTodoList} = props

    const handleValue = (e) => {
        setValue(e.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault()

        const formValues = {
            title: value
        }

        handleAddTodoList(formValues)
    }

    return (
        <form onSubmit={submitForm}>
            <input 
                type="text"
                value = {value}
                onChange = {handleValue}
            >
            </input>
        </form>
    )
}

export default TodoForm