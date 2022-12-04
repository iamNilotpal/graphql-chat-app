import { Conversation, Prisma, PrismaClient, User } from '@prisma/client';
import { ApolloError } from 'apollo-server-core';

class ConversationService {
  #prisma: PrismaClient;

  constructor() {
    this.#prisma = new PrismaClient();
  }

  async getAllConversations(user: User) {
    try {
      const conversations = await this.#prisma.conversationParticipant.findMany(
        {
          where: {
            userId: user.id,
          },
        }
      );
      return conversations;
    } catch (error) {
      throw new ApolloError('Error finding conversations.', '500');
    }
  }

  async createConversation(
    participantIds: string[],
    userId: string
  ): Promise<Conversation> {
    if (participantIds.length === 0)
      throw new ApolloError(
        'At least one participant is required to start a conversation.',
        '400'
      );

    try {
      const conversation = await this.#prisma.conversation.create({
        data: {
          participants: {
            createMany: {
              data: participantIds.map((id) => ({
                userId: id,
                hasSeenLatestMessage: userId === id,
              })),
            },
          },
        },
        include: ConversationPopulated,
      });

      return conversation;
    } catch (error) {
      console.log(error.message);
      throw new ApolloError('Error creating conversation', '500');
    }
  }
}

export const ConversationParticipantPopulated =
  Prisma.validator<Prisma.ConversationParticipantInclude>()({
    user: {
      select: {
        id: true,
        username: true,
        image: true,
      },
    },
  });

export const ConversationPopulated =
  Prisma.validator<Prisma.ConversationInclude>()({
    participants: {
      include: ConversationParticipantPopulated,
    },
    latestMessage: {
      include: {
        sender: {
          select: {
            id: true,
            username: true,
          },
        },
      },
    },
    messages: {},
  });

export default new ConversationService();
