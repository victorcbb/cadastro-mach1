import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { SubmitHandler } from "react-hook-form"

interface IStudents {
  name: string
  cpf: string
  email: string
  course: string
}

type CreateStudentFormData = {
  name: string
  cpf: string
  email: string
  course: string
}

interface StudentsListContextType {
  handleCreateStudent: (student: CreateStudentFormData) => void
  studentsList: IStudents[]
  handleDeleteStudent: (cpf: string) => void
}

const StudentsListContext = createContext<StudentsListContextType>({} as StudentsListContextType)

interface StudentListContextProviderProps {
  children: ReactNode
}

const STUDENTS_LIST_STORAGE_KEY = "cadastroMach1:studentsList"

export function StudentsListContextProvider({ 
  children 
}: StudentListContextProviderProps) {
  const [studentsList, setStudentsList] = useState<IStudents[]>(() => {
    const storedStudentList = localStorage.getItem(STUDENTS_LIST_STORAGE_KEY)
    if(storedStudentList) {
      return JSON.parse(storedStudentList)
    }

    return []
  })

  const handleCreateStudent: SubmitHandler<CreateStudentFormData> = (newStudent: IStudents) => {
    const cpfAlreadyExists = studentsList.find(student => student.cpf === newStudent.cpf)

    if(cpfAlreadyExists) {
      window.alert(`O cpf: ${newStudent.cpf} já está cadastrado com outro aluno`)
      return
    }

    setStudentsList([...studentsList, newStudent])
  }

  function handleDeleteStudent(cpf: string) {
    const filteredStudents = studentsList.filter(student => student.cpf !== cpf)
    const confirm = window.confirm("Tem certeza que desaja excluir o cadastro do aluno?")

    if(confirm) {
      setStudentsList(filteredStudents)
    }
  }

  useEffect(() => {
    localStorage.setItem(STUDENTS_LIST_STORAGE_KEY ,JSON.stringify(studentsList))
  }, [studentsList])
  
  return (
    <StudentsListContext.Provider value={{
      handleCreateStudent, 
      studentsList,
      handleDeleteStudent
    }}>
      {children}
    </StudentsListContext.Provider>
  )
}

export function useStudentsList(): StudentsListContextType {
  const context = useContext(StudentsListContext)

  return context
}
