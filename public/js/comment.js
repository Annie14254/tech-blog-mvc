const commentFormHandler = async function(event) {
  event.preventDefault();

  const content = document.getElementById('comment-body').value;
  const date = document.getElementById('comment-date').value;
  const blog_id = document.querySelector('.main-card').id

  console.log(content, date, blog_id)

  if (content && date) {
    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        content,
        date,
        blog_id
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
