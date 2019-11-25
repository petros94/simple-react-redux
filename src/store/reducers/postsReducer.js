import { types } from "../actions/postsActions";

const initialState = {
    0: {
        author: {
            name: 'Kyriakos'
        },
        created_at: '1h ago',
        message: 'Οι Tool χαλασαν με τον τελευταιο δισκο',
        likes: 1,
        liked: true,
        comments: {
            0: {
                postId: 0,
                author: {
                    name: 'Vasilis'
                },
                created_at: '30min ago',
                message: '+1'
            },
            1: {
                postId: 0,
                author: {
                    name: 'Petros'
                },
                created_at: '30min ago',
                message: 'Τι είναι Tool?'
            }
        }
    },
    1: {
        author: {
            name: 'John'
        },
        created_at: '1h ago',
        message: 'Μονο functional components!!',
        likes: 2,
        liked: false,
        comments: {}
    }
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.addPost:
            const { post } = action;
            const id = Object.keys(state).length;
            return {
                ...state,
                [id]: {
                    id: id,
                    ...post
                }
            };
        case types.addComment:
            const { comment } = action ;
            const { postId } = comment;
            const commentId =  Object.keys(state[postId].comments).length;
            const newComments = {
                ...state[postId].comments,
                [commentId]: {
                    id: commentId,
                    ...comment
                }
            };
            return {
                ...state, [postId]: {...state[postId], comments: newComments}
            };

        default:
            return state;
    }
};

export default postsReducer;