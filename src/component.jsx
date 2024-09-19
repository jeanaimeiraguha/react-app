import React, { useState } from 'react';

const MyFunc = () => {
    const [name, setName] = useState(""); // Initialize with an empty string
    const [age, setAge] = useState(0); // Initialize age with 0

    const updateName = () => {
        setName("Iraguha");
    };

    const increment = () => {
        setAge(age + 1);
    };
    const decrement=()=>{
        setAge(age-1)
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p> {/* Fixed the second name display to age display */}
            <button onClick={increment}>Increment Age</button>
            <button onClick={decrement}>Decrement Age</button>
        </div>
    );
};

export default MyFunc;
