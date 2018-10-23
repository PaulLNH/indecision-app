// Bash commands:
// live-server public
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

console.log("App.js is running!");

const appRoot = document.getElementById("app");

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer.",
  options: []
};

const onFormSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    const option = submitEvent.target.elements.option.value;

    if (option) {
        app.options.push(option);
        submitEvent.target.elements.option.value = '';
    }

    renderIndecisionApp();
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

const clearIndecisionList = () => {
    app.options = [];
    renderIndecisionApp();
};

const onMakeDecision = () => {
    const randomOptionIndex = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomOptionIndex];
    alert(option);
};

const renderIndecisionApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>
                {app.options.length > 0
                ? "Here are your options: "
                : "No options"}
            </p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={clearIndecisionList}>Clear List</button>

            <ol>
                {app.options.map((option) => <li key={option}>{option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option' />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderIndecisionApp();