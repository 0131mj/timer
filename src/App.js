import React, { Component } from 'react';
import './App.css';
import moment from 'moment'
import ControlButtons from './Components/ControlButtons'

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
          // limitTime: 0,
          // hours : 0,
          // minutes : 0,
          // seconds: 0,

            inputTime: 20, //minutes
            remainTime : 20 * 60,
        }
    }

    componentDidMount(){

    }

    /**
     * TODO : clearInterval (0초 되면),
     * 인풋값을 계산해서 초로 변환하기
     * */

    countDown(){
        this.timer = setInterval(
            ()=>{this.setState({
                ...this.state,
                remainTime   : this.state.remainTime -1
            })},
        1000);
    }

    countStop(){
        clearInterval(this.timer);
    }

    increaseTime(){
      this.setState({
          ...this.state,
          inputTime : this.state.inputTime + 5,
          remainTime : this.state.remainTime + 300,
      })
    }

    decreaseTime(){
      if(this.state.inputTime > 0){
          this.setState({
              ...this.state,
              inputTime : this.state.inputTime - 5,
              remainTime : this.state.remainTime - 300,
          })
      }
    }


    /**
     *
     * 필요한 파라미터
     *
     * 사용자가
     * 입력한
     * 시간,
     *
     * 남은 시간(현재 시간),
     * 변하게 하는 함수,
     *
     * */
  render() {
    return (
      <div className="App" style={{padding:"20px"}}>
          <div>
              {/*: <span>{this.state.inputTime}</span> 분*/}
              <span>설정시간</span>
              <button onClick={()=>{this.increaseTime()}}>▲</button>
              <button onClick={()=>{this.decreaseTime()}}>▼</button>
          </div>

          <div style={{fontSize:"30px", margin:"20px"}}>
              {Math.floor(this.state.remainTime/60)} : { (this.state.remainTime % 60) < 10 ? '0' + (this.state.remainTime % 60) : this.state.remainTime % 60  }
          </div>

          <div>
              <button onClick={()=>this.countDown()}>시작</button>
              <button onClick={()=>this.countStop()}>중지</button>
          </div>
          {/*<ControlButtons/>*/}
          <br/>


          <br/>
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
