import Review from "./Review/Review";

const Profile = (props) => {
  if (props.reviews.length === 0) {
    props.setReviews([
      {
        id: 1,
        group: "Movie",
        title:
          "Title ,kf,kf,kf,fkf,k заголовокttttttt tttttttt tjjjjjjjjjjj тайтл1",
        authRating: 4,
        userRating: 3,
        tags: ["#review", "#tag", "#superReview", "#superReview2"],
        reviewsIn: {
          images: [],
          text: "эТО БОЛЬШОЙ ОБЗОр много текста",
          likesCount: 11,
        },
      },
      {
        id: 2,
        group: "Game",
        title: "Title ------------------------------- 2",
        authRating: 4,
        userRating: 3,
        tags: ["#review", "#tag"],
        reviewsIn: {
          images: [],
          text: "эТО БОЛЬШОЙ ОБЗОр много текста",
          likesCount: 11,
        },
      },
      {
        id: 3,
        group: "Book",
        title: "Title ,kf,kf,kf,fkf,kk заголовок тайтл3",
        authRating: 4,
        userRating: 3,
        tags: ["#review", "#tag"],
        reviewsIn: {
          images: [],
          text: "эТО БОЛЬШОЙ ОБЗОр много текста",
          likesCount: 11,
        },
      },
      {
        id: 4,
        group: "Movie",
        title: "Title _______________________________4",
        authRating: 4,
        userRating: 3,
        tags: ["#review", "#tag"],
        reviewsIn: {
          images: [],
          text: "эТО БОЛЬШОЙ ОБЗОр много текста",
          likesCount: 11,
        },
      },
    ]);
  }

  let delReviewDispatch = props.delReviewDispatch;
  let reviewsElements = props.reviews.map((r) => (
    <div key={r.id}>
      <Review
        id={r.id}
        group={r.group}
        title={r.title}
        authRating={r.authRating}
        userRating={r.userRating}
        likes={r.reviewsIn.likesCount}
        tags={r.tags}
        delReviewDispatch={delReviewDispatch} // here sent f(x) through props. Может лучше оставить её здесь, а вызывать там..
      />
    </div>
  ));

  return (
    <main>
      <div className="my-3">
        <h4>Your reviews</h4>
      </div>
      {reviewsElements}
    </main>
  );
};

export default Profile;
