import UserImg from "../assets/user.png";
import Image from 'next/image';

export default function UserInfo(){
    return(
        <div className="d-flex justify-content-between p-2">
            <div className="d-flex justify-content-around">
                <div>
                    <Image className="border-success rounded-circle img-thumbnail img-responsive w-50" src={UserImg} alt="User Image"/>
                </div>
                <div>
                    <p><strong>Aisha Talatu</strong></p>
                    <p>Sep 15, 2022</p>
                </div>
            </div>
            <div>
                <p className="text-success"><strong>+ #500</strong></p>
                <p>Deposit</p>
            </div>
        </div>
    )
}