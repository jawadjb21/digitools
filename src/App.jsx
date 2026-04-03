import './App.css'
import Banner from './components/header/banner/Banner';
import Navbar from './components/header/navbar/Navbar'

const fetchNavLinks = async () => {
  const navLinksRes = await fetch("/navLinks.json");
  const navLinksJSON = await navLinksRes.json();
  return navLinksJSON;
}

const navLinksPromise = fetchNavLinks();

function App() {

  return (
    <>
      <header className='my-2.5 text-center px-5'>
        <Navbar navLinksPromise={navLinksPromise}></Navbar>
        <Banner></Banner>
      </header>
    </>
  )
}

export default App
