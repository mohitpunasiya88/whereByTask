import React, { useEffect, useState } from "react";
import axios, { all } from "axios";

function Footer() {
    const [data,setData] = useState([]);
    const [name,setName] = useState();
    const [lastName,setLastName] = useState();
    const [editId,setEditId] = useState("");

    var getUser = async()=>{
     await axios.get(`http://localhost:3000/getusers`).then((response) => {
        setData(response.data);
        console.log(response.data);
        console.log(response.data)
      }).catch((err) => {
        console.log(err)
      });
    }

    useEffect(() => {
      getUser();
      }, []);


    const addUser = () => {
      var alldata = {
        name: name,
        lastname : lastName
      }
      {editId ? 
        axios.put(`http://localhost:3000/edituser/${editId}`,alldata).then((response) => {
        console.log(response.data)
        getUser();
        setName("")
        setLastName("")
        setEditId("")

      }).catch((err) => {
        console.log(err)
      })
         :
      axios.post(`http://localhost:3000/postusers`,alldata).then((response) => {
        console.log(response.data)
        getUser();
        setName("")
        setLastName("")
      }).catch((err) => {
        console.log(err)
      });
    }
     
    }


    const deleteClick = async(id) => {debugger
      await axios.delete(`http://localhost:3000/deleteuser/${id}`).then((response) => {
        console.log(response.data)
        getUser();
      }).catch((err) => {
        console.log(err)
      });
}


const editClick = async(id) => {
  setName(id.name);
  setLastName(id.lastname);
  setEditId(id._id)
}
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

            <div className="row">
              <div className="col-8">
              <table class=" table table-dark table-hover">
  <thead>
    <tr>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {data && data?.map(dt=>
    ( <tr>
     <td>{dt?.name}</td>
     <td>{dt?.lastname}</td>
     <td><button onClick={()=>editClick(dt)} >Edit</button></td>
     <td><button onClick={()=>deleteClick(dt._id)}>Delete</button></td>
   </tr>)
    )}
   
   
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
  </tbody>
</table>
              </div>
              <div className="col-4">


              <div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col">
            <div class="card">
                <div class="card-header">
                Add Users
                </div>
                <div class="card-body">
                    <form>
                        <div class="form-group mt-2">
                            <label for="username">Name</label>
                            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" class="form-control" id="username" placeholder="Enter Name"/>
                        </div>
                        <div class="form-group mt-3" >
                            <label for="lastname">Last name</label>
                            <input value={lastName} onChange={(e)=>setLastName(e.target.value)} type="text" class="form-control" id="lastname" placeholder="Lastname"/>
                        </div>
                        <button onClick={addUser} type="button" class="btn btn-primary mt-2"> {editId ? "Edit ": "Add User" }</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
              </div>
            </div>
          
        </>
    );
}

export default Footer;
