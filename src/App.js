import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [targetDate, setTargetDate] = useState("");
  const [timeLeft, setTimeLeft] = useState(null);
  const [countDownTimer, setCountDownTimer] = useState(null)

  function setCountdown() {
    const targetTime = new Date(targetDate).getTime();

    const countDown = setInterval(() => {
      const presentTime = new Date().getTime();
      const diff = targetTime - presentTime;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({days , hours , minutes , seconds})

        if(diff < 0){
          clearInterval(countDown);
          setTimeLeft({days:0 , hours:0 , minutes:0 , seconds:0})
        }
    },1000);

    setCountDownTimer(countDown)

  }

  function handleCancelTimer() {
    clearInterval(countDownTimer)
    setCountDownTimer(null)
    setTimeLeft(null)
  }

  useEffect(()=>{
    return () =>{
      clearInterval(countDownTimer)
    }
  },[countDownTimer])

  return (
    <div className="container">
      <h2>Countdown Timer</h2>
      <label>Select Date and Time to Begin Countdown </label>
      <input
        type="datetime-local"
        value={targetDate}
        onChange={(e) => setTargetDate(e.target.value)}
      />
      <br />
      <br />
      <button onClick={setCountdown}>  Start Timer  </button>
      <button onClick={handleCancelTimer}>   Cancel Timer   </button>

      <div>
        {timeLeft && (
          <div>
            <h2>Time Left :</h2>
            <p>{`${timeLeft.days} Days ${timeLeft.hours} Hours ${timeLeft.minutes} Minutes ${timeLeft.seconds} Seconds`}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
