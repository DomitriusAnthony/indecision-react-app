class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render()  {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show details'}</button>
                {this.state.visibility && (
                <p>Here is some details</p>
                )}
            </div>
        )
        ReactDOM.render(template, appRoot);
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));




//  const app = {
//     title: "Toggle Visibility",
// }

// let visibility = false;


// const toggleDetails = () => {
//     visibility = !visibility
//     render();
// }


// const appRoot = document.getElementById('app');

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={toggleDetails}>{visibility ? 'Hide Details' : 'Show details'}</button>
//             {visibility && (
//                 <p>Here is some details</p>
//             )}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };

// render();