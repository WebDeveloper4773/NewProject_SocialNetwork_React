import React from 'react';
import { remove, getAll, create, removeLike, createLike  } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        post: state.profilePage,
        auth: state.auth,
        queryParams: {}
    }
}

let MyPostsContainer = connect(mapStateToProps, { remove, getAll, create, removeLike, createLike })(MyPosts);

export default MyPostsContainer;