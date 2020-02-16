import React, {useEffect, useState} from 'react';
import './MyPosts.css';
import Post from './Post/Post';
import ProfileFormRedux from './ProfileForm/ProfileForm';
import LeftPosts from './LeftColPosts/LeftPosts';
import RightColPosts from './RightColPosts/RightColPosts';
import PropTypes from 'prop-types';
import PostForm from './ProfileForm/ProfileForm';
import Preloader from './../../Common/Preloader/Preloader';

const LIMIT = 10;

const MyPosts = ({ getAll, create, auth, remove, removeLike, createLike, queryParams, post, post: { isLoading, posts, totalCount, user } }) => {

    const [activePage, setActivePage] = useState(1);

    useEffect(() => {getAll(getQueryParams())}, [])

    useEffect(() => getAll(getQueryParams()), [activePage])

    const getQueryParams = () => ({
        ...queryParams,
        skip: (activePage - 1) * LIMIT,
        limit: LIMIT
    })

    let postsElemets = posts.map(p => <Post post={p} auth={auth} remove={remove} key={p._id} TYPE='UPDATE_POSTS' removeLike={removeLike} createLike={createLike} />)

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
                        <div className="newsfeed">
                            <PostForm />   
                        </div>
                        {isLoading && <Preloader />}
                        <div className="newsfeed">
                            {postsElemets}
                        </div>
                    </div>

                    <LeftPosts />
                    
                    <RightColPosts />
                </div>
            </div>

            {/* <div className={c.myPosts}>
            <h3>My posts</h3>
            <div>
                <ProfileFormRedux onSubmit={onSubmit}/>
            </div>     
            <div className={c.posts}>
                { postsElemets }
            </div>
        </div> */}
        </>
    );
}

MyPosts.propTypes = {
  getAll: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  queryParams: PropTypes.object.isRequired
}

export default MyPosts;