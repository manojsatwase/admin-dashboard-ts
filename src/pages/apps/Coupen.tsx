import { FormEvent, useEffect, useState } from "react"
import AdminSidebar from "../../components/admin/AdminSidebar";
import { generateCoupon } from "../../utils/helper";


const Coupen = () => {
  const [size,setSize] = useState<number>(7);
  const [prefix,setPrefix] = useState<string>("");
  const [includeNumbers,setIncludeNumbers] = useState<boolean>(false);
  const [includeCharacters,setIncludeCharacters] = useState<boolean>(false);
  const [includeSymbols,setIncludeSymbols] = useState<boolean>(false);
  const [isCopied,setIsCopied] = useState<boolean>(false);
  const [coupon,setCoupon] = useState<string>("");

  const copyText = async (coupon:string) => {
     await window.navigator.clipboard.writeText(coupon); // return a promise function use async function
     setIsCopied(true);
  }  

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const result: string = generateCoupon({ prefix, size, includeCharacters, includeNumbers, includeSymbols });
    if (!result) {
      alert('Please Select One At Least');
    } else {
      setCoupon(result);
    }
  }
  
  
  useEffect(()=> {
   setIsCopied(false);
  },[coupon]);

  return (
    <div className="admin-container">
        <AdminSidebar />
        <main className="dashboard-app-container">
            <h1>Coupen</h1>
            <section>
               
                <form className="coupon-form" onSubmit={submitHandler}>
                   <h1 className="prefix">Prefix: {prefix.length}</h1>
                    <input 
                        type="text"
                        value={prefix}
                        onChange={({target:{value}})=>setPrefix(value)}
                        placeholder="Coupon Length"
                        maxLength={size}
                     />
                      <input 
                        type="number"
                        value={size}
                        onChange={({target:{value}})=>setSize(Number(value))}
                        min={7}
                        maxLength={25}
                        placeholder="Text to include"
                     />
                     <fieldset>
                         <legend>Include</legend>
                           <div>
                           <input 
                            type="checkbox"
                            checked={includeNumbers}
                            onChange={()=>setIncludeNumbers(prev=>!prev)}
                            id="numbers"
                           />
                             <label htmlFor="numbers">Numbers</label>
                           </div>
                           <div>
                           <input 
                            type="checkbox"
                            checked={includeCharacters}
                            onChange={()=>setIncludeCharacters(prev=>!prev)}
                            id="characters"
                           />
                             <label htmlFor="characters">Characters</label>
                           </div>
                           <div>
                           <input 
                            type="checkbox"
                            checked={includeSymbols}
                            onChange={()=>setIncludeSymbols(prev=>!prev)}
                            id="symbol"
                           />
                             <label htmlFor="symbol">Symbol</label>
                           </div>
                     </fieldset>
                     <button type="submit">Generate</button>
                </form>

                 {coupon && <code>{coupon} <span onClick={()=>copyText(coupon)}>
                    {isCopied ? 'Copied' :'Copy'}
                  </span></code>}
            </section>
        </main>
    </div>
  )
}

export default Coupen