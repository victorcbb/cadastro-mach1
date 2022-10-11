import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";

export function Tip2() {
  return (
    <Box as="section" w="100%" bg="red.50" mx="auto" id="tip2" pt="8" pb="20">
      <Heading
        as="h2"
        textAlign="center"
        fontSize="4xl"
        fontWeight="semibold"
        color="blue.900"
        mt={["12", "16"]}
      >
        Dica 2
      </Heading>
      <SimpleGrid
        gap="8"
        w="100%"
        maxW={1320}
        mx="auto"
        p="8"
        minChildWidth="320px"
        alignItems="center"
      >
        <Box>
          <Image src="tip2.png" borderRadius={8} />
        </Box>

        <Box w="100%" bg="blue.900" borderRadius={8} py={["12", "20"]} px="4">
          <Text fontSize={["xl", "2xl"]}>
            Cadastro feito, você poderá acompanhar os alunos na tabela abaixo do campo de cadastros.
            <br /> <br />
            Caso seja necessário, é possível remover um aluno da lista,
            basta clicar no ícone de lixeira após as informações de cada aluno na tabela para abrir uma caixa de confirmação acima da tela do navegador e clicar em &nbsp;
            <Text as="strong" color="red.300">
              OK
            </Text>
            .
          </Text>
        </Box>

      </SimpleGrid>
    </Box>
  )
}