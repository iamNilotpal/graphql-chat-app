export interface DefaultApiResponse {
  success: boolean;
  error: ApiError | null;
  data: any;
}

export type ApiError = {
  statusCode: number;
  message: string;
};
