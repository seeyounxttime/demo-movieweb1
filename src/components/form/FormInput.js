import { FormControl, Input, InputLabel } from "./FormInput.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <FormControl>
      <Input {...otherProps} />
      <InputLabel shrink={otherProps.value.length}>{label}</InputLabel>
    </FormControl>
  );
};

export default FormInput;
