async function fet_data() {
    let res = await fetch("http://localhost:3000/students");
    let data = await res.json();
    let final_data = data
      .map(
        (t) => `
      <tr>
      <td> ${t.id}</td>
      <td>${t.name}</td>
      <td>${t.age}</td>
      <td>${t.address}</td>
      <td><button onclick="mydelete('${t.id}')">Delete</button></td>
      <td><button onclick="myedit('${t.id}')">edit</button></td>
      </tr>
      
      `
      )
      .join("");
    document.querySelector("#showdata").innerHTML = final_data;
  }
  fet_data();
  function mydelete(id) {
    fetch(`http://localhost:3000/students/${id}`, {
      method: "DELETE",
    }).then((res) => alert("deleted successfully..!!!"));
  }
  // map--> it is used for fetch data
  
  function insertdata() {
    let data = {
      name: document.querySelector("#name").value,
      age: document.querySelector("#age").value,
      address: document.querySelector("#address").value,
    };
    fetch("http://localhost:3000/students", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => alert("inserted successfully"));
  }
  //update data
  async function myedit(id) {
    let mydata = await fetch(`http://localhost:3000/students/${id}`);
    let redata = await mydata.json();
    let senddata = `
      <input type="text" value="${redata.id}" id="id1" readonly><br>
      <input type="text" value="${redata.name}" id="name1"><br>
      <input type="text" value="${redata.age}" id="age1"><br>
      <input type="text" value="${redata.address}" id="address1"><br>
      <input type="submit" onclick="finalupdate('${redata.id}')")>`;
  
    document.querySelector("#edittable").innerHTML = senddata;
  }
  function finalupdate(id) {
      let fdata={
          name:document.querySelector('#name1').value,    
          age:document.querySelector('#age1').value,   
          address:document.querySelector('#address1').value,    
      }
      fetch(`http://localhost:3000/students/${id}`,{
         method:'PUT',
         headers:{
         'Content-Type': 'application/json'
         },
         body:JSON.stringify(fdata)
         })
         .then(r=>alert("updata...!!"))
  }
  