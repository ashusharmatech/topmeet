import React from 'react'

const classForInput = "r-slate-300 text-slate-600 relative bg-white bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full";

const Textarea = ({title, name, id, rows=3, className=classForInput, value, disabled=false, onChange,placeholder='placeholder', subtext='Subtext'})  => {
    return (
        <div>
            <label htmlFor="intro" className="block text-sm font-medium text-gray-700">
                {title}
            </label>
            <div className="mt-1">
                <textarea
                    id={id}
                    name={name}
                    rows={rows}
                    className={classForInput}
                    placeholder={placeholder}
                    value={value} onChange={onChange}
                />
            </div>
            <p className="mt-2 text-sm text-gray-500">
                {subtext}
            </p>


        </div>
    )
}

export default Textarea