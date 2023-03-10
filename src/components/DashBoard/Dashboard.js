import React from "react";
import SideBar from "./SideBar/SideBar";
import MainPage from "./MainPage/MainPage";
import Header from "./Header/Header";


export default function dashboard() {
    return (
        <React.Fragment>
            <div className="container-fluid bg-dark vh-100">
            <Header />
                <div className="container mt-4">
                    <div className="col-md-3 border-curvy">
                        <SideBar />
                    </div>
                    <div className="col-lg-6">
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