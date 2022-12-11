import {Link} from "react-router-dom";

const EditProfile = () => {
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
                            <input id="name" type="text" className="form-control shadow-sm" value="Pragya Prashar" onChange={()=>{}} placeholder="name"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Id</label>
                            <input id="email" type="email" className="form-control shadow-sm" value="prashar.p@northeastern.edu" onChange={()=>{}} placeholder="emailID"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dob" className="form-label">Date of Birth</label>
                            <input id="dob" type="date" className="form-control shadow-sm" value="Nov 4, 1995"  onChange={()=>{}} placeholder="date of birth"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input id="address" type="text" className="form-control shadow-sm" onChange={()=>{}}  value="1185 Boylston Street, Apt No. 48, Boston, Massachusetts, 02215, United States of America" placeholder="address"></input>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="status" className="form-label">Status</label>
                            <textarea id="status" className="form-control shadow-sm" onChange={()=>{}} value="“Not all those who wander are lost.”" placeholder="emailID"></textarea>
                        </div>
                        <div className="mb-3">
                            <p className="fw-bold">Security</p>
                            <label htmlFor="password" className="form-label">Password</label>
                            <input id="password" type="password" className="form-control shadow-sm" onChange={()=>{}} value="applepie" placeholder="password"></input>
                        </div>
                        <div className="mb-3">
                            <button className="w-25 rounded-pill bg-gradient wd-button-color border-0 text-light "> Save</button>
                          <Link to="/profile/">  <button className="w-25 rounded-pill bg-gradient wd-button-color border-0 text-light float-end ">Back</button></Link>
                        </div>

                    </form>
                </div>

            </div>


        </>);
}
export default EditProfile;