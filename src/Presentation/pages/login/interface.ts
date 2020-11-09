export interface UiLoginProps {
  state: {
    isLoading: boolean;
    email: string;
    password: string;
    error: string;
    emailError: string;
    passwordError: string;
  };
  setState: (e) => any;
}