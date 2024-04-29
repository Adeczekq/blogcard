function Card() {
  return (
    <div className="con">
      <img
        className="image"
        src="assets\images\illustration-article.svg"
        alt="blog"
      ></img>

      <div className="blog-text">
        <span className="button">Learning</span>
        <p className="date">Published 21 Dec 2023</p>
        <h1 className="title">HTML & CSS foundations</h1>
        <p className="desc">
          These languages are the backbone of every
          <br /> website, defining structure, content, and
          <br /> presentation.
        </p>
        <span className="inline">
          <img
            className="avatar"
            src="./assets/images/image-avatar.webp"
            alt="avatar"
          ></img>
          <p className="name">Greg Hooper</p>
        </span>
      </div>
    </div>
  );
}

export default Card;
