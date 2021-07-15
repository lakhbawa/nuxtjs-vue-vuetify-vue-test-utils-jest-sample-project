/* eslint-disable */

export default ({ $auth }, inject) => {
  const authObject = {
    // here is reason for this code duplication, please handle carefully
    getUser: () => $auth.user, // if we don't make if function, value will not change with state
    getToken: () => function () {

    },
    isLoggedIn: () => $auth.loggedIn,
    recruiterPreferences: () =>
      [],
    workerPreferences: () => [],
    getUserAccountType: () => $auth.user.current_account_type,
    logout: () => function () {

    }
  }
  inject('authPlus', authObject)

}
