function check(params) {
    let str = document.getElementById('email').value
    let str2 = document.getElementById('pass').value
    const regex = /[^a-zA-Z0-9_@.]/;
    let check = false
    if ((regex.test(str) || !/@/.test(str)) || (str.slice(-1) == "." || str.slice(0,1) == ".") ||
        (/@\./.test(str))){
        if (str2.length < 8) {
            document.getElementById('error').innerHTML = "Invalid email/password"
            return
        }
        document.getElementById('error').innerHTML = "Please enter valid email address"
    }
    else if (str2.length < 8)
        document.getElementById('error').innerHTML = "Password cannot be less than 8 characters"
    else
        document.getElementById('error').innerHTML = ""
}