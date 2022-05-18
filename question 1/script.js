let users = [];
getInfo = function (event) {
    event.preventDefault();
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    let obj = { email, password };
    users.push(obj)
    localStorage.setItem('user', JSON.stringify(users));
}

