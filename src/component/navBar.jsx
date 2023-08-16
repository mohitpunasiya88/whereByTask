import axios from "axios";
import React, { useEffect, useState } from "react";


function NavBar() {


const [name , setName] = useState();
const [editId , setEditId] = useState();
const [data , setData] = useState();




var getProduct = async()=>{
  await axios.get(`http://localhost:3000/getproduct`).then((response) => {
     setData(response.data);
     console.log(response.data);
     console.log(response.data)
   }).catch((err) => {
     console.log(err)
   });
 }

 useEffect(() => {
  getProduct();
  }, []);


const addProduct = () => {
  var alldata = {
    name: name,
  }
  {editId ? 
    axios.put(`http://localhost:3000/editproduct/${editId}`,alldata).then((response) => {
    console.log(response.data)
    getProduct();
    setName("");
    setEditId("")

  }).catch((err) => {
    console.log(err)
  })
     :
  axios.post(`http://localhost:3000/postproduct`,alldata).then((response) => {
    console.log(response.data)
    getProduct();
    setName("");
  
  }).catch((err) => {
    console.log(err)
  });
}




}

const deleteClick = async(id) => {debugger
  await axios.delete(`http://localhost:3000/deleteproduct/${id}`).then((response) => {
    console.log(response.data)
    getProduct();
  }).catch((err) => {
    console.log(err)
  });
}



const editClick = async(id) => {
  setName(id.name);
  setEditId(id._id)
}


    return ( 
        <>
            <nav class="navbar navbar-expand-lg shadow navbar-light  " style={{padding:'24px',width:'100%',backgroundColor:'white', top: "0"
 

}}>
  <div class="container-fluid">
    <img class="navbar-brand  avatar_Img"   alt="Avatar"  src="https://framerusercontent.com/images/byWcaCNWWZsZnXvSlFAudEUbl0.svg"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{width:"100%"}}>
      <ul class="navbar-nav  mb-2 mb-lg-0" style={{fontSize:'20px', gap:'5rem',marginLeft:'7rem',width:"100%"}}>
      
  
<div className="dropdown" style={{width:"100%"}} >
  <button className="dropbtn"   
      >Products</button>
 
  <div className="dropdown-content full_drop w-100">
   {data?.map((dt)=>
   <div className="row"> 
<div className="col-6">
<a href="#">{dt.name}</a>
</div>
<div className="col-3">
<button onClick={()=>editClick(dt)}>🖊️</button>
</div>
<div className="col-3">
<button onClick={()=>deleteClick(dt._id)}>❌</button>
</div>
   </div>
    
   )}

    <div >
    <div class="form-group mt-3" >
                            <label for="name" className="text-danger">Product name</label>
                            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" class="form-control" id="name" placeholder="name"/>
                        </div>
                        <button onClick={addProduct} type="button" class="btn btn-primary mt-2"> {editId ? "Edit ": "Add" }</button>
    </div>
  </div>
</div>
 
 <div className="dropdown">
  <button className="dropbtn">Pricing</button>
 
  <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
<div className="dropdown">
  <button className="dropbtn">Developers</button>
 
  <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
<div className="dropdown">
  <button className="dropbtn">Resources</button>
 
  <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div> 
       
      </ul>
      <form class="d-flex gap-3 mx-auto">
      <button class="btn btn-outline border_btn mx-2" type="submit">Login</button>

        <button class="btn btn_free "  type="submit">Try for free</button>
      </form>
    </div>
  </div>
      </nav>
{/* {hideShow == 1 ? 
      <div
      onMouseEnter={()=>setHideShow(1)}
      className="bg-success" style={{position:"absolute"}}      
     
>
          <h1 className="fs-5 p-5" style={{marginLeft:'10rem'}}>Choose the right Whereby for you</h1>
          <div className="d-flex gap-4" style={{marginLeft:'12rem'}}>
            <div className="main_box d-flex ">
                 <img  className='box_img' src="https://framerusercontent.com/images/O3vWiQpmEywTT2Nr0hcDVqf8GI.png" alt="" srcset="" />
                  <div className="mt-3">
                  <p className="main_box_P mx-3  d-block">Whereby Embedded</p>
                  <p className="d-inline-block mx-2">Integrate real-time video into your product via our API</p>
                  </div>
            </div>

            <div className="main_box d-flex  ">
                 <img  className='box_img' src="https://framerusercontent.com/images/O3vWiQpmEywTT2Nr0hcDVqf8GI.png" alt="" srcset="" />
                  <div className="mt-3">
                  <p className="main_box_P mx-3  d-block">Whereby Meeting</p>
                  <p className="d-inline-block mx-2">Integrate real-time video into your product via our API</p>
                  </div>
            </div>

            <div className="mx-5">
                <p className="fs-4 mx-5">Features</p>
                <p className="fs-4 mx-5">What's new</p>

            </div>
          </div>
      </div>
      :""} */}

        </>
     );
}

export default NavBar;
