import React from "react";
import Posts from "../posts";
import CategoriesSidebar from "../categories-sidebar";
import {Route, Routes} from "react-router";
import UsersToFollow from "../../users/users-to-follow";
import Users from "../../users/usercomponent";

const HomeComponent=()=>{
    return(
       <>
           <div className="row">
       <div className="col-2">
           <CategoriesSidebar/>
       </div>
           <div className="col-7">
               {/*<Posts/>*/}
               <Routes>
               <Route path="/" element={<Posts/>}/>
                   <Route path="/users" element={<Users/>}/>
               </Routes>
           </div>
           <div className="col-3">
               API calls(Aish work)
           </div>
           </div>
       </>

    );
}
export default HomeComponent;