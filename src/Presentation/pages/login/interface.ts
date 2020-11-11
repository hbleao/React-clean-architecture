export interface UiLoginProps {
  state: {
    isLoading: boolean;
    error: string,
    email: string;
    password: string;
    emailStatus: string;
    passwordStatus: string;
  };
  setState: (e) => any;
}