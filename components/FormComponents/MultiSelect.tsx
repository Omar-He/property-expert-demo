import React, { useMemo } from "react";
import Select from "react-select";
import { useField } from "formik";

interface OptionType {
  label: string;
  value: string;
}

interface MultiSelectProps {
  name: string;
  options: OptionType[];
}

export default function MultiSelect({
  name,
  options,
  ...props
}: MultiSelectProps) {
  const [field, meta, helpers] = useField(name);

  const handleChange = (selectedOptions: any) => {
    helpers.setValue(selectedOptions.map((option: any) => option.label));
  };

  const handleBlur = () => {
    helpers.setTouched(true);
  };

  return (
    <Select
      name={name}
      options={options}
      value={options.filter((option: OptionType) =>
        field.value?.includes(option.label)
      )}
      onChange={handleChange}
      onBlur={handleBlur}
      isMulti
      {...props}
    />
  );
}
