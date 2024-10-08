import React, { useState } from 'react';

const MyFunc = () => {
    const [name, setName] = useState(""); 
    const [age, setAge] = useState(0); 
    const [Address , setAddress]=useState(true);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Iraguha");
    };

    const increment = () => {
        setAge(age + 1);
    };
    const address=()=>{
        setAddress("Bugesera")
    }

    const decrement = () => {
        setAge(age - 1);
    };

    const toggleEmployeestatus = () => {
        setIsEmployed(!isEmployed); 
    };

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <p>Age: {age}</p> 
            <button onClick={increment}>Increment Age</button>
            <button onClick={decrement}>Decrement Age</button>
            <p>{Address}</p>
            <button onClick={Address}>Check address:  {Address? "Yes" :"No"}</button>
            <button onClick={toggleEmployeestatus}>Toggle Employment Status</button> {/* Corrected label */}
        </div>
    );
};

export default MyFunc;
