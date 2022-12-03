import { Conversation, PrismaClient } from '@prisma/client';
import { ApolloError } from 'apollo-server-core';

class ConversationService {
  #prisma: PrismaClient;

  constructor() {
    this.#prisma = new PrismaClient();
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
                hasSeenLatestMessage: userId === id,
                userId: id,
              })),
            },
          },
        },
        include: { participants: true },
      });

      return conversation;
    } catch (error) {
      throw new ApolloError('Error creating conversation', '500');
    }
  }
}

export default new ConversationService();
