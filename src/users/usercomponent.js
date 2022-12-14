import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import UsersToFollow from "./users-to-follow";
import {findUsersThunk} from "../services/profile-thunks";


const Users =()=>{
    let {users, loading} = useSelector(state => state.profileusers)
    const currentLoggedInUser = useSelector(s=>s.users.currentUser);
    if(currentLoggedInUser!==null && currentLoggedInUser!==undefined){
        users=users.filter(item=>item._id!==currentLoggedInUser._id)
    }

    console.log("Users are"+users)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findUsersThunk());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


    return(
                <div className="row mt-2">

                    <ul className="list-group">
                        {/*{*/}

                        {/*    loading &&*/}
                        {/*    <li className="list-group-item">*/}
                        {/*        Loading...*/}
                        {/*    </li>*/}

                        {/*}*/}

                        {
                            users.map(item=> <UsersToFollow key={item._id} userItem={item}/>)
                        }

                    </ul>

                </div>

    );
}
export default Users;