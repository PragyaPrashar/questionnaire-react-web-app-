import React from "react";
import Navigation from "../navigation";

function ProfileComponent() {
    return (
        <>
            <div className={"row"}>
                <h1>Menu Bar</h1>
            </div>
            <div className={"row"}>
                <div className={"col-8"}>
                    <h1>This is left profile</h1>
                </div>
                <div className={"col-4"}>
                    <h1>This is right profile</h1>
                </div>
            </div>
        </>
    );
}

export default ProfileComponent;