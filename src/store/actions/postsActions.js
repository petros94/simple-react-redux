export const types = {
    addPost: 'ADD_POST',
    addComment: 'ADD_COMMENT'
};


export const addPost = ({author: {name}, created_at, message, likes, liked, comments}) => ({
    type: types.addPost,
    post: {
        author: {name},
        created_at: created_at,
        message: message,
        likes: likes,
        liked: liked,
        comments: comments
    }
});

export const addComment = ({postId, author: {name}, message, created_at}) => ({
    type: types.addComment,
    comment: {
        postId: postId,
        author: {name},
        message: message,
        created_at: created_at
    }
});