
const namef = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const business = document.getElementById('business');


// table body
const tboday = document.getElementById('tbodyadd')

// close btn
const closeBtn = document.getElementById('close-btn')

const createTableRow = () =>{
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th scope="row"><img src="../img/profile-icon.png" style="width: 20px; border-radius: 50px;" alt=""></th>
    <td>${namef.value}</td>
    <td>${email.value}</td>
    <td>${phone.value}</td>
    <td>${business.value}</td
    `
    namef.value='',
    email.value='',
    phone.value='',
    business.value=''
    closeBtn.click();
    tboday.appendChild(tr)
}

const addVendor = ()=>{
    createTableRow();
   
    
}

document.getElementById('save-vendor').addEventListener('click',createTableRow);