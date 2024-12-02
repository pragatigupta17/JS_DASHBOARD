async function fet_data() {
    let res=await fetch("http://localhost:3000/students")
    let data =await res.json()
    let final_data=data.map((t)=>`
<h1>${t.id}</h1>
<h1>${t.name}</h1>
<h1>${t.email}</h1>
<h1>${t.number}</h1>
    
    `).join("")
    document.querySelector('#showdata').innerHTML=final_data
    
}
fet_data()
function mydelete(id){
    fetch(`http://localhost:3000/students/${id}`,{
    method:'DELETE'
})
.then(res=>alert("deleted successfully..!!!"))
}async function myedit(id){
    let myupdata = await fetch(`http://localhost:3000/students/${id}`)
    let redata = await myupdata.json()
    let senddata = `
    <input type="text" value="${redata.id}" id="id1" readonly><br>
    <input type="text" value="${redata.name}" id="name1"><br>
    <input type="text" value="${redata.age}" id="age1"><br>
    <input type="text" value="${redata.address}" id="address1"><br>
    <input type="submit" onclick="finalupdate('${redata.id}')">
    `
    document.querySelector('#edittable').innerHTML = senddata
}

function finalupdate(id){
    let fdata={
        name:document.querySelector('#name1').value,
         age:document.querySelector('#age1').value,
         address:document.querySelector('#address1').value,
    }
    fetch(`http://localhost:3000/students/${id}`,{
        method:'PUT',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(fdata)
    })
    .then(r=>alert("updated......!!!!"))
}
