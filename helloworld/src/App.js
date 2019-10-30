import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/Person';
//sd state object de luu tru cac gia tri cua thuoc tinh trong component

class App extends Component {

    state = {
        persons : [
            { name : 'long ', age: 22},
            { name : 'hoa ', age: 22},
            { name : 'ly ', age: 22},
            { name : 'huy ', age: 22}
        ]
    }

    //state co the thay doi qua trinh thuc thi thong qua setState, vd :state thay doi khi nguoi dung click chuot vao button
    changeNameHandler = () => {
        this.setState(
            {
                persons : [
                    { name : 'quy ', age: 23},
                    { name : 'nhu ', age: 23},
                    { name : 'teo ', age: 23},
                    { name : 'tom ', age: 23}
                ]
            }
        )
    }

    render() {
        return(
            <div className="App">
                <h1>Hello , my name is Bich Lieu , i am 22 years old !</h1>
                {/* <Person name="Bich" age="22">da bong</Person>
                <Person name="Nga" age="22"/>
                <Person name="Huy" age="22"/>
                <Person name="Ly" age="22"/>
                <Person name="Na" age="22"/> */}
                  <button onClick={this.changeNameHandler}>change name</button>

                <Person name={this.state.persons[0].name} 
                       age= {this.state.persons[0].age}>da bong , du lich</Person>
                <Person name={this.state.persons[1].name} 
                     age= {this.state.persons[1].age}> du lich</Person>
                 <Person name={this.state.persons[2].name} 
                     age= {this.state.persons[2].age}>da bong</Person>
                <Person name={this.state.persons[3].name} 
                     age= {this.state.persons[3].age}>nhay </Person>
                     
            </div>
        );
    }
}
export default App;
