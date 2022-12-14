import Link from "next/link";

export default function NavTab(){
    return(
        <div className="row bg-white fixed-bottom vw-md-50 mx-md-auto">
        <div className="col text-center">
        <Link href="/dashboard" passRef legacyBehavior>
            <a className="w-100 d-block text-decoration-none text-dark">
                <i className="bi-house-fill fs-4"></i>
                <p className="m-0">Home</p>
                <i className="bi-dot text-dark"></i>
            </a>
        </Link>
            
        </div>
        <div className="col text-center">
            <Link href="/transactions" passRef legacyBehavior>
                <a className="w-100 d-block text-decoration-none text-dark">
                    <i className="bi-card-text fs-4"></i>
                    <p className="my-0">Transactions</p>
                    <i className="bi-dot text-dark"></i>
                </a>
            </Link>
        </div>
        <div className="col text-center">
            <Link href="/accounts" passRef legacyBehavior>

                <a className="w-100 d-block text-decoration-none text-dark">
                    <i className="bi-person fs-4"></i>
                    <p className="my-0">Account</p>
                    <i className="bi-dot text-dark"></i>
                </a>
            </Link>
        </div>
    </div>
    )
    
}