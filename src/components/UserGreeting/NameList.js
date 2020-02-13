import React from 'react'
import Person  from './Person';
function NameList() {
    // const names = ['Bruce','Diana','Clark'];
    // const nameList = names.map(name => <h2>{name}</h2>);
    const persons = [
        {
            id: 1,
            name: "Bruce",
            age: 30,
            skill: "Angular"
        },
        {
            id: 2,
            name: "Diana",
            age: 42,
            skill: "VueJS"
        },
        {
            id: 3,
            name: "Clark",
            age: 35,
            skill: "React"
        }
    ]
const personList = persons.map(person => (
                                <Person person={person} />
                                ));
    return (
        <div>
            {/* <h4>{names[0]}</h4>        
            <h4>{names[1]}</h4>        
            <h4>{names[2]}</h4>         */}
            {/* {nameList} */}
            {personList}
        </div>
    )
}

export default NameList;