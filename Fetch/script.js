
const postList=document.getElementById('postList');
async function getPosts() {
    const response=await fetch( "https://jsonplaceholder.typicode.com/posts?_limit=5");
    const posts= await response.json();
    posts.forEach(function(post){
        const li=document.createElement("li");
        li.textContent=post.title;
        postList.appendChild(li);
    });

    
}
getPosts();