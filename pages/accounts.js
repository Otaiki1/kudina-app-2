import UserProfileImage from '../assets/user_avatar.jpeg';
import Info from "../assets/Frame 91.png";
import Image from 'next/image';
import NavTab from '../components/NavTab';

export default function Accounts(){
    return(
        <div className="bg-warning d-flex flex-column align-items-center">
            <div className="bg-white d-flex flex-column align-items-center m-2 p-3">
                <Image className="rounded-circle img-thumbnail img-responsive w-50" src={UserProfileImage} alt="User Image" />
                <p className='m-1'><strong>Faith Roberts</strong></p>
                <Image src={Info} alt="User Info" />
            </div>

            <div className="bg-white m-2 d-flex justify-content-around p-2">
                <div className='m-2'>
                    <i className="bi-person fs-3 me-3"></i>
                </div>
                <div>
                    <div><p><strong>Edit Profile</strong></p></div>
                    <div>Update Profile and Change Images e.t.c.</div>
                </div>
                <i className="bi-carat-right fs-3"></i>
            </div>

            <div className="bg-white m-2 d-flex justify-content-around p-2">
                <div className='m-2'>
                    <i className="bi-gear fs-3 me-3"></i>
                </div>
                <div>
                    <div><p><strong>Settings</strong></p></div>
                    <div>Update Profile and Change Images e.t.c.</div>
                </div>
                <i className="bi-carat-right fs-3"></i>
            </div>
            <NavTab />
        </div>

    )
}