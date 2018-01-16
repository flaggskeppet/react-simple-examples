const Stars = (props) => {
	return(
  	<div>Stars...</div>
  );
}

const Button = (props) => {
	return(
  	<div>Button...</div>
  );
}

const Answer = (props) => {
	return(
  	<div>Answer...</div>
  );
}

class Game extends React.Component {

	render(){
  	return(
    <div>
    	<h3>Play nine</h3>
      <Stars/>
      <Button/>
      <Answer/>
    	<div></div>
    </div>
      );
  }
	
}

class App extends React.Component {

	render(){
  	return(<Game/>)
  }
	
}


ReactDOM.render(<App />, mountNode);

