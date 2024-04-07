import React from "react";
import { useState } from "react";

function Game() {
  let arr = [];
  for (let i = 97; i <= 122; i++) {
    arr.push(String.fromCharCode(i));
  }
  let word = ["bird",  "apple", "orange"];
  const [numbers, setnumbers] = useState(0);
  const [remainingAttempts, setRemainingAttempts] = useState(6);
  const [thatword, setthatword] = useState("");

  const wordofthegame = word[numbers].split("");
  const maskedWord = wordofthegame.map((e) => (thatword.includes(e) ? e : "_"));
  const onClickhandle = (e) => {
    let inp = e.target.value;
    setthatword([...thatword, inp]);
    if (wordofthegame.indexOf(inp) <= -1) {
      setRemainingAttempts((e) => e - 1);
    }
  };
  const reset = () => {
    setthatword("");
    setRemainingAttempts(6);
  };
  const finish = ()=>{
    setthatword("");
    setRemainingAttempts(6);
    alert("ทำถูกทุกข้อเลยยยย")
    setnumbers(0)
  }
  const CheckWin = (e) => {
    if (maskedWord.includes("_") === false) {
    if(numbers+1!== word.length){
      setnumbers((e) => e + 1);
    }
    alert("โครตโหดกระโดดยิง");
      reset();
     
    } else {
      alert("YOU FAIL ...");
      reset();
    }
  };

  if (remainingAttempts < 0) {
    alert("YOU FAIL ...");
    reset();
  }
if( arr.length === numbers ){
finish()
}
//   console.log(
//     "check",
//     maskedWord.includes((e) => e)
//   );
//   console.log(word[numbers].split(""));
//   console.log(thatword, " ===> thatword");
//   console.log(maskedWord, " ===> maskedWord");
  console.log(numbers);
  console.log(word.length);

  return (
    <>
      <h1>Hangman</h1>
      <p>Remaining attempts: {remainingAttempts}</p>
      <p>{maskedWord}</p>
      {arr.map((e, ind) => {
        return (
          <button
            disabled={thatword.includes(e)}
            key={ind}
            onClick={onClickhandle}
            value={e}
          >
            {e}
          </button>
        );
      })}
      <button onClick={CheckWin}>CHECK</button>
    </>
  );
}
export default Game;
