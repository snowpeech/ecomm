//we're only finding the currentUser in the header component. we'll be memoizing from the get-go
import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

