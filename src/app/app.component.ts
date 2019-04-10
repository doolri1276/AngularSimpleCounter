import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  curVal = 0;
  manualVal = 0;
  static LIMIT_CNT = 100;

  member = {
  	name:"blues",
  	email:"doe@gmail.com"
  };

  animals = [
  	'dog', 'cat','pig'
  ];

  animal='cat';

  colorByValue() {
  	if (this.curVal > 0) return 'green';
  	else if (this.curVal <0) return 'red';
  	else return 'grey';
  }

  inc() {
  	const tempVal = this.curVal + 1;
  	if(this.checkLimitCnt(tempVal)) {
  		this.curVal = tempVal;
  	}
  }

  dec() {
  	const tempVal = this.curVal - 1;
  	if(this.checkLimitCnt(tempVal)) {
  		this.curVal = tempVal;
  	}
  }

  setValueForcibly() {
  	if (this.checkLimitCnt(this.manualVal)) {
  		this.curVal = this.manualVal;
  	}
  	this.manualVal = 0;
  }

  checkLimitCnt(val) {
  	if(Math.abs(val) < AppComponent.LIMIT_CNT) {
  		return true;
  	}

  	const target = val > 0 ? '증가' : '감소';
  	alert(`더 이상 ${target}시킬 수 없습니다.`);
  	return false;
  }

  ////// 속성 지시자 //////

  //[class.my-class]
  isMyClass='0';





  //[ngClass]
  //각 키가 클래스 명이고 각 키의 값이 참인 경우에만 클래스 속성을 반영한다.
  myObj={
	  'test-class': true, //클래스 적용됨
	  'your-class': 0,    //클래스 미적용됨 ( false 거나 0 일때 미적용 )
	  'test': true        //클래스 적용됨
  };





  //[ngStyle]

  //이런식으로 속성값을 지정하여 동적으로 변경이 가능하다.
  boilable=1;
  edible=false;

  styleConf= {
	  color: this.boilable ? 'green': 'purple',
	  'font-weight': this.edible ? 'bold': 'normal'
  };





  ///// 파이프 /////
  
  //ng g pipe 파이프명    하면 파이프 생성 가능
  myName="hohoho"


}
