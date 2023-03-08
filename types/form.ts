export interface FormValues {
  category: string;
  input: string;
  item?: Record<string, string>; // "Record<string, string>" means an object with string keys and string values
}

export interface Category {
  id: number;
  title: string;
}
