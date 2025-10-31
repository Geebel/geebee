document.addEventListener("DOMContentLoaded", () => {
  const postList = document.getElementById("post-list");

  if (!posts || posts.length === 0) {
    postList.innerHTML = "<p>No posts available right now.</p>";
    return;
  }

  postList.innerHTML = posts.map(post => `
    <article class="post-card">
      <img src="${post.image}" alt="${post.title}">
      <div class="post-content">
        <h3>${post.title}</h3>
        <p class="meta">${post.date} • ${post.category}</p>
        <p>${post.excerpt}</p>
        <div class="full-content">${post.content}</div>
      </div>
    </article>
  `).join("");
});
