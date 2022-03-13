import { delReviewAC } from "../../redux/profile-reducer";
import Profile from "./Profile";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.reviews
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
			delReviewAC: (id) => {
            let action = delReviewAC(id);
            dispatch(action);
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;