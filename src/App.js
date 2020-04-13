import React from 'react';
import './App.css';
import NumberMenu from './component/NumberMenu';
// import './component/DailyContents';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      number:[
        { id:1 },
        { id:2 }
      ]
    }
  }
  render(){
    return(
        <div className="App">
            <NumberMenu data={this.props.number}></NumberMenu>
        </div>
      );
  }
}


export default App;
