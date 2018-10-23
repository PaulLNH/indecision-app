// Bash commands:
// live-server public
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

console.log("App.js is running!");

const appRoot = document.getElementById("app");

let visibleState = false;

const changeVisibilityState = () => {
    visibleState = !visibleState;
    console.log(visibleState);
    visibleToggleApp();
};

const visibleToggleApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle App</h1>
            <button onClick={changeVisibilityState}>{visibleState == false ? "Show details" : "Hide details"}</button>
            {visibleState && <p>Here are the details about the visibility application. They dissapear when you click the 'Hide details' button.</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

visibleToggleApp();