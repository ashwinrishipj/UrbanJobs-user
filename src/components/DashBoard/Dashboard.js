import React from "react";
import SideBar from "./SideBar/SideBar";
import MainPage from "./MainPage/MainPage";


export default function dashboard() {
    return (
        <React.Fragment>
            <div className="container-flui bg-dark update">
                <div className="container mt-4">
                    <div className="col-md-3 border-curvy">
                        <SideBar />
                    </div>
                    <div className="col-lg-4">
                        <MainPage />
                    </div>
                    <div className="col-md-3">
                        <chatBar />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}