import React, { Component } from 'react';
import './App.css';
import ControlButtons from './Components/ControlButtons'

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
          // limitTime: 0,
          // hours : 0,
          // minutes : 0,
          // seconds: 0,
            inputTime: 20,
            remainTime : 20,
        }
    }

    componentDidMount(){

    }

    /**
     * TODO : clearInterval (0초 되면),
     * 인풋값을 계산해서 초로 변환하기
     * */

    countDown(){
        setInterval(
            ()=>{this.setState({
                ...this.state,
                remainTime   : this.state.remainTime -1
            })},
        1000);
    }

    countStop(){
        clearInterval(this.countDown);
    }

    increaseTime(){
      this.setState({
          ...this.state,
          inputTime : this.state.inputTime + 5,
          remainTime : this.state.remainTime + 5,
      })
    }

    decreaseTime(){
      if(this.state.inputTime > 0){
          this.setState({
              ...this.state,
              inputTime : this.state.inputTime - 5,
              remainTime : this.state.remainTime - 5,
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
      <div className="App">
          <div>
              설정시간 : <span>{this.state.inputTime}</span> 분
              <button onClick={()=>{this.increaseTime()}}>▲</button>
              <button onClick={()=>{this.decreaseTime()}}>▼</button>
          </div>
          {this.state.remainTime} : {'00'}
          <div>
              <button onClick={()=>this.countDown()}>시작</button>
              <button onClick={()=>this.countStop()}>중지</button>
          </div>
          {/*<ControlButtons/>*/}
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
