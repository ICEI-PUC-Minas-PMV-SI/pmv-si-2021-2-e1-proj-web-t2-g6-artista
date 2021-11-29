const init = () => {
    const inputLogin = document.querySelector("#login")
    const inputSenha = document.querySelector("#senha")
    const btnSubmit = document.querySelector("#btnLogin")

    if (btnSubmit){
        btnSubmit.addEventListener('click', (event) => {
        event.preventDefault();

        fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                email: inputLogin.value,
                password: inputSenha.value,
            })
        }).then((response) => {
            return response.json();

        }).then((data) => {
            console.log (data)
            if (POST=(200)){
                location.href='/homeadm.html'
            }
        })
    }) 

   


    }


    
}
window.onload = init;

