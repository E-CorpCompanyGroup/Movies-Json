let NewsLetter='\
<form action="https://sheetdb.io/api/v1/c9lurc9jptibq" id="sheetdb-form" Method="Post">\
    <h1>E-corp Company Group</h1>\
    <br>\
    <h1>News Letter SignUp</h1>\
    <br>\
    <label>UserName</label>\
    <br>\
    <input type="text" name="UserName" placeholder="Enter Your UserName" id="UserName" required>\
    <br><br>\
    <label>Email</label>\
    <br>\
    <input type="email" name="Email" placeholder="Enter Your Email" id="Email" minlength="8" required>\
    <br><br>\
    <button onclick="Login()">Submit</button>\
</form>\
';
function Login() {
    let UserName=document.querySelector('#UserName');
    let Email=document.querySelector('#Email');
        localStorage.setItem('UserName',UserName.value);
        localStorage.setItem('Email',Email.value);
        LoginDisplay.style.display="none"; 
}
function CheckLogin() {
    if ( localStorage.getItem('UserName',UserName.value)&&localStorage.getItem('Email',Email.value)) {
        LoginDisplay.style.display="none"; 
        userName.innerHTML=localStorage.getItem('UserName',UserName.value).toLocaleUpperCase();
        userEmail.innerHTML=localStorage.getItem('Email',Email.value).toLocaleUpperCase();
    } 
}
