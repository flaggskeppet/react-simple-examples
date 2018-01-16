/*
Render a list of elements based on an array of data
Note the usage of the spread operator at {...card}. Results in attribute=value pairs such as name="foo" company="bar" etc
The CardList Component render as list of Card components based on supplied props
*/

const Card = (props) => {
	return(
  	<div style={{margin: '1em'}}>
    	<img widht="75" height="75" src={props.avatar_url} />
      <div style={{display: 'inline-block', marginLeft: 10}}>
      	<div style={{fontWeight:'bold'}}>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  );
}

let data = [
	{name: "Jonas", company: "Human IT", avatar_url: "https://avatars3.githubusercontent.com/u/32264228?v=4"},
	{name: "Jonte", company: "Verisure", avatar_url: "https://avatars3.githubusercontent.com/u/32264228?v=4"}
] 

const CardList = (props) => {
  return(
  	<div>
    	{props.cards.map(card => <Card {...card} />)}
    </div>
  );
}


ReactDOM.render(<CardList cards={data} />, mountNode);