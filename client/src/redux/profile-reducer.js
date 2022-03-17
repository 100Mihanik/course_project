const DEL_REVIEW = "DEL-REV";
const SET_REVIEWS = "SET-REVIEWS";

let initialState = {
  reviews: [],
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEL_REVIEW: {
			let reviewsCopy = [...state.reviews];
			console.log('profileReducer => case DEL_REVIEW - worked');
			let indexDel = reviewsCopy.findIndex((el) => el.id === action.idDel);	// возможно это неправильно. Нельзя использовать индекс. Только id, keyid		
			reviewsCopy.splice(indexDel, 1);
      return {
        ...state,
        reviews: reviewsCopy,
      };
    }
		case SET_REVIEWS: {
			console.log('profileReducer => case SET_REVIEWS - worked');
			return { ...state, reviews: [ ...state.reviews, ...action.reviews ]}
	}
    default:
      return state;
  }
};

export const delReviewAC = (id) => ({ type: DEL_REVIEW, idDel: id, });
export const setReviewsAC = (reviews) => ({type: SET_REVIEWS, reviews });

export default profileReducer;
