const signupFormHandler = async function(event) {
  event.preventDefault();

  const usernameEl = document.querySelector('#username-signup');
  const emailEl = document.querySelector('#email-signup');
  const passwordEl = document.querySelector('#password-signup');

  console.log(usernameEl, emailEl, passwordEl)

  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameEl.value,
      email: emailEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    //document.location.replace('/dashboard');
    console.log("success")
  } else {
    alert('Failed to sign up');
  }
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
