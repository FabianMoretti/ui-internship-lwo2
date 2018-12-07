const blogs = 'http://localhost:3000/api/blogs';


fetch(blogs)
  .then((res) => res.json())
  .then(createBlog)

fetch(blogs)
  .then((res) => res.json())
  .then(createFooterBlog)

function createBlog(data) {
  console.log(data);
  const latestLength = data.latest.length;
  for (let i = 0; i < latestLength; i++) {
    const prewImg = data.blogs[i].previewImg;
    const title = data.blogs[i].title;
    const description = data.blogs[i].description;
    const comments = data.blogs[i].comments;
    const watched = data.blogs[i].watched;
    const published = data.blogs[i].published;
    const date = new Date(published);
    const day = date.getDate();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    const padly = document.getElementById('our-blog');
    const blog = document.createElement('div');
    blog.classList.add('blog-bottom-box');
    blog.innerHTML = `<img src="${prewImg}" alt="seo">
  <div class="blog-box-bottom">
    <div class="blog-box-title">${title}</div>
    <div class="blog-box-text">${description}</div>
    <div class="box-line"></div>
    <div class="box-counters">
      <div class="views">
        <div class="view-img">
          <img src="./img/blog-view.png" alt="seo">
        </div>
      <div class="view-count">${watched}</div>
    </div>
    <div class="comments">
      <div class="comments-img">
        <img src="./img/blog-comment.png" alt="seo">
      </div>
      <div class="comment-count">${comments}</div>
    </div>
  </div>
</div>`;
    padly.appendChild(blog);
  }
}

function createFooterBlog(data) {
  const latestLength = data.latest.length;
  const blogsLength = data.blogs.length;
  for (let i = latestLength -1; i < blogsLength; i++) {
    const prewImg = data.blogs[i].previewImg;
    const title = data.blogs[i].title;
    const published = data.blogs[i].published;
    const date = new Date(published);
    const day = date.getDate();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    const footerBlog = document.getElementById('footer-blog');
    const blog = document.createElement('div');
    blog.classList.add('footer-center-bottom');
    blog.innerHTML = `<div class="footer-center-bottom-box">
      <div class="footer-center-box-left">
        <img src="${prewImg}" alt="seo">
      </div>
      <div class="footer-center-box-right">
        <div class="footer-center-box-right-title">${title}</div>
        <div class="footer-center-box-right-text">${month} ${day}, ${year}</div>
      </div>
    </div>`;
    footerBlog.appendChild(blog);
  }
}