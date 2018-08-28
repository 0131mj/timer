import React, { Component } from 'react';
import './App.css';
import ControlButtons from './Components/ControlButtons'

class App extends Component {


  constructor(props){
    super(props);
    this.state = {
      limitTime: 0,
      hours : 0,
      minutes : 0,
      seconds: 0,
    }
  }

  componentDidMount(){
      setInterval(
          ()=>{this.setState({
              hours     : (new Date()).getHours(),
              minutes   : (new Date()).getMinutes(),
              seconds   : (new Date()).getSeconds()
          })},
      1000)
  }

  render() {
    return (
      <div className="App">
          <div>
              설정시간 : <span>5</span> 분
              <button>▲</button>
              <button>▼</button>
          </div>
          {this.state.hours} : {this.state.minutes} : {this.state.seconds}

          <ControlButtons/>
          <br/>


          <br/> 1초마다 카운트가 되도록 하기
          {/*카운트 시작*/}
          {/*카운트 종료 알림*/}
          {/*카운트 초기화*/}
          {/*카운트 시간 설정*/}
          {/*카운트 중지*/}
      </div>
    );
  }
}

export default App;
