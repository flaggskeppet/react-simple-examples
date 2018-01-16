const Card = (props) => {
	return(
  	<div>
    	{/* This is how you do a comment in JSX */}
     	<img width="75" height="75" src={props.avatar_url} /> 
      <div style={{display: 'inline-block', marginLeft: 10}}>
      	<div style={{fontWeight:'bold'}}>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  );
}

const CardList = (props) => {
  return(
  	<div>
    	{props.cards.map(card => <Card {...card} />)}
    </div>
  );
}

class Form extends React.Component {
  state = {userName: ''};
  
  handleSubmit=(event) =>{
    event.preventDefault();
  }
  
  // The onChange event handler makes the input element a "Controlled Component". The value is bound to the State of the component
  render() {
  	return(
    	<form onSubmit={this.handleSubmit}>
    	  <input type="text" value={this.state.userName}
        onChange={(event) => this.setState({userName: event.target.value})}
        placeholder="Github username" />
        <button type="submit">Add card</button>
    	</form>
    );
  }
}

class App extends React.Component {

state = { cards: [
	{name: "Jonas", company: "Human IT", avatar_url: "https://avatars3.githubusercontent.com/u/32264228?v=4"},
	{name: "Jonas", company: "Human IT", avatar_url: "https://avatars3.githubusercontent.com/u/32264228?v=4"}
]}; 

	render() {
  	return(
    	<div style={{margin: '1em'}}>
      	<Form />
      	<CardList cards={this.state.cards} />
      </div>
    );
  }
}


ReactDOM.render(<App />, mountNode);

