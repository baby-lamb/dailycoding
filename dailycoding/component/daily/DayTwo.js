import React from 'react';

//jQuery 라이브러리 통합

class DayTwo extends Component {
  constructor(props){
    super(props)
    this.state = {
      counter : 0
    }
  }
  handleClick(event){
    this.setState({ counter : ++this.state.counter })
  }
  renter(){
    return(
      <div>
        <button
          onClick = { this.handleClick.bind(this) }
          className="btn btn-primary">
          Click me {this.state.counter} times
        </button>
      </div>
    )
  }
}

export default DayTwo;
