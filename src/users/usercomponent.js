import React, {useEffect, useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import UsersToFollow from "./users-to-follow";
import {findUsersThunk} from "../services/profile-thunks";


const Users =()=>{
    let {users, loading} = useSelector(state => state.profileusers)
    const currentLoggedInUser = useSelector(s=>s.users.currentUser);
    const [disable,setDisable] = useState(false);
    if(currentLoggedInUser!==null && currentLoggedInUser!==undefined){
        users=users.filter(item=>item._id!==currentLoggedInUser._id)
    }

    const dispatch = useDispatch();
    useEffect(() => {
        if(currentLoggedInUser!==null && currentLoggedInUser.username.includes("admin")){
            setDisable(true)
        }
        dispatch(findUsersThunk());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


    return(
                <div className="row mt-2">

                    <ul className="list-group">
                        {
                            users.map(item=> <UsersToFollow key={item._id} userItem={item}/>)
                        }

                    </ul>

                </div>

    );
}
export default Users;