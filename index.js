let button1=document.getElementById('login');
let button2=document.getElementById('resiter');
let button3=document.getElementById('submit')
let register_form=document.getElementById('register_form');
let login_form_dc=document.getElementById('login_form_dc')
button2.addEventListener('click',function(){
    register_form.style.display='block';
    login_form_dc.style.display='none';
    
                        });
button1.addEventListener('click',function(){
    register_form.style.display='none';
    login_form_dc.style.display='block';
    
                        });
                        const form = document.querySelector('#register');
                        const name = document.querySelector('#name');
                        const email = document.querySelector('#email');
                        const password1 = document.querySelector('#password1');
                        const password2 = document.querySelector('#confirm_passord');
                        const submitBtn = document.querySelector('#submit');
                        
                        submitBtn.addEventListener('click', (event) => {
                          event.preventDefault();
                        
                          // Perform form validation
                          let errors = [];
                        
                          if (name.value.trim() === '') {
                            errors.push('Name is required');
                          }
                        
                          if (email.value.trim() === '') {
                            errors.push('Email is required');
                          } else if (!/\S+@\S+\.\S+/.test(email.value.trim())) {
                            errors.push('Email is invalid');
                          }
                        
                          if (password1.value === '') {
                            errors.push('Password is required');
                          } else if (password1.value !== password2.value) {
                            errors.push('Passwords do not match');
                          }
                        
                          if (errors.length > 0) {
                            alert(errors.join('\n'));
                          } else {
                            // Submit the form if there are no errors
                            form.submit();
                          }
                        });
                        