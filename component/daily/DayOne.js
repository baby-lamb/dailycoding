import React from 'react';


//마우스 오버 이벤트

function DayOne extends Component {
  render(){
    return (
      <div className="DayOne">
        <div
          style={ {border: '1px solid red'} }
          onMouseOverCapture={( (event) => {
            console.log('mouse over on capture event')
            console.dir(event, this)}).bind(this)}
          onMouseOver={( (event) => {
            console.log('mouse over on bubbling event')
            console.dir(event, this)}).bind(this)}>
            Open DevTools and move your mouse cursor over here
        </div>
      </div>
    );
  }
}


export default DayOne;
