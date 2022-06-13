import React from "react";

const Box = (props) => {
  let result; //computer의 입장에서 생각하는 값
  if (
    props.title === "Computer" && //만약 title이 컴퓨터 이고,
    props.result !== "TIE" && //결과값이 비기지 않았고,
    props.result !== "" //결과값이 빈값이 아니라면 중괄호의 식 실행
  ) {
    result = props.result === "WIN" ? "LOSE" : "WIN";
    //결과값이 "WIN"이면? (=>user입장에서 이겼을때)
    //컴퓨터는 "LOSE"출력, "WIN"이 아니라면? (=>user가 졌을때) "WIN을 출력한다" 
  } else { 
    result = props.result;
  }// 위의 경우가 아니라면 props 로 전달된 결과를 그대로 쓴다.
  
  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <img className="img-size" src={props.item && props.item.img} />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
