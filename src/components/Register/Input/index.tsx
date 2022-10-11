import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react"
import React from "react"
import { FieldError } from "react-hook-form"

interface InputProps extends ChakraInputProps {
  label: string
  error?: FieldError
  mass?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>
(({ label , error = null, ...props }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel color="blue.900" htmlFor={props.name}>{label}</FormLabel>
      <ChakraInput
        {...props}
        id={props.name}
        ref={ref}
        bg="gray.700"
        borderColor="blue.900" 
        focusBorderColor="red.300" 
        size="lg" 
        placeholder={props.placeholder}
      />
      {!!error && (<FormErrorMessage>{error.message}</FormErrorMessage>)}
    </FormControl>
  )
})