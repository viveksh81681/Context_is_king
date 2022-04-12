import { useContext, useEffect, useState } from "react"
import { RegistartionContext } from "../RegistrationContext/RegistrationContext"
export const Form2=()=>{
const [finaldata,setFinaldata]=useState({})
const {obj}=useContext(RegistartionContext)
useEffect(()=>{
  const x=obj.value;
      setFinaldata({...finaldata,...x})
},[])
   console.log(finaldata)
 const handlechange=(e)=>{
    const {id,value}=e.target;
    setFinaldata({...finaldata,[id]:value})
 }
 const senddata=()=>{
    fetch(" http://localhost:3001/Users",{
        method:"POST",
        body:JSON.stringify(finaldata),
        headers:{"content-type":"application/json"}
    })
    alert("product added")
}
return(
    <div>
      <div>
                 <label>state of residence:</label>
                  <input type="text" placeholder="Enter your state of residence" id="state" onChange={handlechange} /><br/><br/>
                  <label>address:</label>
                  <input type="text" placeholder="Enter your address" id="address" onChange={handlechange}/><br/><br/>
                  <label>pin code:</label>
                  <input type="text" placeholder="enter pincode" id="pin" onChange={handlechange}/> <br/>
                  <button disabled={finaldata.name==undefined || finaldata.age==undefined || finaldata.dob==undefined
                  || finaldata.state==undefined || finaldata.address==undefined || finaldata.pin==undefined } onClick={senddata}>submit</button>
      </div>
    </div>
)
}