import {createSelector} from 'reselect';

const getUsersSelector = (state) => {
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users;
}) 

const getCountSelector = (state) => {
    return state.usersPage.count
}
export const getCount = createSelector(getCountSelector, (count) => {
    return count;
}) 

const getTotalCountSelector = (state) => {
    return state.usersPage.totalCount
}
export const getTotalCount = createSelector(getTotalCountSelector, (totalCount) => {
    return totalCount;
})

const getCurrentPageSelector = (state) => {
    return state.usersPage.currentPage;
}
export const getCurrentPage = createSelector(getCurrentPageSelector, (currentPage) => {
    return currentPage;
})

const getFitchingValueSelector = (state) => {
    return state.usersPage.isFitching;
}
export const getFitchingValue = createSelector(getFitchingValueSelector, (toggleIsFitching) => {
    return toggleIsFitching;
})

const getFollowingValueSelector = (state) => {
    return state.usersPage.followingInProgress;
}
export const getFollowingValue = createSelector(getFollowingValueSelector, (followingInProgress) => {
    return followingInProgress;
})

