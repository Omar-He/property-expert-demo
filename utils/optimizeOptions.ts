interface optionType {
  id: number;
  title: string;
}

export const optimizeOptions = (options: optionType[]) => {
  return options.map((option) => ({
    label: option.id.toString(),
    value: option.id.toString(),
  }));
};
