import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { FiInstagram } from "react-icons/fi"

export function Footer() {
  return (
    <Box as="footer" w="100%" h="48" shadow="inner" mt="20">
      <Flex
        w="100%"
        maxW="fit-content"
        mx="auto"
        direction="column"
        align="center"
        justify="center"
        gap="10"
        p="12"
      >
        <Text as="strong" fontSize="xl">Powred by Mach1 - Pilotando para o futuro!</Text>

        <Flex w="100%" align="center" justify="space-between">
          <Link display="flex" alignItems="center" color="blue.300" href="https://bemach1.com.br/" isExternal>
            <ExternalLinkIcon mr="2" /> bemach1.com.br
          </Link>

          <Link display="flex" alignItems="center" color="blue.300" href="https://www.instagram.com/be.mach1/" isExternal>
            <Icon as={FiInstagram} mr="2" /> @be.mach1
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}