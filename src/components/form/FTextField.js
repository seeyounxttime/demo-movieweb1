import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";

function FTextField({ name, label, ...other }) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          label={label}
          variant="filled"
          color="secondary"
          size="small"
          select
          fullWidth
          SelectProps={{ native: true }}
          error={!!error}
          helperText={error?.message}
          {...other}
          {...field}
        />
      )}
    />
  );
}

export default FTextField;
