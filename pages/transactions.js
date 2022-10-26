import Topbar from "../components/Topbar";
import Button from '../components/Button';
import UserInfo from "../components/UserInfo";
import NavTab from '../components/NavTab';

export default function Transaction(){

    return(
        <div className="bg-white vh-100">
            <Topbar/>
            <div className="d-flex justify-content-around my-5">
                <Button color="btn btn-secondary" text="All Categories" />
                <Button color="btn btn-outline-secondary text-dark" text="Withdrawals" />
                <Button color="btn btn-outline-secondary text-dark" text="Deposits" />
            </div>
            <div className="bg-warning p-3">
                    <p>2022/08/06 - 2022/10/25 <i className="bi-caret-down-fill"></i></p>
                    <p>In: #25,000.00       Out: #25,000.00</p>
            </div>
            <div>
                <UserInfo/>
                <hr />
                <UserInfo/>
                <hr />

                <UserInfo/>
                <hr />

                <UserInfo/>
                <hr />

                <UserInfo/>
                <hr />

                <UserInfo/>
                <hr />

                <UserInfo/>
            </div>
            <NavTab/>
        </div>
    )
}