"use strict";

// Bash commands:
// live-server public
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

console.log("App.js is running!");

var appRoot = document.getElementById("app");

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer.",
    options: []
};

var onFormSubmit = function onFormSubmit(submitEvent) {
    submitEvent.preventDefault();
    var option = submitEvent.target.elements.option.value;

    if (option) {
        app.options.push(option);
        submitEvent.target.elements.option.value = '';
    }

    renderIndecisionApp();
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    }
}

var clearIndecisionList = function clearIndecisionList() {
    app.options = [];
    renderIndecisionApp();
};

var onMakeDecision = function onMakeDecision() {
    var randomOptionIndex = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomOptionIndex];
    alert(option);
};

var renderIndecisionApp = function renderIndecisionApp() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        React.createElement(
            "p",
            null,
            app.options.length > 0 ? "Here are your options: " : "No options"
        ),
        React.createElement(
            "button",
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            "What should I do?"
        ),
        React.createElement(
            "button",
            { onClick: clearIndecisionList },
            "Clear List"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderIndecisionApp();
