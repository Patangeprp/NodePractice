const response  = require("express");

document.addEventListener('DOMContentLoaded', () => {
    // Register form submission
    document.getElementById('registerForm').addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const dateOfBirth = document.getElementById('dateOfBirth').value;
        const password = document.getElementById('password').value;
        console.log(name,email,dateOfBirth,password);
        try {
            const response = await fetch('/auth/register', { //fetch data to register
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, dateOfBirth, password })
            });
        }
        catch{}
    }); 

    //Login Form
    document.getElementById('loginForm').addEventListener('submit',async(event)=>{
        event.preventDefault();

        const email=document.getElementById('email').value;
        const password=document.getElementById('password').value;
        console.log(email,password);

        try{
            const response=await fetch('/auth/login',{
                method:'POST',
                headers:{'Content-type':'application/json'},
                body:JSON.stringify({email,password})
            })

            const result=await response.json();
            if(response.ok){
                windows.location.href='/homepage.html'
            }else{
                alert(result.message || 'Login failed');
            }
        }catch(error){
            console.error('Error during login:',error);
            alert('Login failed');
        }
    })

});

