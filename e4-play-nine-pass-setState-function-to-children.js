/*
	Usage of the selectNumber() function shows how to pass a function containing
	an invocation to setState from parent to children.
	
	Note that onClick={() => {props.selectNumber(number)}} is needed since reacts onClick
	expects a function reference (to invoke whenever).
	
	The numberOfStars property has been moved up to the parent to allow the child component
	to be re-rendered without having that property changed.

*/

const Stars = ({numberOfStars}) => {
return(
  	<div className="col-5">
    { _.range(numberOfStars).map(num => <i className="fa fa-star" key={num}/>)  }
    
    </div>
  );
}

const Button = () => {
	return(
  	<div  className="col-2">
    <button>=</button>
    </div>
  );
}

const Answer = ({selectedNumbers}) => {
	return(
  	<div className="col-5">
    {selectedNumbers.map((number, index) => <span key={index}>{number}</span>)}
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
  }
  
  selectNumber = (number) => {
  	if(this.state.selectedNumbers.includes(number)) return;
  	this.setState(prevState =>({
    	selectedNumbers: prevState.selectedNumbers.concat(number),
    }));
  }
  
  render(){
  	return(
    <div className="container">
    	<h3>Play nine</h3>
      <hr />
      <div className="row">
        <Stars numberOfStars={this.state.numberOfStars}/>
        <Button/>
        <Answer selectedNumbers={this.state.selectedNumbers}/>
    	</div>
      <br/>
     <Numbers selectedNumbers={this.state.selectedNumbers}
     					selectNumber={this.selectNumber}/>
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