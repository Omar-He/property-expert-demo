export interface FormValues {
  category: string;
  input: string;
  item?: Record<string, string>;
}

export interface Category {
  id: number;
  title: string;
}
