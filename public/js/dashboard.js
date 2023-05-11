var newPost = document.getElementById("new-post")
var newPostTitle = document.getElementById("post-name")
var newPostContent = document.getElementById("post-content")
var newPostDate = document.getElementById("post-date")

newPost.addEventListener("submit", e => {
    e.preventDefault();
    var title = newPostTitle.value
    var content = newPostContent.value
    var date = newPostDate.value
    
    if(!title || !content || !date){
        alert("Please fill in all fields and try again")
        return;
    }

    const blogReqBody = {
        title: title,
        content: content,
        date: date
    }

    fetch("/api/blog", {
        method: "POST",
        body: JSON.stringify(blogReqBody),
        headers:{
            "Content-Type":"application/json"
        }
    })

    if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to add blog post');
      }
})