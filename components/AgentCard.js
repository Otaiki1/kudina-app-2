export default function AgentCard({userBalance, userAmount}){

    return(
        <div className="card mt-3 border-0 p-5 rounded">
            <div className="d-flex justify-content-between">
                <div>
                    <p>Wallet Balance</p>
                    <p className="fs-2">{userBalance}</p>
                </div>
                <div>
                    <i className="bi-eye fs-3"></i>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>Ofafa Payment - <span className="fw-bold">{userAmount}</span> </p>
                </div>
                <div className="col">
                    <button className="btn btn-success w-100 text-white">Pay Now</button>
                </div>
            </div>
        </div>
    )
}