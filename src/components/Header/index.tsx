import { Box, Flex, Text } from "@chakra-ui/react"
import { Navbar } from "./Navbar"

export function Header() {
  return (
    <Box as="header" w="100%" h={["20", "24"]} shadow="md" bg="blue.900">
      <Flex
        maxW={1320}
        mx="auto"
        px="4"
        h={["20", "24"]}
        align="center"
        justify="space-between"
      >
        <Text as="a" href="#" fontWeight="500" fontSize={["xl", "2xl"]}>
          Cadastro.<Text as="span" color="red.300">MACH1</Text>
        </Text>

        <Navbar />
      </Flex>
    </Box>
  )
}