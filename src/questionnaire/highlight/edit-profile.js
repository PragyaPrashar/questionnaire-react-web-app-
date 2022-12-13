import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {getUserByIdThunk, editProfileThunk} from "./edit-profile-thunk";
import {registerUserThunk} from "../registration/registration-thunk";
import {loginThunk} from "../login/login-thunks";

const EditProfile = () => {

    const currentLoggedInUser = useSelector(s=>s.users.currentUser)

   const[username, setUsername]=useState(currentLoggedInUser.username);
   const[email, setEmail]=useState(currentLoggedInUser._id);
   const[dateOfBirth, setDateOfBirth] =useState(currentLoggedInUser.dob);
   const[address,setAddress]=useState(currentLoggedInUser.address);
   const[status,setStatus]=useState(currentLoggedInUser.user_status);
   const[password, setPassword]=useState(currentLoggedInUser.password);




    const dispatch=useDispatch();
    const navigate=useNavigate();

    const editProfileHandler=()=>{
        const editProfile = {
            username:username,
            _id:email,
            dob:dateOfBirth,
            address:address,
            user_status:status,
            password:password,
        }
        const loginDetails = {
            _id: editProfile._id,
            password: editProfile.password
        }
        // const editedProfile={
        //     _id: editProfile._id
        // }
        // dispatch(editProfileThunk(editProfile))
        dispatch(editProfileThunk(editProfile))
        // dispatch(editedProfileThunk(editedProfile)).then(()=>navigate("/quans/profile"))




        dispatch(loginThunk(loginDetails)).then(()=>navigate("/quans/profile"))
    }


    return (
        <>
            <div className="row mt-5">
                <div className="col">
                <h6 className="">Edit Profile</h6>
                </div>
            </div>
            <div className="row mt-5">

                <div className="col-2 ">
                    <div>
                        <div className="mb-4 d-flex  ">
                            <img src="../../../images/profile-pic.jpg"
                                 alt="example placeholder" className="rounded-circle wd-image-upload"/>
                        </div>
                        <div className="d-flex  wd-select-bttn ms-3">
                            <div className="btn  border-dark rounded-pill " >
                                <label className="form-label  text-dark fs-10" htmlFor="customFile1">Select
                                    image</label>
                                <input type="file" className="form-control d-none"
                                       id="customFile1"/>
                            </div>
                        </div>
                    </div>



                </div>

                <div className="col-1">
                    <div className="d-flex wd-vertical-line">
                        <div className="vr"></div>
                    </div>
                </div>
                <div className="col-9">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input id="name" type="text" className="form-control shadow-sm" value={username} onChange={(event)=>setUsername(event.target.value)} placeholder="name"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Id</label>
                            <input id="email" type="email" className="form-control shadow-sm" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="emailID"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dob" className="form-label">Date of Birth</label>
                            <input id="dob" type="date" className="form-control shadow-sm" value={dateOfBirth}  onChange={(event)=>setDateOfBirth(event.target.value)} placeholder="date of birth"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input id="address" type="text" className="form-control shadow-sm"   value={address} onChange={(event)=>setAddress(event.target.value)} placeholder="address"></input>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="status" className="form-label">Status</label>
                            <textarea id="status" className="form-control shadow-sm" cx value={status} onChange={(event)=>setStatus(event.target.value)} placeholder="add status"></textarea>
                        </div>
                        <div className="mb-3">
                            <p className="fw-bold">Security</p>
                            <label htmlFor="password" className="form-label">Password</label>
                            <input id="password" type="password" className="form-control shadow-sm"  value={password}  onChange={(event)=>setPassword(event.target.value)} placeholder="password"></input>
                        </div>
                        <div className="mb-3">
                           <button type={"button"} className="w-25 rounded-pill bg-gradient wd-button-color border-0 text-light " onClick={editProfileHandler}> Save</button>
                          <Link to="/quans/profile/">  <button className="w-25 rounded-pill bg-gradient wd-button-color border-0 text-light float-end ">Back</button></Link>
                        </div>

                    </form>
                </div>

            </div>


        </>);
}
export default EditProfile;