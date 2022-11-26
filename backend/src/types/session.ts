import { User } from '@prisma/client';
import { ISODateString } from 'next-auth';

export type Session = {
  expires: ISODateString;
  user: User;
};
