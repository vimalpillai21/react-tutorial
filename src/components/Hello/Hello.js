import React from 'react';

// const Hello = (props) => {
    const Hello = ({name,heroName,children}) => {
    // props.name = "Property name"; Will the break the app and give a error
    return (
        <div className='dummyClass'>
            <p>Hello {name} a.k.a {heroName}</p><p>{children}</p>    
        </div>
    );
    // return React.createElement('div',{id:'h1',className:'dummy'},React.createElement('h1',null,'Hello Function'));
}

export default Hello;