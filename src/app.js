// Bash commands:
// live-server public
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

console.log("App.js is running!");

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer.'
}

// JSX - JavaScript XML
var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);

var user = {
    name: 'Paul',
    age: 35,
    location: 'Lee, NH'
}

function getLocation(location) {
    if (location) {
        return user.location;
    } else {
        return 'Unknown';
    }
}

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {getLocation(user.location)}</p>
    </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
