import r from "./review.module.css";

const Review = (props) => {
  let ondelReview = () => {
    props.delReviewDispatch(props.id);
  };
  return (
    <article className={r.revier}>
      <div className={r.headInfo}>
        <div className={r.group}>{props.group}</div>
        <div className={r.headRight}>
          <div className={r.title}>{props.title}</div>
          <div className={r.ratings}>
            <div className={r.rating}>
              <div className={r.ratingName}>Author</div>
              <div className={r.ratingValue}>{props.authRating}</div>
            </div>
            <div className={r.rating}>
              <div className={r.ratingName}>Users</div>
              <div className={r.ratingValue}>{props.userRating}</div>
            </div>
          </div>
        </div>
      </div>

      <div className={r.secondInfo}>
        <div className={r.buttons}>
          <button className={r.buttonBrowse}>Browse</button>
          <div className={r.betweenButton}></div>
          <button className={r.buttonDel} onClick={ondelReview} title='Delete review'>
            <i className={`fa-regular fa-trash-can ${r.delIcon}`}></i>
          </button>
        </div>
        <div className={r.rightBottomInfo}>
          <div className={r.tags}>{props.tags.join(" ")}</div>
					<div className={r.lekeGroup}>
            <i className={`fa-regular fa-thumbs-up ${r.likeIcon}`}></i>
            <div>{props.likes}</div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Review;
