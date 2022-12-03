import type { ApolloError } from 'apollo-server-core';
import { DefaultApiResponse } from '../types';

export const returnApiError = (
  error: ApolloError,
  message?: string
): DefaultApiResponse => ({
  data: null,
  success: false,
  error: {
    message: message || error.message || 'Internal Server Error',
    statusCode: error.extensions.code || 500,
  },
});

export const returnApiResponse = (data: any): DefaultApiResponse => ({
  data,
  success: true,
  error: null,
});
