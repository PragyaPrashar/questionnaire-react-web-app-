import React from "react";

const UsersToFollow=(
    userItem
)=>{
    console.log("userItem is ",userItem)
    return(

        <>
            <div className="row bg-gradient p-2 border-bottom shadow-sm ">
                <div className="col-2"><img alt="" src="../../../images/profile-pic-f.jpg"
                                            className=" wd-profile-pic-f rounded-circle shadow "/>
                </div>
                <div className="col-7">
                    <div className="pt-1">
                        <span className="fw-bold text-dark">{userItem.userItem.username}</span>
                        {/*<p className="text-secondary">20 followers</p>*/}
                    </div>
                </div>
                <div className="col-3 ">

                    <button className="w-50 wd-btn bg-dark text-light border-0 shadow rounded-pill  mt-3 ">Follow</button>

                </div>

            </div>

        </>

    )

}
export default UsersToFollow;