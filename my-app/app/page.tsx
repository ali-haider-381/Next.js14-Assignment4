"use client"
import { useState } from 'react';

const names: string[] = ["1- Ali", "2- Haider", "3- Qalb Ali", "4- Bader","5- Faizi", "6- Usman", "7- Harun", "8- Usman", "9- Sajjad","10- gujjar"];

export default function NameList() {
  const [index, setIndex] = useState(0);
  const name = names[index];

  const Next = () => {
    setIndex((index + 1) % names.length);
  };


  const Back = () => {
    setIndex((index + names.length - 1) % names.length);
  };

  return (
    <div>
      <h1>PIAIC Class Student Name List</h1>
      <h1>{name}</h1>
      <button onClick={Back}>Previous</button>
      <button onClick={Next}>Next</button>
    </div>
  );
}