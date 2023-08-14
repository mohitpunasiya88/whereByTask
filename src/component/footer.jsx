import React, { useEffect, useState } from "react";
import axios from "axios";

function Footer() {
    const [data,setData] = useState();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
          setData(response.data);
          console.log(response.data)
        }).catch((err) => {
          console.log(err)
        });
      }, []);
    return (
        <>
            <div className="footerMain">
                <div className="row footerMain">
                    <div className="col-2 footerHeading">
                        <h3>About</h3>
                        <p>About us</p>
                        <p>Our vision</p>
                        <p>Careers</p>
                        <p>Press</p>
                    </div>
                    <div className="col-2 footerHeading">
                        <h3>Product</h3>
                        <p>Embedded</p>
                        <p>Meetings</p>
                        <p>What's New</p>
                        <p>Status</p>
                        <p>Reference Docs</p>
                    </div>
                    <div className="col-2 footerHeading">
                        <h3>Pricing</h3>
                        <p>For Embedded</p>
                        <p>For Meetings</p>
                    </div>
                    <div className="col-2 footerHeading">
                        <h3>Social</h3>
                        <p>Blog</p>
                        <p>Twitter</p>
                        <p>LinkedIn</p>
                        <p>Instagram</p>
                        <p>Facebook</p>
                    </div>
                    <div className="col-2 footerHeading">
                        <h3>Support</h3>
                        <p>Getting started</p>
                        <p>Support Center</p>
                        <p>Terms of Service</p>
                        <p>Cookie Policy</p>
                        <p>Cookie Setting</p>
                        <p>GDPR Statement</p>
                        <p>Security</p>
                        <p>Sitemap</p>    
                    </div>
                    <div className="col-2 footerHeading">
                    <h3>Get in touch</h3>

                        <p>Contact Support</p>
                    </div>

                </div>
            </div>
            <table class=" table table-dark table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
    </tr>
  </thead>
  <tbody>
    {data?.map((dt)=>
     <tr>
     <td>{dt.id}</td>
     <td>{dt.name}</td>
     <td>{dt.username}</td>
   </tr>
    )}
   
   
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
  </tbody>
</table>
        </>
    );
}

export default Footer;
