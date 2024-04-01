import { useEffect, useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar"

const formatTime = (timeInSeconds: number) => {
    const SECONDS_PER_HOUR = 3600;
    const MINUTES_PER_HOUR = 60;

    const hours = Math.floor(timeInSeconds / SECONDS_PER_HOUR);
    const minutes = Math.floor((timeInSeconds % SECONDS_PER_HOUR) / MINUTES_PER_HOUR);
    const seconds = timeInSeconds % MINUTES_PER_HOUR;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedHours} : ${formattedMinutes} : ${formattedSeconds}`;
};


const Stopwatch = () => {
    const [time,setTime] = useState<number>(0);
    const [isRuning,setIsRunning] = useState<boolean>(false);
 
    useEffect(()=> {
      let intervalID:number;
       if(isRuning){
        intervalID = setInterval(()=>{
            setTime((prev) => prev +1);
          },1000);
       }
      return () => clearInterval(intervalID)
    },[isRuning])

    const resetHandler = ()=>{
        setTime(0);
        setIsRunning(false);
    }
  return (
    <div className="admin-container">
    <AdminSidebar/>
    <main className="dashboard-app-container">
        <h1>Stopwatch</h1>
        <section>
            <div className="stopwatch">
                <h2>{formatTime(time)}</h2>
                <button onClick={()=>setIsRunning(prev=>!prev)}>{isRuning ? 'Start' : 'Stop'}</button>
                <button onClick={resetHandler}>Reset</button>
            </div>
        </section>
    </main>
    </div>
  )
}

export default Stopwatch