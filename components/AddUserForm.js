import { useState, useEffect } from "react";
import ButtonComp from "../components/ButtonComp";
import UserDetails from "./UserDetails";
import img from "../assets/user.png";

export default function AddUserForm(){

    const handleClick  = () => {
       setIsSubmit(true);
    }

    const[phoneNumber, setPhoneNumber] = useState('');
    const[identification, setIdentification] = useState('');
    const[idNumber, setIdNumber] = useState('');
    const[isFilled, setIsFilled] = useState(false);
    const[isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!isFilled) return;
    }

    const checkFilled = () =>{
        phoneNumber && identification && idNumber ?  setIsFilled(true) : setIsFilled(false)
    }

    useEffect(() => checkFilled(), 
    [phoneNumber, identification, idNumber])

    return(
        <>
            <p className="fw-bold p-3 pt-5"><span className="bi-caret-left"></span>{!isSubmit ? "Add New User 1/4" : "User NIN Details 2/4"} </p>
            {!isSubmit ? 
            (<form onSubmit={(e) => handleSubmit(e)} className="p-5 mt-3">
            <div className="mb-5">
                <label for="phoneNumber" className="form-label">Enter Phone Number</label>
                <input type="number" className="form-control bg-warning" id="phoneNumber" aria-describedby="emailHelp" onChange={(e) => setPhoneNumber(e.target.value)}/>
            </div>
            <div class="mb-3">
                <select id="disabledSelect" class="form-select bg-warning" onChange={(e) => setIdentification(e.target.value)}>
                    <option value="">Select Means of Identification</option>
                    <option value="NIN">National Identity Number(NIN)</option>
                    <option value="VC">Voter's Card</option>
                </select>
            </div>
            <div className="mb-5">
                <label for="idNumber" className="form-label">Enter ID Number </label>
                <input type="number" className="form-control bg-warning" id="idNumber" aria-describedby="emailHelp" onChange={(e) => setIdNumber(e.target.value)}/>
            </div>
            
            <ButtonComp text="Verify Phone Number" disabled={!isFilled} clickEvent={handleClick}/>
        </form>):
        (
            <UserDetails img={img} bvnNumber="232334XXXXX" userName="Aisha Talatu Jumare" userDOB="24 Sep 1985" userGender="Female" />
        )}
            
        </>
        
    )
}
