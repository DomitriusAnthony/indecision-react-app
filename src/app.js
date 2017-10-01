import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            {props.children}
            <p>footer</p>
        </div>
    );
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


/*

class OldSyntax{
    constructor() {
        this.name = "Mike";
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return `Hi my name is ${this.name}.`;
    }
}


const oldSyntax = new OldSyntax();
console.log(oldSyntax.getGreeting() );

--------------------------------
// arrow functions bind the 'this' to the parent
class NewSyntax {
    name = 'Jen';
    get greeting = () => {
        return `Hi. My name is ${this.name}.`;
    }
}

const newSyntax = new NewSyntax();
const newGetGretting = newSyntax.getGreeting();
console.log(newGetGreeting;


*/