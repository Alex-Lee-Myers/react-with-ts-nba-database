import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';

//! Interface
//* Interface is a way to define the type of the object.
//? Functional Example below of interface:
export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[]
}

function App() {
//! useState + TypeScript Explanation
//* React.useState<number | string>(5) means that the type of the state is number or string.
//* React.useState<number>(5); means that the type of the state is number.
//* Typescript can infer it though so we can remove the type from the variable.
//? Example of setting the state and Type:
//  const [number, setNumber] = React.useState(5); 
//? Example of useState for above example:
// const changeNumber = () => {
//   setNumber(10);
// };

  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'LeBron James',
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      age: 36,
      note: "The leader of a retirement basketball team"
    },
  ]);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList setPeople={setPeople} people={people} />
    </div>
  );
}

export default App;
