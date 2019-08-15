import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async (dispatch) => {
    const res = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: res.data })
        
};

/*export const fetchPostsData = (props) => {
    return (dispatch) => {
        return jsonPlaceholder.get('/posts')
            .then(res => {
                dispatch(fetchPosts(res.data))
            })
    }
}*/