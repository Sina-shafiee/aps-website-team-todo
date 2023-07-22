'use client';
import { TextField as MuiTextField } from '@mui/material';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

type Props<T extends FieldValues> = { control: Control<T, any>; name: Path<T>; placeHolder: string };

export const TextField = <T extends FieldValues>({ control, name, placeHolder }: Props<T>) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <MuiTextField
            helperText={!!error ? `*${error.message}` : ''}
            size='small'
            variant='outlined'
            FormHelperTextProps={{
              sx: { color: (theme) => theme.palette.error.main },
            }}
            label={placeHolder}
            {...field}
          />
        )}
      />
    </>
  );
};
