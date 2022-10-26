import Button from "./Button";
import { useState } from "react";
import ButtonComp from "./ButtonComp";

export default function SavingsPref(){

    const[showSavings, setShowSavings] = useState(false);

    const handleSubmit = () => {
        alert("success")
    }

    return(
        <>
            <p className="fw-bold p-3 pt-5"><span className="bi-caret-left"></span>Savings Preference 3/4</p>    
            <div className="h-100 p-5">
                <div className="mt-5">
                    <h5>Select Category</h5>
                    <div className="d-flex">
                        <Button text="Targeted Savings" color="btn btn-lg btn-outline-secondary text-dark w-50 me-3"/>
                        <button className="btn btn-lg btn-outline-secondary text-dark w-50" onClick={() => setShowSavings(true)}>
                            Savings
                        </button>
                    </div>
                </div>
                {showSavings && <SavingsAmount />}
                <div className="pb-5 fixed-bottom vw-md-50 mx-auto px-3">
                    <ButtonComp text="Confirm NIN Details and Biometrics" disabled={false} clickEvent={handleSubmit}/>
                </div>
            </div>
            
        </>
    )
}

function SavingsAmount(){


    const[showFrequency, setShowFrequency] = useState(false);

    return(
        <div className="mt-5">
            <h5>Savings Amount</h5>
            <div className="d-flex flex-wrap">
                <span className="badge rounded-pill bg-danger w-25 m-2 p-3 text-success fs-5" onClick={() => setShowFrequency(true)}>N 200</span>
                <span className="badge rounded-pill bg-danger w-25 m-2 p-3 text-success fs-5" onClick={() => setShowFrequency(true)}>N 500</span>
                <span className="badge rounded-pill bg-danger w-25 m-2 p-3 text-success fs-5" onClick={() => setShowFrequency(true)}>N 1000</span>
                <span className="badge rounded-pill bg-danger w-25 m-2 p-3 text-success fs-5" onClick={() => setShowFrequency(true)}>N 5000</span>
                <span className="badge rounded-pill bg-danger w-25 m-2 p-3 text-success fs-5" onClick={() => setShowFrequency(true)}>N 10000</span>
            </div>
            {showFrequency && <Frequency />}
        </div>
    )
}

function Frequency(){
    return(
        <div className="mt-5">
            <h5>How Often ?</h5>
            <div className="d-flex flex-wrap">
                <span className="badge rounded-pill bg-danger w-25 m-2 p-3 text-success fs-5">Daily</span>
                <span className="badge rounded-pill bg-danger w-25 m-2 p-3 text-success fs-5">Weekly</span>
                <span className="badge rounded-pill bg-danger w-25 m-2 p-3 text-success fs-5">Monthly</span>
                <span className="badge rounded-pill bg-danger w-25 m-2 p-3 text-success fs-5">Once</span>
            </div>
        </div>   
    )
}