const DEL_REVIEW = "DEL-REV";

let initialState = {
  reviews: [
    {
      id: 1,
      group: "Movie",
      title: "Title ,kf,kf,kf,fkf,k заголовок тайтл1",
      authRating: 4,
      userRating: 3,
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
      browse: {
        images: [],
        text: "эТО БОЛЬШОЙ ОБЗОр много текста",
        likesCount: 11,
      },
    },
  ],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEL_REVIEW: {
			let reviewsCopy = {...state.reviews};
			let indexDel = reviewsCopy.findIndex((el) => el.id === action.idDel);	// возможно это неправильно. Нельзя использовать индекс. Только id
			reviewsCopy.splice(indexDel, 1);
      return {
        ...state,
        reviews: reviewsCopy,
      };
    }
    
    default:
      return state;
  }
};

export const delReviewAC = (id) => ({ type: DEL_REVIEW, idDel: id, });

export default profileReducer;
