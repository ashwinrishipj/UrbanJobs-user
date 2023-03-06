import React from "react";
import SideBar from "./SideBar/SideBar";
import MainPage from "./MainPage/MainPage";


export default function dashboard(){
    return(
    <React.Fragment>
        <div className = "row">
            <div className="col-4">
                <SideBar />
            </div>
            <div className="col-8">
                <MainPage />
            </div>
        </div>
    </React.Fragment>
    )
}