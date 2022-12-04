import React from "react";
import "./index.css";
const Questions=()=>{
return(<>
    <div className="row mt-5 ms-2">
        <div className="col-8 ">
            <div className="row  w-100 h-100 shadow">
               <div className="col-1 mt-5">
               <img alt="" className="ms-2 mt-5 rounded-circle wd-size-image shadow" src="../../../images/profile-pic.jpg"></img>
               </div>
                <div className="col-9 mt-5 ">

                    <div className="row  w-75">

                        <select className="border-1 shadow ms-3">
                            <option value="genre">Select a genre:</option>
                            <option value="Beauty">Beauty</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Education">Education</option>
                            <option value="Food">Food</option>
                            <option value="Health">Health</option>
                            <option value="News" >
                                News</option>
                            <option value="Sports">Sports</option>
                            <option value="Technology">Technology</option>

                        </select>


                    </div>

                    <div className="row mt-2">
                        <textarea className="ms-3 w-100 wd-textarea shadow border-0" placeholder=" Ask what's in your mind"></textarea>
                    </div>
                    <div className="wd-line-width ms-2 mt-5">
                    <hr/>
                    </div>
                    <div className="row ">
                        <h1 className="fw-bold text-secondary mt-3">'The important thing is not to stop questioning.'  </h1>
                        <h6 className="text-secondary mt-1"> -Albert Einstein</h6>
                    </div>
                    {/*<div className="row ">*/}
                    {/*    <p >People who you can follow</p>*/}
                    {/*    <div className="col-4">*/}
                    {/*        <div className="card h-100 shadow-sm">*/}
                    {/*        <img src="../../../images/profile-pic-f.jpg" className="card-img-top rounded-circle wd-size-imageF shadow" alt=""/>*/}
                    {/*            <div className="card-body">*/}
                    {/*                <p className="card-text ms-1 mt-2">Amit Satish Kulkarni</p>*/}
                    {/*                <button className="text-light bg-dark rounded-pill border-0 ms-5 wd-bttnF">Follow</button>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-4  ">*/}
                    {/*        <div className="card h-100 shadow-sm">*/}
                    {/*            <img src="../../../images/profile-pic-f.jpg" className="card-img-top rounded-circle wd-size-imageF shadow" alt=""/>*/}
                    {/*            <div className="card-body">*/}
                    {/*                <p className="card-text ms-1 mt-2">Amit Satish Kulkarni</p>*/}
                    {/*                <button className="text-light bg-dark rounded-pill border-0 ms-5 wd-bttnF">Follow</button>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-4  ">*/}
                    {/*        <div className="card h-100 shadow-sm">*/}
                    {/*            <img src="../../../images/profile-pic-f.jpg" className="card-img-top rounded-circle wd-size-imageF shadow" alt=""/>*/}
                    {/*            <div className="card-body">*/}
                    {/*                <p className="card-text ms-1 mt-2">Amit Satish Kulkarni</p>*/}
                    {/*                <button className="text-light bg-dark rounded-pill border-0 ms-5 wd-bttnF">Follow</button>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                <div className="col-2 mt-5">
                    <button className=" mt-5 bg-gradient bg-dark rounded-pill text-light ms-3 border-0 w-75 shadow">Ask</button>
                </div>

            </div>

        </div>

        <div className="col-4 shadow-sm bg-gradient bg-light wd-height">
            Api's (Aish will do this work)
        </div>
    </div>

    </>);
}
export default Questions;