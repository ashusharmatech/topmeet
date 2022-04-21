import React from 'react'

const TextareaBox = ({label ,name, value, changeHandler }) => {
    return (
        <div className="mb-3 xl:w-100">
            <label className="block text-gray-500 font-bold">{label}</label>
            <textarea
                className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none  focus:border-purple-500"
                id="desciption"
                rows="3"
                name={name}
                value={value}
                placeholder="Short intrduction of yourself"
                onChange={changeHandler}
            ></textarea>
        </div>
    )
}

export default TextareaBox