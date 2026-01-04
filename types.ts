import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface SectionProps {
  id?: string;
  className?: string;
}

export type Theme = 'dark' | 'light';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface CategoryCardProps {
  title: string;
  image: string;
  delay: number;
}

export interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay: number;
}
