import React from "react";
import SideBar from "./SideBar/SideBar";
import MainPage from "./MainPage/MainPage";
import Header from "./Header/Header";
import ChatBar from "./ChatBar/ChatBar";


export default function dashboard() {
    return (
        <React.Fragment>
            <div className="container-fluid bg-dark">
            <Header />
                <div className="row mt-4">
                    <div className="col-md-2 sticky-left border-curvy">
                        <SideBar />
                    </div>
                    <div className="col-md-7">
                        <MainPage />
                    </div>
                    <div className="col-md-3">
                        <ChatBar />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}