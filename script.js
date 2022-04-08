// Changins the button given a selected language

const languageSelection = document.getElementById('lang-box');
const textOfLogin = document.querySelector('.login-anchor');

languageSelection.addEventListener('change', changeTextButton);


function changeTextButton()
{
    if(languageSelection.selectedIndex == 1)
    {
        textOfLogin.text = 'Sign in';
    }
    else
    {
        textOfLogin.text = 'Iniciar sesion';
    }

}






