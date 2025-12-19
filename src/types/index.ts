export interface Vendor {
  id: string;
  name: string;
  logo: string;
  altText: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CTAButton {
  text: string;
  link: string;
  variant: 'primary' | 'secondary' | 'outline';
}

export interface NewsletterForm {
  email: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface SignInForm {
  email: string;
  password: string;
}

export interface SignUpForm {
  username: string;
  phone: string;
  password: string;
  confirmPassword: string;
}
