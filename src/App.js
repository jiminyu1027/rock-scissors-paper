import Box from "./component/Box";
import "./App.css";
import { useState } from "react";

//가위 바위 보 아이템들을 이름과 이미지를 객체에 담음
const choice = {
  rock: {
    name: "Rock",
    img: "img/r.png",
  },
  scissors: {
    name: "Scissors",
    img: "img/s.png",
  },
  paper: {
    name: "Paper",
    img: "img/p.png",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  //버튼을 누르면 플레이함수가 실행
  const play = (userChoice) => {
    console.log("유저가 선택한 값", userChoice); //유저가 선택한 값
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice(); //컴퓨터가 랜덤으로 선택한 값
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
    //이겼는지 졌는지 판단하는 함수 judgement()를 만들고
    //유저가 선택한 값과 컴퓨터가 선택한 값을 매개변수로 넣는다
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    console.log("itemArray", itemArray); //객체를 배열로 변환
    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log("랜덤으로 선택된 값의 배열번호: ", randomItem); //객체에 담긴 값을 랜덤으로 뽑음
    let final = itemArray[randomItem];
    console.log("컴퓨터가 랜덤으로 선택한 값: ", final); //마지막 배열의 어떤값인지 리턴하여 randomChoice 안으로 값이 들어감
    return choice[final];
  };

  const judgement = (user, computer) => {
    //user가 선택한값, computer가 선택한 값을 넘겨서 이겼는지 졌는지 판단하는 함수
    console.log("유저가 선택한 값:", user, " / 컴퓨터가 선택한 값:", computer);
    if (user.name == computer.name) { //user가 선택한 값과 computer가 선택한 값이 일치하면,
      return "TIE"; //"TIE" 비겼다는 결과를 리턴해준다.
    } else if (user.name == "Rock") { //user가 바위을 선택했을때,
      return computer.name == "Scissors" ? "WIN" : "LOSE";
      //computer가 가위를 선택했다면? "WIN"을 보를 선택했다면? "LOSE"를 리턴한다.
    } else if (user.name == "Scissors") { //user가 가위를 선택했을때,
      return computer.name == "Paper" ? "WIN" : "LOSE";
      //computer가 보를 선택했다면? "WIN"을 바위를 선택했다면? "LOSE"를 리턴한다.
    } else if (user.name == "Paper") { //user가 보를 선택했을때,
      return computer.name == "Rock" ? "WIN" : "LOSE";
      //computer가 바위를 선택했다면? "WIN"을 가위를 선택했다면? "LOSE"를 리턴한다.
    }
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("rock")}>
          <i className="fa fa-hand-rock fa-2x"></i>
        </button>
        <button onClick={() => play("scissors")}>
          <i className="fa fa-hand-scissors fa-2x"></i>
        </button>
        <button onClick={() => play("paper")}>
          <i className="fa fa-hand-paper fa-2x"></i>
        </button>
      </div>
    </div>
  );
}

export default App;
