import React, { useState } from 'react';

const MyFunc = () => {
    const [name, setName] = useState(""); 
    const [age, setAge] = useState(0); 
    const [isEmployed, setIsEmployed] = useState(false);
    cont [Student , setIsStudent ] = useState()

    const updateName = () => {
        setName("Iraguha");
    };
    const UpdateStudent = ()=>{
setIsStudent("Still leraning")
    }

    const increment = () => {
        setAge(age + 1);
    };

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
            <p onClick={UpdateStudent}>Set if is student</p>
            <button>Set</button>
            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <p>Age: {age}</p> 
            <button onClick={increment}>Increment Age</button>
            <button onClick={decrement}>Decrement Age</button>
            <button onClick={toggleEmployeestatus}>Toggle Employment Status</button> {/* Corrected label */}
        </div>
    );
};

export default MyFunc;
