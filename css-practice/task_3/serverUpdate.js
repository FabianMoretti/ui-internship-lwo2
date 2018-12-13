function createBlogs() {
  const blogs = 'http://localhost:3000/api/blogs';

  function fillBlogs(blogsArr, container, template) {
    blogsArr.forEach((el) => {
      container.appendChild(template(el))
    })
  }

  function dataParser(data) {
    const monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date(data);
    const day = date.getDate();
    const month = monthsArr[date.getMonth()];
    const year = date.getFullYear();
    return {
      day: day,
      month: month,
      year: year,
    }
  }

  function latestBlogTemplate(dataObj) {
    const { previewImg, title, description, comments, watched } = dataObj
    const { day, month } = dataParser(dataObj.published)
    const blog = document.createElement('div');
    blog.classList.add('blog-bottom-box');
    blog.innerHTML = `
          <div class="img-holder"><img src="${previewImg}" alt="seo">
      <div class="date-box">
        <h2>${day}</h2>
        <p>${month}</p>
      </div>
    </div>
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
    </div>
    `;
    return blog;
  }

  function otherBlogTemplate(dataObj) {
    const blog = document.createElement('div');
    const { previewImg, title } = dataObj
    const { day, month, year } = dataParser(dataObj.published)
    blog.classList.add('footer-center-bottom');
    blog.innerHTML = `<div class="footer-center-bottom-box">
      <div class="footer-center-box-left">
        <img src="${previewImg}" alt="seo">
      </div>
      <div class="footer-center-box-right">
        <div class="footer-center-box-right-title">${title}</div>
        <div class="footer-center-box-right-text">${month} ${day}, ${year}</div>
      </div>
    </div>`;
    return blog;
  }

  function renderItems(dataObjects) {
    const blogs = dataObjects.blogs;
    const latestIds = dataObjects.latest;
    const latestBlogsArr = [];
    const otherBlogsArr = [];
    const latestContainer = document.getElementById('latest-container');
    const otherContainer = document.getElementById('other-container');
    blogs.forEach(e => {
      if (latestIds.some(el => e.id === el)) {
        latestBlogsArr.push(e);
      } else {
        otherBlogsArr.push(e);
      }
    });
    fillBlogs(latestBlogsArr, latestContainer, latestBlogTemplate);
    fillBlogs(otherBlogsArr, otherContainer, otherBlogTemplate);
  }

  fetch(blogs)
    .then((res) => res.json())
    .then(renderItems)
}
createBlogs();