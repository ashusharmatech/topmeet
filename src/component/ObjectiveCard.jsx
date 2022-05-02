import find from 'lodash/find';
import React from 'react'

const ObjectiveCard = ({ title, elements, selectedElements, update, setSelectedElements, updatePreferenceData}) => {
    let selectedClass = "bg-blue-500 hover:bg-blue-700 text-white font-bold mx-1 py-2 px-4 uppercase rounded";
    let nonSelectedClass = "inline-block mx-1 py-2 px-4 border-2 border-blue-600 font-bold text-blue-600 leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5";

    return (
        <div className="bg-white shadow mt-6  rounded-lg p-6">
            <h3 className="text-gray-600 text-sm font-semibold mb-4">{title}</h3>
            <div className="font-bold text-l mb-2">{title}</div>
            <div className="flex space-x-4 pb-5 justify-center">
                <div>
                    {elements.map((element) =>
                        <button type="button"
                            key={element?.id}
                            className={find(selectedElements, { id: element?.id }) ? selectedClass : nonSelectedClass}
                            onClick={() => update(element, selectedElements, setSelectedElements)}
                        > {element?.name}</button>
                    )}
                </div>
                <button type="button"  onClick={() => updatePreferenceData()}> update</button>
            </div>
        </div>
    )
}

export default ObjectiveCard