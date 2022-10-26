import avatar from "../assets/user_avatar.jpg"
import Image from "next/image";
export default function Topbar(){

    return(
        <div className="d-flex justify-content-between pt-4">
            <div className="d-flex w-50 justify-content-around">
                <Image src={avatar} alt="" className="rounded-circle img-thumbnail img-responsive w-25" />
                <div className="d-flex flex-column">
                    <p className="text-secondary mb-0">Ofafa Agent</p>
                    <p>Halima</p>
                </div>
            </div>
            <div className="w-25 d-flex justify-content-end px-5">
                <i className="bi-bell fs-3 green"></i>
            </div>
        </div>
    )
}