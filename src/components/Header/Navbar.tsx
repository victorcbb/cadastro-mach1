import { RiMenuLine } from "react-icons/ri"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Icon,
  IconButton,
  Link,
  Stack,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'

export function Navbar() {
  const disclosure = useDisclosure()

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  async function handleOnClose() {
    await new Promise(resolve => setTimeout(resolve, 1000))
    disclosure.onClose()
  }

  if (isDrawerSidebar) {
    return (
      <>
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24px"
          variant="unstyled"
          onClick={disclosure.onOpen}
          lineHeight="0"
        />
        <Drawer isOpen={disclosure.isOpen} onClose={disclosure.onClose} placement="right">
          <DrawerOverlay>
            <DrawerContent bg="gray.800" p="4">
              <DrawerCloseButton mt="6" />
              <DrawerBody>
                <Stack
                  mt="24"
                  spacing="20"
                  fontSize={["lg", "xl"]}
                  fontWeight="500"
                >

                  <Link 
                    href='#tip1' 
                    onClick={handleOnClose} 
                    alignSelf="flex-end"
                  >
                    Dica 1
                  </Link>

                  <Link 
                    href='#tip2' 
                    onClick={handleOnClose} 
                    alignSelf="flex-end"
                  >
                    Dica 2
                  </Link>

                  <Link 
                    href='#register' 
                    onClick={handleOnClose} 
                    alignSelf="flex-end"
                  >
                    Cadastro
                  </Link>

                  <Link 
                    href='#list' 
                    onClick={handleOnClose} 
                    alignSelf="flex-end"
                  >
                    Lista de alunos
                  </Link>

                </Stack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    )
  }

  return (
    <Breadcrumb
      separator=""
      spacing="4"
      fontSize={["lg", "xl"]}
      fontWeight="500"
    >
      <BreadcrumbItem>
        <BreadcrumbLink href='#tip1'>
          Dica 1
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href='#tip2'>
          Dica 2
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href='#register'>
          Cadastro
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href='#list'>
          Lista de alunos
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}