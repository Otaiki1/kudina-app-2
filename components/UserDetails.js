import ButtonComp from "./ButtonComp";
import Image from "next/image";
import { useState } from "react";
import SavingsPref from "./SavingsPref";


export default function UserDetails({img, bvnNumber, userName, userDOB, userGender}){

    const[showSavings, setShowSavings] = useState(false)

    const handleSubmit = ()=> {
        setShowSavings(true)
    }

    return(
        <>
        {!showSavings ? (
            <>
            <p className="fw-bold p-3 pt-5"><span className="bi-caret-left"></span>User NIN Details 2/4 </p>    
            <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                <Image src={img} className="d-block mx-auto img-thumbnail w-50" alt="notmb"/>
                <p className="fw-bold">{bvnNumber}</p>
                <p>{userName}</p>
                <p>{userDOB}</p>
                <p>{userGender}</p>
                <button className="mt-5 btn btn-danger text-success"> Add Next of Kin</button>
                <div className="pb-5 fixed-bottom vw-md-50 mx-auto px-3">
                    <ButtonComp text="Confirm NIN Details and Biometrics" disabled={false} clickEvent={handleSubmit}/>
                </div>
                
            </div>
        </>
        ):
    (
        <SavingsPref />
    )
    }
    </>   
    )
}