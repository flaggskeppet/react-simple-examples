/*
Separation of concerns: 
 - A global eventhandler
 - The Button component is provided the event handler as props
 - The Result component render the value supplied as props 
*/
class Button extends React.Component {
  render(){
  	return(
    <button onClick={this.props.handleClick}>+1</button>
    );
  }
}

const Result = ({value}) => {
	return(
  <div>{value}</div>
  );
}

class App extends React.Component {
	state = { counter: 0};
  
  incrementCounter = () =>{
    this.setState((prevState) =>({
    	counter: this.prevState.counter + 1
    }));
  }
    
  render(){
  	return(
    	<div>
      	<Button handleClick={this.incrementCounter} />
        <Result value={this.state.counter}/></div>
    );
  }
}

ReactDOM.render(<App />, mountNode);