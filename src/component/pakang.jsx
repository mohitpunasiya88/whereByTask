import React from "react";
function Pakang() {
    return ( 
        <> 
            <div className="packangMain">
                <div className="packangSecondMain">
                    <div className="row">
                        <div className="col-6 p-0 rounded-3">
                            <video style={{width:'512px', height:'359px' , borderRadius:"10px"}} autoPlay loop>
                                <source   src="video/video.mp4" type="video/mp4"/>
                            </video>
                        </div>
                        <div className="col-6 easiestMainDiv">
                            <div className="">
                                <h1>
                                    The easiest way to add video calls into your platform
                                </h1>
                            </div>
                            <div>
                                <p>
                                Get started in minutes with just a few lines of code. Fully branded, customizable and seamlessly integrated into your platform using our API.
                                </p>
                            </div>
                            <div>
                                <p>
                                <a href="#">Discover More</a>
                                </p>
                            </div>
                            <div className="tryForFreeButton2">
                                <button>Try for free</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
     );
}

export default Pakang;