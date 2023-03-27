function clic(){
    const nombre = document.querySelector('.nombre').value
    const pass = document.querySelector('.pass').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.nombre === nombre)
    if(isUserRegistered){
        return console.log('El usuario ya esta registado!')
    }

    Users.push({name: nombre,password: pass})
    localStorage.setItem('users', JSON.stringify(Users))
    window.location = '/paginas/menu.html'

}