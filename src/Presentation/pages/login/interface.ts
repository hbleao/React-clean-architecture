export interface UiLoginProps {
  state: {
    isLoading: boolean;
    email: string;
    password: string;
    error: string;
    emailStatus: string;
    passwordStatus: string;
  };
  setState: (e) => any;
}