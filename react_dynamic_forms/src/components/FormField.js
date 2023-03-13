import React from 'react'

export const FormField = ({ fieldData }) => {

    return (
        <React.Fragment>
            {fieldData.map(data => (
                <input name={data.name} type={data.type} placeholder={data.placeholder} required={data.required} value={data.value} onChange={(e) => { data.onChange(e) }} />
            ))}


        </React.Fragment>
    )

}