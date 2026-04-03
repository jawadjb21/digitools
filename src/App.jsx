import './App.css'
import Banner from './components/header/banner/Banner';
import CompanyInfo from './components/header/comapnyInfo/CompanyInfo';
import Navbar from './components/header/navbar/Navbar'

const fetchNavLinks = async () => {
  const navLinksRes = await fetch("/navLinks.json");
  const navLinksJSON = await navLinksRes.json();
  return navLinksJSON;
};

const navLinksPromise = fetchNavLinks();

const fetchCompanyInfo = async () => {
  const companyInfoRes = await fetch("/comapnyInfo.json");
  const companyInfoJSON = await companyInfoRes.json();
  return companyInfoJSON;
};

const companyInfoPromise = fetchCompanyInfo();

function App() {

  return (
    <>
      <header className='my-2.5 text-center px-5'>
        <Navbar navLinksPromise={navLinksPromise}></Navbar>
        <Banner></Banner>
        <CompanyInfo companyInfoPromise={companyInfoPromise}></CompanyInfo>
      </header>
    </>
  )
}

export default App
