import ButtonComp from "./ButtonComp";
import Image from "next/image";
export default function UserDetails({img, bvnNumber, userName, userDOB, userGender}){

    return(
        <div className="h-100 d-flex flex-column justify-content-center align-items-center">
            <Image src={img} className="d-block mx-auto img-thumbnail w-50" />
            <p className="fw-bold">{bvnNumber}</p>
            <p>{userName}</p>
            <p>{userDOB}</p>
            <p>{userGender}</p>
            <button className="mt-5 btn btn-success text-white"> Add Next of Kin</button>
            <div className="pb-5 fixed-bottom vw-md-50 mx-auto">
                <ButtonComp text="Confirm NIN Details and Biometrics" disabled={false} />
            </div>
            
        </div>
    )
}