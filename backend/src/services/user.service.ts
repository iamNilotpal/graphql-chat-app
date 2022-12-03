import { PrismaClient, User } from '@prisma/client';
import { ApolloError, AuthenticationError } from 'apollo-server-core';
import { Session } from 'next-auth';

class UserService {
  #prisma: PrismaClient;

  constructor() {
    this.#prisma = new PrismaClient();
  }

  checkAuthentication(session: Session) {
    if (!session || !session.user || !session.user.email)
      throw new AuthenticationError('You must login.');
  }

  async createUsername(username: string, user: User): Promise<User> {
    if (!username) throw new ApolloError('Username field is required.', '400');

    try {
      const existsUser = await this.#prisma.user.findUnique({
        where: { username },
      });

      if (existsUser)
        throw new ApolloError('Username is used by someone.', '409');

      const updatedUser = await this.#prisma.user.update({
        where: { email: user.email },
        data: { username },
      });

      return updatedUser;
    } catch (error) {
      throw new ApolloError('Error creating username.', '400');
    }
  }

  async searchUsersWithUsername(
    usernameToSearch: string,
    usernameOfCurrentUser: string
  ): Promise<User[]> {
    try {
      const users = await this.#prisma.user.findMany({
        where: {
          username: {
            contains: usernameToSearch,
            not: usernameOfCurrentUser,
            mode: 'insensitive',
          },
        },
      });

      return users;
    } catch (error) {
      throw new ApolloError('Error while searching for users.', '500');
    }
  }
}

export default new UserService();
