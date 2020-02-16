import profileReducer, {deletePost} from './profile-reducer';

let state = {
    posts: [
        {id: 1, message: 'Привет как дела', likesCount: 13},
        {id: 2, message: 'Все хорошо', likesCount: 2},
        {id: 3, message: 'How are you', likesCount: 2}
    ],
    profile: null,
    status: ''
}

it('Corret delete post', () => {
    let action = deletePost(1);

    let profileState = profileReducer(state, action);

    expect(profileState.posts.length).toBe(2);
})