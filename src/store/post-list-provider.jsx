import { createContext, useReducer } from "react";

const DEFAULT_POST_LIST = [
    {
        id: '1',
        title: 'Going to Mumai',
        body: 'I am going to Mmubai for my vacation ',
        reactions: 4,
        userId: '',
        tags: ['vacation', 'mumbai', 'Enjoying'],
    },
    {
        id: '2',
        title: 'Pass ho gye bhai',
        body: '4 saal ki masti ke baad bi ho gye hian pass',
        reactions: 15,
        userId: 'user-12',
        tags: ['graduating', 'Unbeleivable', 'Enjoying'],
    }
];


export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
});
const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === "DELETE_POST") {
        newPostList = currPostList.filter(
            (post) => post.id !== action.payload.postId
        );
    } else if (action.type === "ADD_POST") {
        newPostList = [action.payload, ...currPostList]
    }
    return newPostList;
}

const PostListProvider = ({ children }) => {
    const [postList, dispatchList] = useReducer(
        postListReducer,
        DEFAULT_POST_LIST
    );

    const addPost = (userId, postTitle, postBody, reactions, tags) => {
        dispatchList({
            type: "ADD_POST",
            payload: {
                id: Math.floor(Math.random() * 100),
                title: postTitle,
                body: postBody,
                reactions: reactions,
                id: userId,
                tags: tags,
            }
        })
    };

    const deletePost = (postId) => {
        dispatchList({
            type: "DELETE_POST",
            payload: {
                postId,
            },
        });

    };
    return (<PostList.Provider value={{ postList, addPost, deletePost }}>
        {children}
    </PostList.Provider >
    );
};
export default PostListProvider;