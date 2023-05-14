const commentFormHandler = async function(event) {
  event.preventDefault();

  const body = document.getElementById('comment-body').value;

  if (body) {
    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    document.location.reload();
  }
};

document
  .querySelector('#new-comment-form')
  .addEventListener('submit', commentFormHandler);
