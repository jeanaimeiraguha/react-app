import React, { useState } from 'react';

const MyFunc = () => {
    const [name, setName] = useState(""); 
    const [age, setAge] = useState(0); 

    const updateName = () => {
        setName("Iraguha");
    };

    const increment = () => {
        setAge(age + 1);
    };
    const decrement=()=>{
        setAge(age-1)
    }
    const[isEmployeed , setisEmployed]= useState(false)

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Is isEmployeed:{isEmployeed ? "Yes":"No"} </p>
            <p>Age: {age}</p> 
            <button onClick={increment}>Increment Age</button>
            <button onClick={decrement}>Decrement Age</button>
            <button onClick={toggleEmployeestatus}>Decrement Age</button>
        </div>
    );
};

export default MyFunc;
