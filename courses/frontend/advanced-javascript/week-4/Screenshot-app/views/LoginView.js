
class LoginView{
    render(){
        
        const loginDivElement = document.createElement('div');
        loginDivElement.classList.add('login-view');

        const titleElement = document.createElement('h1');
        titleElement.textContent = 'Login';

        const emailDivElement = document.createElement('form');
        emailDivElement.classList.add('email-div');
    
        const passwordDivElement = document.createElement('div');
        passwordDivElement.classList.add('password-div');

        const emailLabel = document.createElement('label');
        emailLabel.textContent = 'Email:';
        emailLabel.setAttribute('for', 'email');
        
        const passwordLabel = document.createElement('label');
        passwordLabel.textContent = 'Password:';
        passwordLabel.setAttribute('for', 'password');

        const emailInput = document.createElement('input');
        emailInput.type = 'text';
        emailInput.placeholder = 'Email';
        emailInput.setAttribute('id', 'email');
        emailInput.setAttribute('required', 'true');
        emailDivElement.appendChild(emailLabel);
        emailDivElement.appendChild(emailInput);


        const passwordInput = document.createElement('input');
        passwordInput.type = 'password';
        passwordInput.setAttribute('id', 'password');
        passwordInput.setAttribute('required', 'true');
        passwordInput.placeholder = 'Password';
        passwordDivElement.appendChild(passwordLabel);
        passwordDivElement.appendChild(passwordInput);

        const loginBtn = document.createElement('button');
        loginBtn.classList.add('btn');
        loginBtn.setAttribute('id', 'login-btn');
        loginBtn.setAttribute('type', 'submit');
        loginBtn.textContent = 'Login';

        loginDivElement.appendChild(titleElement);
        loginDivElement.appendChild(emailDivElement);
        loginDivElement.appendChild(passwordDivElement);
        loginDivElement.appendChild(loginBtn);

        return loginDivElement;
    }
}

export default LoginView;