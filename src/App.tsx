import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Intro } from "./components/Intro"
import { Register } from "./components/Register"
import { StudentTable } from "./components/StudentTable"
import { Tip1 } from "./components/Tip1"
import { Tip2 } from "./components/Tip2"

export function App() {

  return (
    <>
      <Header />
      <Intro />
      <Tip1 />
      <Tip2 />
      <Register />
      <StudentTable />
      <Footer />
    </>
  )
}
