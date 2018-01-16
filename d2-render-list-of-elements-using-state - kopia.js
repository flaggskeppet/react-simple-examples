/*
	Adds an input form component and a container component
	The Card list is persisted in the state of the top container component
*/
const Card = (props) => {
	return(
  	<div style={{margin: '1em'}}>
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
	render() {
  	return(
    	<form style={{margin: '1em'}}>
    	  <input type="text" placeholder="Github username" />
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
    	<div>
      	<Form />
      	<CardList cards={this.state.cards} />
      </div>
    );
  }

}


ReactDOM.render(<App />, mountNode);

