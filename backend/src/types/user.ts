import { User } from '@prisma/client';
import { DefaultApiResponse } from '.';

// USER RESOLVER INPUTS
export type CreateUsernameInput = {
  username: string;
};

export type SearchUsersInput = {
  username: string;
};

// USER RESOLVER RESPONSES
export interface CreateUserNameResponse extends DefaultApiResponse {
  data: { user: User };
}

export interface SearchUsernameResponse extends DefaultApiResponse {
  data: { users: User[] };
}
