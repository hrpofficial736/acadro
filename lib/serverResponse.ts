type ServerResponse = {
  status: number;
  success: boolean;
  message: string;
};

export const serverResponse = ({
  status,
  success,
  message,
}: ServerResponse): ServerResponse => {
  return { status, success, message };
};
