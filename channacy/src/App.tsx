import './App.css'
import Navbar from './components/Navbar'
import { Suspense } from "solid-js";

function App(props: any) {
  return (
    <>
    <div class="flex">
     <Navbar/>
     <div class="flex-1 h-screen overflow-y-scroll custom-scroll">
          <Suspense>{props.children}</Suspense>
        </div>
     </div>
    </>
  )
}

export default App
