import React, { useState } from 'react';

function MyComponent() {
    const [cycle, setCycle] = useState(
        {
            brand: "Raleigh",
            type: "Mountain rider",
            material: "Carbon steel",
            year: 2024,
            color: "red"
        }
    )

    function handleBrandChange(event) {
        setCycle(prevCycle => ({...prevCycle, brand: event.target.value}))
    }

    function handleTypeChange(event) {
        setCycle(prevCycle => ({...prevCycle, type: event.target.value}))
    }

    function handleMaterialChange(event) {
        setCycle(prevCycle => ({...prevCycle, material: event.target.value}))
    }

    function handleYearChange(event) {
        setCycle(prevCycle => ({...prevCycle, year: event.target.value}))
    }

    function handleColorChange(event) {
        setCycle(prevCycle => ({...prevCycle, color: event.target.value}))
    }
    return (
        <>
            <div>
                <p>My favourite cycle is : {cycle.brand} {cycle.type} {cycle.material} {cycle.year} {cycle.color} </p>
                <input type="text" value={cycle.brand} onChange={handleBrandChange} />
                <br />
                <input type="text" value={cycle.type} onChange={handleTypeChange} />
                <br />
                <input type="text" value={cycle.material} onChange={handleMaterialChange} />
                <br />
                <input type="number" value={cycle.year} onChange={handleYearChange} />
                <br />
                <input type="text" value={cycle.color} onChange={handleColorChange} />
                <br />
            </div>
        </>
    )
}

export default MyComponent;