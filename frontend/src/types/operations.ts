export type CreateUsernameData = {
  createUsername: {
    success: boolean;
    error: string;
  };
};

export type CreateUsernameVariables = {
  username: string;
};

export type SearchUsersData = {
  searchUsers: SearchUser[];
};

export type SearchUsersInput = {
  username: string;
};

export type SearchUser = {
  id: string;
  username: string;
  image: string;
};
