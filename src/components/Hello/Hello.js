import React from 'react';

const Hello = (props) => {
    return (
        <div className='dummyClass'>
            <p>Hello {props.name} a.k.a {props.heroName}</p><p>{props.children}</p>    
        </div>
    );
    // return React.createElement('div',{id:'h1',className:'dummy'},React.createElement('h1',null,'Hello Function'));
}

export default Hello;