import React from 'react';


//라디오 버튼

class DayFour extends Component {
  constructor(props){
    super(props)
    this.handleRadio = this.handleRadio.bind(this)

    this.state={
      radioGroup:{
        angular:false,
        react:true,
        polymer:false
      }
    }
  }
  handleRadio(event){
    let obj= {} //erase other radios
    obj[event.target.value] = event.target.checked
    this.setState({fadioGroup:obj})
  }

  render(){
    return <form>
      <input type="radio"
      name="radioGroup"
      value='angular'
      checked={this.state.radioGroup['angular']}
      onChange={this.handleRadio} />

      <input type="radio"
      name="radioGroup"
      value='react'
      checked={this.state.radioGroup['react']}
      onChange={this.handleRadio} />

      <input type="radio"
      name="radioGroup"
      value='polymer'
      checked={this.state.radioGroup['polymer']}
      onChange={this.handleRadio} />

    </form>
  }
}


export default DayFour;
