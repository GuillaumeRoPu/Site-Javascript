const Check = document.getElementById('termsCheckbox');
const RemoveButton = document.getElementById('removeFormButton');
const errorBox = document.getElementById('errorBox');
const errorBox2 = document.getElementById('errorBox2');
const errorBox3 = document.getElementById('errorBox3');
const form = document.getElementById('myForm');

Check.addEventListener('change', function() {
    const button = RemoveButton;
    button.disabled = !this.checked;
});

RemoveButton.addEventListener("click", function() {
    const pseudo = document.getElementById('pseudo');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const passCheck = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*., ?]).+$");
    const emailCheck = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
    
    if (pseudo.value.length < 6) {
        errorBox.style.display = 'block';
        pseudo.classList.remove("success");
        pseudo.classList.add("wompwomp");
    } else {
        errorBox.style.display = 'none';
        pseudo.classList.remove("wompwomp");
        pseudo.classList.add("success");
    }

    if (email.value.trim() === '' || !emailCheck.test(email.value)) {
        errorBox2.style.display = 'block';
        email.classList.remove("success");
        email.classList.add("wompwomp");
    } else {
        errorBox2.style.display = 'none';
        email.classList.remove("wompwomp");
        email.classList.add("success");
    }

    if (password.value.length < 10 || passCheck.test(password.value) == false) {
        errorBox3.style.display = 'block';
        password.classList.remove("success");
        password.classList.add("wompwomp");
    } else {
        errorBox3.style.display = 'none';
        password.classList.remove("wompwomp");
        password.classList.add("success");
    }
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("formulaire envoyé");
    if(password.classList.contains('success') && email.classList.contains("success") && pseudo.classList.contains("success")){
        alert("le formulaire a été envoyé. L'inscription s'est bien déroulée.")
    }
})