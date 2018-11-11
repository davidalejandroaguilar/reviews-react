export const getUsers = state => Object.values(state.users);

// This user should be fetched from the server instead of filtering ALL
// the users.
export const getUser = (state, id) => {
  // Does not use getUsers() so that O(1) lookup can be made. Otherwise, we
  // would have to filter O(n).
  const users = state.users;

  return users[id];
};
