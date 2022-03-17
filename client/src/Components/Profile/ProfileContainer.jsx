import { delReviewAC, setReviewsAC } from "../../redux/profile-reducer";
import Profile from "./Profile";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    reviews: state.profilePage.reviews
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    delReviewDispatch: (id) => {
      let action = delReviewAC(id);
      dispatch(action);
    },
		setReviews: (reviews) => {
      let action = setReviewsAC(reviews);
      dispatch(action);
		}
  };
};


const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
