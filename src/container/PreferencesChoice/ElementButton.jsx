import React, { useEffect, useState } from 'react';
import { find, } from 'lodash';

const ElementButton = ({selectedElements, element, update}) => {
    const [selected, setSelected] = useState(false);
    useEffect(() => {
        console.log("clled "+JSON.stringify(find(selectedElements, function (value) { return value === element; })));
        setSelected(find(selectedElements, function (value) { return value === element; }));
    }, [selectedElements])
    
    let selectedClass = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
    let nonSelectedClass = "inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out";

    return (
        <button type="button"
            className={selected ? selectedClass : nonSelectedClass}
            onClick={update(element)}
        >{element?.name}</button>
    )
}

export default ElementButton