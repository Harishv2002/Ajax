function FetchData()
{
    var xhr = new XMLHttpRequest()
    xhr.open("GET","https://jsonplaceholder.typicode.com/users")
    xhr.send()
    xhr.onload=()=>{
        let response = xhr.responseText
        localStorage.setItem("users",response)
    }
    // DisplayData()
}

function DisplayData()
{
    // let users = JSON.parse(localStorage.getItem("users"));
    // let html = ` <center>
    // <table border='2px'>
    //     <thead>
    //         <tr>
    //             <th>
    //                 Name
    //             </th>
    //             <th>
    //                 Phone-Number
    //             </th>
    //             <th>
    //                 Division
    //             </th>
    //         </tr>
    //     </thead>
    //     <tbody>
    // `;
    // users.forEach(element => {
    //     html += `
    //     <tr>
    //     <td>${element?.name}</td>
    //     <td>${element?.phone}</td>
    //     <td>${element?.div || "11"}</td>
    //     </tr>
    //     `
    // })

    // html += '</tbody> </table></center>';

    // const w = open()
    // w.document.body.innerHTML = html;


    let tbody = document.getElementById("tbody")
    let users=JSON.parse(localStorage.getItem("users"))
    tbody.innerHTML=""
    users.forEach(element => {
        tbody.innerHTML+=
    `
        <tr>
            <td>${element.name}</td>
            <td>${element.username}</td>
            <td>${element.email}</td>
        </tr>
    `
    });
    
}

FetchData();


document.getElementById("btn").addEventListener('click',()=>{
    let name = document.getElementById('name').value
    let username = document.getElementById('phone_no').value
    let email = document.getElementById('Div').value

    let postObj = {
        name,username,email
    }

    let xhr = new XMLHttpRequest()
    xhr.open("POST","https://jsonplaceholder.typicode.com/users")
    xhr.setRequestHeader('Content-type','application/json','charset=UTF-8')
    xhr.send(JSON.stringify(postObj))

    xhr.onload=()=>{
        if(xhr.status==201)
        {
            let arr=JSON.parse(localStorage.getItem('users'))
            arr.unshift(postObj)
            localStorage.setItem('users',JSON.stringify(arr))
            DisplayData()
        }
    }

})