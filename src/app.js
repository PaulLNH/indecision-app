// Bash Commands:
// live-server public
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: ["Thing one", "Thing two", "Thing three"]
        };
    }

    render() {
        const title = 'Indecision';
        const subTitle = 'Put your life in the hands of a computer';

        return (
        <div>
            <Header title={title} subTitle={subTitle} />
            <Action hasOptions={this.state.options.length > 0}/>
            <Options options={this.state.options}/>
            <AddListOption />
        </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
        <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subTitle}</h2>
        </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert('HandlePick');
    }

    render() {
        return (
        <div>
            <button 
                onClick={this.handlePick}
                disabled={!this.props.hasOptions}
            >
                What should I do?
            </button>
        </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props); // Super takes the this.props and passes them into the class
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        console.log(this.props.options);
        // alert('Remove all list items');
    }

    render() {
        return (
            <div>
            <button onClick={this.handleRemoveAll}>Clear All</button>
                <ul>
                    {
                        this.props.options.map((option) => <Option key={option} optionText={option} />)
                    }
                </ul>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
        <li>
            {this.props.optionText}
        </li>
        );
    }
}

class AddListOption extends React.Component {
    onFormSubmit(formEvent) {
        formEvent.preventDefault();

        const option = formEvent.target.elements.option.value.trim();

        if (option) {
            alert(`Adding ${option} to the list!`);
            formEvent.target.elements.option.value = "";
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option" />
                    <button>Add Option</button> 
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
