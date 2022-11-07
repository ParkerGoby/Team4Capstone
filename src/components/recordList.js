import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

const Question = (props) => (
  <h1>{props.record.question}?</h1>

);

export default function RecordList() {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/record/`);

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
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
        <Question
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <>
    <div>
      <h3>Record List</h3>
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
    </div>

    
     <div class="title-container">        
     <div class="container-fluid">
     
         <div class="row">
         <div class="col-xs-1 text-center"><p>{recordList()}</p></div>
         </div>
     </div>
     </div>
 
 <div class="container-thing">
     <div class="row row-cols-1 row-cols-md-2 g-4">
         
         <div class="col">
             <div class="btn btn-outline-dark card">
             <div class="card-body">
                 <h5 class="card-title text-center align-middle">123</h5>
                 { /*<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>*/}
                 { /* <p>Addition</p> */ }
             </div>
             </div>
         </div>
         <div class="col">
             <div class="btn btn-outline-dark card">
             <div class="card-body">
                 <h5 class="card-title text-center align-middle">345</h5>
                 { /*<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>*/}
                 { /* <p>Addition</p> */ }
             </div>
             </div>
         </div>
         <div class="col">
             <div class="btn btn-outline-dark card">
             <div class="card-body">
                 <h5 class="card-title text-center align-middle">3</h5>
                 { /* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                 { /* <p>Addition</p> */ }
             </div>
             </div>
         </div>
         <div class="col">
             <div class="btn btn-outline-dark card">
             <div class="card-body">
                 <h5 class="card-title text-center align-middle">4</h5>
                 { /*<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>*/}
                { /* <p>Addition</p> */ }
             </div>
             </div>
         </div>
     </div>
     </div>
    </>
  );
}