import { useEffect, useState } from "react"
export const Users=()=>{
const [userdata,setUserdata]=useState([])
useEffect(()=>{
    fetch("http://localhost:3001/Users").then(Response=>Response.json()).then(data=>setUserdata(data))
},[])
    return(
        <div>
            <div>
                {userdata.map((elem)=>{
                    return (
                        <div>
                            <p>Name:{elem.name}</p>
                            <p>Age:{elem.age}</p>
                            <p>Date of birth{elem.dob}</p>
                            <p>State of residence{elem.state}</p>
                            <p>pin_No{elem.pin}</p>
                            <p>Address{elem.address}</p>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}