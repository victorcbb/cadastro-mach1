import { Box, Heading, Icon, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { BiTrash } from "react-icons/bi"
import { useStudentsList } from "../hook/useStudentsList"

export function StudentTable() {

  const { studentsList, handleDeleteStudent } = useStudentsList()

  return (
    <Box
      id="list"
      w="100%"
      maxW={1320}
      mt={["16", "20"]}
      mx="auto"
      pt={["6", "8"]}
      bg="gray.500"
      borderRadius={12}
      border="2px"
      borderBlock="solid"
      borderColor="gray.800"
    >
      <Heading as="h2" my={["8", "16"]} color="blue.900" textAlign="center">Lista de Alunos</Heading>

      <TableContainer p={["6", "8"]}>
        <Table variant="striped" borderRadius={12} bg="whiteAlpha.500" colorScheme="blackAlpha" bgColor="blue.900">
          <Thead>
            <Tr>
              <Th color="gray.400">Nome</Th>
              <Th color="gray.400">E-mail</Th>
              <Th color="gray.400">CPF</Th>
              <Th color="gray.400">Curso</Th>
              <Th color="gray.400"></Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              studentsList.map(student => (
                <Tr key={student.cpf}>
                  <Td>{student.name}</Td>
                  <Td>{student.email}</Td>
                  <Td>{student.cpf}</Td>
                  <Td>{student.course}</Td>
                  <Td onClick={() => handleDeleteStudent(student.cpf)}>
                    <Icon as={BiTrash} fontSize="lg" cursor="pointer" _hover={{ color: "red.500" }} />
                  </Td>
                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}