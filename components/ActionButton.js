import Link from "next/link";
export default function ActionButton({iconType, actionButtonColor, actionButtonText}){

    return(
        <Link href="/addUser" passRef legacyBehavior>
            <a className={`btn w-100 rounded ${actionButtonColor} text-start p-2 text-white`}>
                <i className={`d-block bi-${iconType} mb-2`}></i>
                <p>{actionButtonText}</p>
            </a>
        </Link>
    )
}