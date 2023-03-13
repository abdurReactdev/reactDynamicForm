import React, { useState } from 'react'
import { FormField } from './FormField'

export const DynamicForm = () => {
    const [state, setState] = useState({ firstName: '', lastName: '' })
    console.log(state)
    const onChange = (e) => {
        console.log(e)
        setState({ ...state, [e.target.name]: e.target.value })
    }
    return (
        <React.Fragment>
            <FormField fieldData={[{ type: 'text', name: 'firstName', placeholder: 'Enter your Firstname', required: true, value: state.firstName, onChange },
            { type: 'text', name: 'lastName', placeholder: 'Enter your LastName', required: true, value: state.lastName, onChange }]} />
        </React.Fragment>
    )
}