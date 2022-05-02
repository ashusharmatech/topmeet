import find from 'lodash/find';
import React from 'react'

const TimeSubCard = ({ slotsOfDay, selectedElements, update, setSelectedElements}) => {


    let selectedClass = "bg-blue-500 hover:bg-blue-700 text-white font-bold mx-1 py-2 px-4 uppercase rounded";
    let nonSelectedClass = "inline-block mx-1 py-2 px-4 border-2 border-blue-600 font-bold text-blue-600 leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5";

    console.log("Selected element are  "+JSON.stringify(selectedElements));
     
    return (
        <div className="px-6 pt-4 pb-2" >
            <div className="font-bold text-l mb-2">{slotsOfDay?.date}</div>
            <div className="font-bold text-l mb-2">{slotsOfDay?.day}</div>
            <div className="flex space-x-4 pb-5 justify-center">
                {slotsOfDay?.time?.map((element) => (
                    <button type="button"
                        key={element?.id}
                        className={find(selectedElements, { slot: {id: element?.id}}) ? selectedClass : nonSelectedClass}
                        onClick={() => update(element, slotsOfDay.date, selectedElements, setSelectedElements)}
                    > {element?.value}</button>
                ))}
            </div>
        </div>
    )
}

export default TimeSubCard