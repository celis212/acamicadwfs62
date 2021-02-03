class User {
    constructor (username, name, lastname, email, password) {
        this.username = username;
        this.name = name;
        this.email = email;
        this.lastname = lastname;
        this.password = password;
        this.is_admin = false;
    }
    
    Newuser(userProfile, passProfile) {
        try {
            if (userProfile === "" || passProfile === "") {
                throw new Error("el nombre de usuario o contrasena no pueden estar vacios")
                return //termina el codigo
            }
            listOfUser.forEach((profile) => {
                if (
                    profile.username === userProfile &&
                    profile.password === passProfile
                ) {
                    alert(`Welcome ${userProfile}`)
                }
            });

            /*if (isNaN(+userProfile) && userProfile === this.username) {
            alert("the username is offline")
            }
            else {
                return `welcome to our page ${userProfile}`
            }*/ //se cancela por el forEach
        } catch(error) {
            console.error(error)
        }
    }
}
/*operador new*/
let listOfUser = []
let usuario1 = new User ('OwenGib','Owen', 'Giblett', 'ogiblett8@nhs.uk', 'NotSafepass123' );
let usuario2 = new User ('celis212', 'cesar', 'Celis', 'celis212@gmail.com', 'dejedesersapo');
listOfUser.push(usuario1)
listOfUser.push(usuario2)
console.log(usuario1);
let testP = usuario1.Newuser('OwenGib', 'NotSafepass123')
console.log(testP)
// let userData = prompt("log in your user") 