const validation = () => {
  const formLogin = document.getElementById('form-login');
  const button = document.getElementById('but');
  const inputs = [...formLogin.querySelectorAll('input')];
  const formValidator = () => {
    const passed = inputs.every((el) => el.checkValidity());
    if (passed) {
      button.classList.remove('disable');
      button.disabled = false;
    } else {
      button.classList.add('disable');
      button.disabled = true;
    }
  }
  formLogin.addEventListener('input', formValidator, true);
}
validation();