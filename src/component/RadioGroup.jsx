import React from 'react'


const classForInput = "appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" ;   

const RadioGroup = ({ title, selectedValue, name, onChange, className = classForInput, radioData }) => {


    return (
        <>
            <label className="block text-sm font-medium text-gray-700">
                {title}
            </label>
            <div className="mt-1 flex gap-5">
                {
                    radioData.map((item) => (
                        <div key={item.id}>
                            <input id={item.id} value={item.value}
                                checked={selectedValue === item.value}
                                type="radio" name={name}
                                className={className}
                                onChange={onChange}
                                >
                            </input>
                            <label className="inline-block text-gray-800">{item.title}</label>
                        </div>

                    ))
                }
            </div>
        </>
    )
}

export default RadioGroup