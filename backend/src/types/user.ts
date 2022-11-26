export type CreateUserNameData = {
  username: string;
};

export type CreateUserNameResponse = {
  success: boolean;
  error: string | null;
};

export type SearchUsersInput = {
  username: string;
};
