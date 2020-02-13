import React from 'react'

export default function Person(props) {
    return (
        <div>
            <h2>I am {props.person.name}. Age - {props.person.age}, skill - {props.person.skill}</h2>
        </div>
    )
}
