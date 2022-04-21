import React, { useEffect } from 'react';
import { find } from 'lodash';

const Subcard = ({ title, elements, selectedElements, update, setSelectedElements}) => {
    let selectedClass = "bg-blue-500 hover:bg-blue-700 text-white font-bold mx-1 py-2 px-4 uppercase rounded";
    let nonSelectedClass = "inline-block mx-1 py-2 px-4 border-2 border-blue-600 font-bold text-blue-600 leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5";

    return (
        <div className="px-6 pt-4 pb-2">
            <div className="font-bold text-l mb-2">{title}</div>
            <div className="flex space-x-4 pb-5 justify-center">
                <div>
                    {elements.map((element) =>
                        <button type = "button"
                            key={ element?.id}
                            className = { find(selectedElements, { id : element?.id })? selectedClass: nonSelectedClass }
                            onClick = {() => update(element, selectedElements, setSelectedElements) }
                        > { element?.name}</button>
                    )}
            </div>
        </div>
        </div >
    )
}

export default Subcard