/*
The usage of the checkAnswer function and the answerIsCorrect parameter on the Button component shows
how to calculate a state and exposing the result to a child component.

Also: Switch statement for dynamic rendering
And: Calculation with the reduce method
And: Destructuring of state object in Container Components render method 

*/

const Stars = ({numberOfStars}) => {
return(
  	<div className="col-5">
    { _.range(numberOfStars).map(num => <i className="fa fa-star" key={num}/>)  }
    
    </div>
  );
}

const Button = ({selectedNumbers, answerIsCorrect, checkAnswer}) => {
	let button;
  switch(answerIsCorrect){
  	case true:
    	button = <button className="btn btn-success"><i className="fa fa-check"></i></button>
      console.log("true");
      break;
    case false:
      button = <button className="btn btn-danger"><i className="fa fa-times"></i></button>
      console.log("false");
      break;
    default:
    	button = <button className="btn" onClick={checkAnswer} disabled={selectedNumbers.length === 0}>=</button>
      console.log("default");
      break;
  }

	return(
  	<div  className="col-2">
    	{button}
    </div>
  );
}

const Answer = ({selectedNumbers, unSelectNumber}) => {
	return(
  	<div className="col-5">
    {selectedNumbers.map((number, index) => <span onClick={() => unSelectNumber(number)} key={index}>{number}</span>)}
    </div>
  );
}

const Numbers = (props) => {
	const getClassName = number => {
    if (props.selectedNumbers.includes(number)) return 'selected';
  }

	return(
  	<div className="card text-center">
    	<div>
      {Numbers.list.map((number, index) => 
      	<span key={index} 
        			onClick={() => {props.selectNumber(number)}} 
              className={getClassName(number)}>
        	{number}
        </span>)}
    	</div>
    </div>
  );
}

Numbers.list =  _.range(1,10);

class Game extends React.Component {
	state = {
  	selectedNumbers: [],
    numberOfStars: 1 + Math.floor(Math.random() * 9),
    answerIsCorrect: null,
  }
  
  selectNumber = (number) => {
  	if(this.state.selectedNumbers.includes(number)) return;
  	this.setState(prevState =>({
    	selectedNumbers: prevState.selectedNumbers.concat(number),
    }));
  }
  
  unSelectNumber = (number) => {
  	this.setState(prevState =>({
    	selectedNumbers: prevState.selectedNumbers.filter(selectedNumber => number !== selectedNumber),
    }));
  }
  
  checkAnswer = () => {
  	this.setState(prevState => ({
    	answerIsCorrect: prevState.selectedNumbers.reduce((acc, n) => acc + n, 0) === prevState.numberOfStars,
    }));
  }
  
  render(){
  	const {numberOfStars, selectedNumbers, answerIsCorrect} = this.state; // Destructured for convenience and easy access
  	return(
    <div className="container">
    	<h3>Play nine</h3>
      <hr />
      <div className="row">
        <Stars numberOfStars={numberOfStars}/>
        <Button selectedNumbers={selectedNumbers}
        				checkAnswer={this.checkAnswer}
        				answerIsCorrect={answerIsCorrect}/>
        <Answer selectedNumbers={selectedNumbers}
              	unSelectNumber={this.unSelectNumber}
              	/>
    	</div>
      <br/>
     <Numbers selectedNumbers={selectedNumbers}
     					selectNumber={this.selectNumber}
              />
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