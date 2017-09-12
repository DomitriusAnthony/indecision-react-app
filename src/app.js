// React Component Architecture using Classes

// Stateless functional component

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        }
    }
    handleDeleteOptions() {
        this.setState(() => {
            return  {
                options: []
            };
        });
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
    
        alert(option);
    }
    // indexOf returns the 0 based index. 1 if it's the second item. 2 if it's the third.
    handleAddOption(option) {
        if (!option) {
            return 'Enter a valid value to add item';
        } else if (this.state.options.indexOf(option) > -1){
            return "This option already exists";
        } 

        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            };
        });
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            // title and subtitle are component props on Header. options is a component prop on Options 
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};
const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?</button>
        </div>
    )
}
const Options = (props) => {
    return ( 
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {
                props.options.map((option) => <Option key={option} optionText={option} />)
            }
        
        </div>     
    );
};
const Option = (props) => {
    return (
        <div>
            {props.optionText}
        </div>    
    );
};

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return { error };
        })


    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name="option"/>
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));




/* 

breaking the 'this' binding. then using bind() allows you to re-reference 'this'.

const obj ={
    name: 'Vikram',
    getName() {
       return this.name; 
    }
};

const getName = obj.getName.bind({name: 'Domitrius' });

console.log(getName());
*/


// Props vs. State 
/* 

Props:
- An object
- Can be used when rendering the component   
- Changes (from above) cause re-renders
- Can come from a parent component or JSX (comes from above)
- Can't be changed by the component itself

State:
- An object
- Can be used when rendering the component
- Any changes cause re-renders
- Defined in the component itself
- Can be changed by the component itself

*/