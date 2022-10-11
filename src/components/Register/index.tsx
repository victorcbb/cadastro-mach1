import { Button, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import InputMask from "react-input-mask"

import { Input } from "./Input"
import { useStudentsList } from "../../hook/useStudentsList"
import { useEffect } from "react"

type FormsInput = {
  name: string
  cpf: string
  email: string
  course: string
}

const createStudentFormSchema = yup.object().shape({
  name: yup.string().required("Insira o nome do aluno."),
  cpf: yup.string().required("Insira o CPF do aluno.").min(11, "Insira um CPF válido."),
  email: yup.string().required("Insira o e-mail do aluno.").email("Insira um e-mail válido"),
  course: yup.string().required("Insira o curso do aluno."),
})

export function Register() {
  const { register, handleSubmit, formState, reset } = useForm<FormsInput>({
    resolver: yupResolver(createStudentFormSchema)
  })

  const { handleCreateStudent } = useStudentsList()

  const { errors, isSubmitSuccessful } = formState

  useEffect(() => {
    reset({
      name: '',
      cpf: '',
      email: '',
      course: ''
    })
  }, [isSubmitSuccessful])

  return (
    <Flex
      as="form"
      w="100%"
      maxW={1320}
      mt={["16", "20"]}
      mx="auto"
      p={["6", "8"]}
      direction="column"
      justifyContent="center"
      bg="gray.500"
      borderRadius={12}
      border="2px"
      borderBlock="solid"
      borderColor="gray.800"
      id="register"
      onSubmit={handleSubmit(handleCreateStudent)}
    >
      <Heading
        as="h2"
        textAlign="center"
        fontSize={["3xl", "4xl"]}
        fontWeight="semibold"
        color="blue.900"
        mt={["12", "16"]}
      >
        Cadastrar Aluno
      </Heading>

      <SimpleGrid
        gap={["12", "16"]}
        w="100%"
        minChildWidth="320px"
      >
        <Stack spacing={["8", "12"]} w="100%">
          <Input
            label="Nome"
            placeholder="Digite o nome do aluno."
            error={errors.name}
            {...register("name")}
          />
          <Input
            label="CPF"
            placeholder="000.000.000-00"
            error={errors.cpf}
            as={InputMask}
            mask="***.***.***-**"
            maskChar={null}
            {...register("cpf")}
          />
        </Stack>
        <Stack spacing={["8", "12"]} w="100%">
          <Input
            label="E-mail"
            placeholder="email@exemplo"
            error={errors.email}
            {...register("email")}
          />
          <Input
            label="Curso"
            placeholder="Curso do aluno"
            error={errors.course}
            {...register("course")}
          />
        </Stack>
      </SimpleGrid>

      <Button
        type="submit"
        size="lg"
        w="fit-content"
        mt={["16", "20"]}
        bg="red.300"
        fontWeight="500"
        fontSize={["md", "lg"]}
        alignSelf="center"
        _hover={{ bg: "red.500" }}
      >
        CADASTRAR
      </Button>
    </Flex>
  )
}