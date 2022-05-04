import React from 'react'

const classForInput = "r-slate-300 text-slate-600 relative bg-white bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full";


const Textbox = ({title, name, id, className=classForInput, value, disabled=false, onChange}) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">
                {title}
            </label>
            <input
                type="text"
                name={name}
                id={id}
                className={className}
                value={value}
                disabled={disabled}
                onChange={onChange}
            />

        </div>
    )
}

export default Textbox