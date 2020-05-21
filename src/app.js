class App extends React.Component {

    constructor(){
        super();
        this.state ={
            counter: 0
        }
    }

    handleClick() {
        this.setState({
            counter:  this.state.counter + 1
        });
    }
    
    render() {
        console.log(this.state.counter);
        return (
            <div>
                <h1>Hello world</h1>
                <button onClick={() => this.handleClick()}>Click</button>
                <h2>{this.state.counter}</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);