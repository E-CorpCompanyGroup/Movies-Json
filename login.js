let NewsLetter='\
<form action="https://sheetdb.io/api/v1/uu4ur42mqks5v" id="sheetdb-form" Method="Post">\
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
        localStorage.setItem('MovieLanderMovieLanderMovieLanderMovieLanderMovieLanderMovieLanderUserName',UserName.value);
        localStorage.setItem('MovieLanderMovieLanderMovieLanderMovieLanderMovieLanderEmail',Email.value);
        LoginDisplay.style.display="none"; 
}
function CheckLogin() {
    if ( localStorage.getItem('MovieLanderMovieLanderMovieLanderMovieLanderUserName',UserName.value)&&localStorage.getItem('MovieLanderMovieLanderMovieLanderEmail',Email.value)) {
        LoginDisplay.style.display="none"; 
        userName.innerHTML=localStorage.getItem('MovieLanderMovieLanderUserName',UserName.value).toLocaleUpperCase();
        userEmail.innerHTML=localStorage.getItem('MovieLanderEmail',Email.value).toLocaleUpperCase();
    } 
}
