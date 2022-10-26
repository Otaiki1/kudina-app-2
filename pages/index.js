import { useState, useEffect } from "react";
import Link from "next/link"
import Image from "next/image";
import logo from "../assets/Frame.png"


export default function SignUp(){
const [filledForm, setFilledForm] = useState(false);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

useEffect(() => {
   if(email!=="" && password!==""){
    setFilledForm(true)
   }else{
    setFilledForm(false)
   }

}, [email,password]);


    return(
        <div className="w-100 h-100 d-flex justify-content-center align-items-center bg-success">
            <div className="container">
            <Image className="img-responsive d-block mx-auto" alt="logo" src={logo}/>
            <div>
                <label htmlFor="email"></label>
                <input typeof="email" name="email" placeholder="Email Address" className="form-control" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password"></label>
                <input typeof="text" name="password" placeholder="Password" className="form-control" min={8} max={20} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <Link href="/dashboard" passRef legacyBehavior>
                <a className={filledForm ?"btn btn-success w-100 mt-3" : "btn bg-secondary btn-disabled w-100 mt-3"}>Sign In</a> 
            </Link>
               
            </div>
            
        </div>
    )
}