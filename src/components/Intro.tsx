import { Box, Button, Flex, Image, Stack, Text, useBreakpointValue } from "@chakra-ui/react"

export function Intro() {
  return (
    <Flex mx="auto" mt={["8rem", "12rem"]} direction={["column", "column", "column", "row"]} px="4" w="100%" maxW={1320} gap={["12", "24"]} align="center">
      <Box w="100%">
        <Stack w="100%" spacing={["6", "6", "8"]}>
          <Text as="h1" w={["20rem", "24rem", "32rem"]} fontWeight="bold" fontSize={["3xl", "5xl"]}>
            Cadastro simplificado é com a &nbsp;
            <Text as="strong" color="red.300">
              MACH1
            </Text>
            !
          </Text>
          <Text as="p" w={["20rem", "23rem","29rem"]} fontWeight="500" fontSize={["md", "xl"]}>
            Com o nosso passo a passo fica fácil e rápido de fazer o ferenciamento de alunos
          </Text>
        </Stack>
        <Button
          as="a"
          href="#register"
          size="lg"
          w="fit-content"
          mt={["20", "24", "32"]}
          bg="red.300"
          fontWeight="500"
          fontSize={["md", "lg"]}
          _hover={{ bg: "red.500" }}
        >
          CADASTRAR ALUNO
        </Button>
      </Box>

      <Box h="100%">
        <Image src="students.jpg" />
      </Box>

    </Flex>
  )
}