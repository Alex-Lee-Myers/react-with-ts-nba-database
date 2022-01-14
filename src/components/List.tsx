import React from "react";
import { IState as Props } from "../App";

interface IProps {
    people: Props["people"];
    }


// List: Functional Component that takes in a people array and returns a list of people.
// * Functional Component: A component that returns some JSX.
// * Functional Component: A component that takes in some props and returns some JSX.
// ? {people} is the props and {people} is the props.people.
const List: React.FC<IProps> = ({people}) => {
    const renderList = (): JSX.Element[] => {
        return people.map((person, index) => {
            return (
            <li className="List" key={index}>
                <div className="List-header">
                    <img className="List-img" src={person.url} alt={person.name} />
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p className="List-note">{person.note}</p>
            </li>
            );
        });
    };

    return (
        <ul>
            {renderList()}
        </ul>
    );
};

export default List;