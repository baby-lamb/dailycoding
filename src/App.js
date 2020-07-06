import React from 'react';
import './App.css';
import NumberMenu from './component/NumberMenu';
// import './component/DailyContents';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      number:[
        { id:0, title:'Main'},
        { id:1, title:'Day One'},
        { id:2, title:'Day Two' }
        { id:3, title:'Day Tree' }
        { id:4, title:'Day four'}
      ]
    }
  }
  render(){
    if(this.state.mode === 'main'){

    }else if(this.state === ''){


    }
    return(
        <div className="App">
            <NumberMenu data={this.props.number}></NumberMenu>
        </div>
      );
  }
}


export default App;
