let count = 0;
const counterAddOne = () => {
  count++;
  renderCounterApp();
};
const counterSubtractOne = () => {
  count--;
  renderCounterApp();
};
const counterReset = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={counterAddOne}>+1</button>
      <button onClick={counterSubtractOne}>-1</button>
      <button onClick={counterReset}>Reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();