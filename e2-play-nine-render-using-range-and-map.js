/*
Rendering with _.range and map:
_.range returns an array with elements in the provided range like [1,2,3,4]
Then use .map (NOT forEach because we need a return value here) to return jsx
*/

const Stars = (props) => {
const numberOfStars = 1 + Math.floor(Math.random() * 9);

return(
  	<div className="col-5">
    { _.range(1, numberOfStars).map(num => <i className="fa fa-star" key={num}/>)  }
    
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
  	<div className="col-5">Answer...</div>
  );
}

const Numbers = (props) => {
	return(
  	<div className="card text-center">
    	<div>
      { _.range(1,9).map((number, index) => <span>{number}</span>)}
    	</div>
    </div>
  );
}

class Game extends React.Component {

	render(){
  	return(
    <div className="container">
    	<h3>Play nine</h3>
      <hr />
      <div className="row">
        <Stars/>
        <Button/>
        <Answer/>
    	</div>
      <br/>
     <Numbers />
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