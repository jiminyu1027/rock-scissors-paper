import React from "react";

const Box = (props) => {
  let result;
  if (
    props.title === "Computer" &&
    props.result !== "TIE" &&
    props.result !== ""
  ) { // 카드가 computer카드인가? && 결과가 비긴건 아닌가? && props.result에 값이 있는가?
    result = props.result === "WIN" ? "LOSE" : "WIN";
  } else { // 위의 경우가 아니라면 props 로 전달된 결과를 그대로 쓴다.
    result = props.result;
  }
  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <img className="img-size" src={props.item && props.item.img} />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
