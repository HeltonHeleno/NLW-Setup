import './styles/global.css'
import { Header } from './components/Header'
import { SammaryTable } from './components/SammaryTable'

//import {  Habitat } from './components/Habit'

export function App(): JSX.Element {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-full max-w-5xl px-6 flex flex-col gap-16'>
        
          <Header />
          <SammaryTable />
        </div>      
    </div>
  )
}


