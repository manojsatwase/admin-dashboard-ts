import { useState } from "react"
import AdminSidebar from "../../components/admin/AdminSidebar";

const Toss = () => {
  const [angle,setAngle] = useState<number>(0);
  const Posibility_FiftyPercent = 0.5;
  const flipCoin = () => {
    if(Math.random() > Posibility_FiftyPercent){ 
      // Represents a 50% chance of this outcome
      setAngle(prev => prev + 180); // Heads
    }
    setAngle(prev => prev + 360);  // Tails
    //  Represents the remaining 50% chance of this outcome
  }

  return (
    <div className="admin-container">
       <AdminSidebar />
       <main className="dashboard-app-container">
           <h1>Toss</h1>
           <section>
              <article className="tosscoin" onClick={flipCoin} style={{
                transform:`rotateY(${angle}deg)`
              }}>
                 <div></div>
                 <div></div>
              </article>
           </section>
       </main>
    </div>
  )
}

export default Toss