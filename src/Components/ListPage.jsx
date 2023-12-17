import React, { useState } from "react";
import { useUserContext } from "./usercontext";
import Footer from "./Footer";

// import axios from "axios";

function ListPages() {
  const { data, handleDelete, handleUpdate } = useUserContext();
  const [editingUserId, setEditingUserId] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [updatedPhone, setUpdatedPhone] = useState("");

  const handleEditClick = (user) => {
    setEditingUserId(user.id);
    setUpdatedName(user.name);
    setUpdatedEmail(user.email);
    setUpdatedPhone(user.phone);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editingUserId) {
      handleUpdate(editingUserId, {
        name: updatedName,
        email: updatedEmail,
        phone: updatedPhone,
      });
      setEditingUserId(null);
    }
  };

  return (
    <div className="table table-success table-striped" >
      <table className="table table-bordered px-2">
        <thead>
          <tr className="table-row" style={{backgroundColor:"green", border:"1px solid white"}}>
            <th scope="col" className="colors text-white" >S.No</th>
            <th scope="col" className="colors text-white">Name</th>
            <th scope="col" className="colors text-white">Email</th>
            <th scope="col" className="colors text-white">Phone</th>
            <th scope="col" className="colors text-white">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                {editingUserId === user.id ? (
                  <input
                    type="text"
                    value={updatedName}
                    style={{backgroundColor:"orangered"}}
                    onChange={(e) => setUpdatedName(e.target.value)}
                 
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {editingUserId === user.id ? (
                  <input
                    type="email"
                    value={updatedEmail}
                    style={{backgroundColor:"orangered"}}

                    onChange={(e) => setUpdatedEmail(e.target.value)}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editingUserId === user.id ? (
                  <input
                    type="text"
                    value={updatedPhone}
                    style={{backgroundColor:"orangered"}}

                    onChange={(e) => setUpdatedPhone(e.target.value)}
                  />
                ) : (
                  user.phone
                )}
              </td>
              <td>
                {editingUserId === user.id ? (
                  <button
                    type="button"
                    className="btn text-white"
                    style={{backgroundColor:"green",color:"white" , padding:"10px", border:"1px solid transparent", borderRadius:"10px",fontSize:"15px", margin:"10px"}}
                    onClick={handleEditSubmit}
                  >
                    Update
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      className="btn text-white mt-2 me-4 px-3"
                      style={{backgroundColor:"DodgerBlue",color:"white" , padding:"10px", border:"1px solid transparent", borderRadius:"10px",fontSize:"15px", margin:"10px"}}
                      onClick={() => handleEditClick(user)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger mt-2 me-4"
                      style={{backgroundColor:"red",color:"white" , padding:"10px", border:"1px solid transparent", borderRadius:"10px",fontSize:"15px"}}
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer/>
    </div>
  );
}

export default ListPages;