import React from 'react';
//props truyen dl tu cha den con
const person = (props) => {
    return(
      //  <h2>I am a girl</h2>
      //random hien thi so ngau nhien
        // <p>My name is Lieu .I am {
        //     Math.floor(Math.random()*30) } years old !
        //     </p>
     <div>  <p>My name is {props.name} and i am {props.age} years old!
        </p>
        <p>my hobbie: {props.children}</p></div> 
    );
};
export default person;