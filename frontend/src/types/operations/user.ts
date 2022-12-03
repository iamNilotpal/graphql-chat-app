import { User } from '@prisma/client';
import { ApiError } from '..';

export type CreateUsernameInput = {
  username: string;
};

export type SearchUsersInput = {
  username: string;
};

export type CreateUserNameResponse = {
  createUsername: {
    data: { user: User };
    success: boolean;
    error: ApiError | null;
  };
};

export type SearchUsersResponse = {
  searchUsers: {
    data: { users: SearchedUser[] };
    success: boolean;
    error: ApiError | null;
  };
};

export type SearchedUser = {
  id: string;
  username: string;
  image: string;
};
