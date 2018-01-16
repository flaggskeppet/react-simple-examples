/*
The usage of the selectedNumbers shows how to set a state on a parent component and
then propagate it to its children.

And also...
Numbers.list = ...
Shows how to avoid duplication of variables when every instance of a component could 
share on a static property instead of defining a field inside the function.

*/

const Stars = (props) => {
const numberOfStars = 1 + Math.floor(Math.random() * 9);

return(
  	<div className="col-5">
    { _.range(numberOfStars).map(num => <i className="fa fa-star" key={num}/>)  }
    
    </div>
  );
}

const Button = (props) => {
	return(
  	<div  className="col-2">
    <button>=</button>
    </div>
  );
}

const Answer = (props) => {
	return(
  	<div className="col-5">
    {props.selectedNumbers.map((number, index) => <span key={index}>{number}</span>)}
    </div>
  );
}

const Numbers = (props) => {
	const getClassName = (number) => {
    if (props.selectedNumbers.includes(number)) return 'selected';
  }

	return(
  	<div className="card text-center">
    	<div>
      {Numbers.list.map((number, index) => <span className={getClassName(number)}>{number}</span>)}
    	</div>
    </div>
  );
}

Numbers.list =  _.range(1,10);

class Game extends React.Component {
	state = {
  	selectedNumbers: [2,4], // fake data
  }

	render(){
  	return(
    <div className="container">
    	<h3>Play nine</h3>
      <hr />
      <div className="row">
        <Stars/>
        <Button/>
        <Answer selectedNumbers={this.state.selectedNumbers}/>
    	</div>
      <br/>
     <Numbers selectedNumbers={this.state.selectedNumbers}/>
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


/*
CSS:
.mountNode {
  color: #333;
}

.fa-star {
	font-size: 24px;
  margin: 0.5em
}

span {
	display: inline-block;
  margin: 0.5em;
  text-align: center;
  background-color: #ccc;
  width: 24px;
  border-radius: 50%;
  cursor: pointer;
}

.selected {
	background-color: #eee;
  color: #ddd;
  cursor:not-allowed;
}

.used {
	background-color: #ada;
  color: #9b9;
  cursor:not-allowed;
}
*/