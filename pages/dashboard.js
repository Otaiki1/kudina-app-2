import AgentCard from "../components/AgentCard";
import QuickAction from "../components/QuickAction";
import SearchBar from "../components/SearchBar";
import Topbar from "../components/Topbar";
import NavTab from "../components/NavTab";

export default function Dashboard(){

    return(
        <div className="p-3 vh-100">
            <Topbar />
            <AgentCard userAmount={'N27000'} userBalance={"220,000.50"}/>
            <QuickAction />
            <SearchBar />
            <NavTab />
        </div>
        
        
    )
}