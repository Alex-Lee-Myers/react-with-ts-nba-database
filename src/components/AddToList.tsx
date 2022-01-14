import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
    people: Props["people"];
}

const AddToList: React.FC<IProps> = ({setPeople, people}) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    if(!input.name || !input.age) return

      setPeople([
        ...people,
        {
            name: input.name,
            age: +(input.age),
            url: input.img,
            note: input.note
        }
    ]);

        setInput({
            name: "",
            age: "",
            img: "",
            note: ""
        });
    };


  return (
    <div className="AddToList">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        name="name"
      />
      <input
        onChange={handleChange}
        type="text"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        name="age"
      />
      <input
        onChange={handleChange}
        type="text"
        placeholder="Image URL"
        className="AddToList-input"
        value={input.img}
        name="img"
      />
      <input
        onChange={handleChange}
        type="textarea"
        placeholder="Notes"
        className="AddToList-input"
        value={input.note}
        name="note"
      />
      <button onClick={handleClick} className="AddToList-btn">Add to list.</button>
    </div>
  );
};

export default AddToList;
