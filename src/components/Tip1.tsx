import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"

export function Tip1() {
  return (
    <Box
      as="section"
      w="100%"
      bg="red.50"
      mt={["16", "20"]}
      mx="auto"
      id="tip1"
      pt={["6", "8"]}
      pb={["16", "20"]}
      borderBottom="1px"
      borderBlockEnd="solid"
      borderBottomColor="blue.700"
    >
      <Heading
        as="h2"
        textAlign="center"
        fontSize="4xl"
        fontWeight="semibold"
        color="blue.900"
        mt={["12", "16"]}
      >
        Dica 1
      </Heading>
      <Flex
        direction="column"
        gap={["6", "8"]}
        w="100%"
        maxW={1320}
        mx="auto"
        p={["6", "8"]}
        align="center"
        overflowX="auto"
      >
        <Box w="100%" bg="blue.900" borderRadius={8} py={["12", "20"]} px="4">
          <Text fontSize={["xl", "2xl"]}>
            Para começar a fazer o cadastro do aluno basta clicar no botão &nbsp;
            <Text as="strong" color="red.300">
              CADASTRAR ALUNO
            </Text>
            &nbsp; logo acima, ou navegar até o campo de Cadastro. <br /><br />
            Cada campo a ser preenchido tem uma indicação de qual informação deve ser inserida, como exemplificado na imagem a seguir.
            Após o preenchimento basta clicar em &nbsp;
            <Text as="strong" color="red.300">
              CADASTRAR
            </Text>
            !
          </Text>
        </Box>

        <Image flex="1" borderRadius={8} src="tip1.png" />

      </Flex>
    </Box>
  )
}