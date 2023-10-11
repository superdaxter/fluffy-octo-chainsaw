import React, { useEffect, useState } from "react";
import Founders from "../assets/founders.png";
import Catalogue from "../assets/catalogue.png";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
 
export default function Landing() {
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
    <div class="container" >
  <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/053.webp" class="w-100" />
  <div class="centered" >
    <h4>Custom headaaaaaaaaaaaaaaing</h4>
    <p class="m-0">paragraph</p>
  </div>
</div>

    <div className="bg-image" >
      <img src={Catalogue} alt="Founders"></img>
      <div class="mask d-flex justify-content-center flex-column text-center">
        <h3 >Choose the skills that YOU want to learn!</h3>
        <button>
          Browse Classes
        </button>
      </div>
      
    </div>
     
    <div className="d-flex flex-row center">
      <img src={Founders} alt="Founders"></img>
      <div>
        <h4>At Teecha</h4>
        <p>Education is at the heart of what we stand for—that’s why we only partner with teachers that pledge to use environmentally-friendly teaching methods. 

        </p>
        <button>
          Read our story
        </button>
      </div>
      
    </div>

   </div>
 );
}

/*
const Record = (props) => (
 <tr>
   <td>{props.record.name}</td>
   <td>{props.record.position}</td>
   <td>{props.record.level}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);

 
export default function Landing() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/record/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
 */

/*
<table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>Position</th>
           <th>Level</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
     */