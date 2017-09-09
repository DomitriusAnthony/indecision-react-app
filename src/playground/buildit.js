const app = {
    title: "Toggle Visibility",
}

let visibility = false;


const toggleDetails = () => {
    visibility = !visibility
    render();
}


const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleDetails}>{visibility ? 'Hide Details' : 'Show details'}</button>
            {visibility && (
                <p>Here is some details</p>
            )}
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();