'use strict';

// Bash commands:
// live-server public
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

console.log("App.js is running!");

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer.'

    // JSX - JavaScript XML
};var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

var user = {
    name: 'Paul',
    age: 35,
    location: 'Lee, NH'
};

function getLocation(location) {
    if (location) {
        return user.location;
    } else {
        return 'Unknown';
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        getLocation(user.location)
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
