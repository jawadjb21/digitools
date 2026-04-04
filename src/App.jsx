import { Suspense, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css'
import Banner from './components/header/banner/Banner';
import CompanyInfo from './components/header/companyInfo/CompanyInfo';
import Navbar from './components/header/navbar/Navbar'
import Products from './components/main/products/Products';
import Steps from './components/main/steps/Steps';
import Subscriptions from './components/main/pricing/Subscriptions';

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

const fetchProducts = async () => {
  const productsRes = await fetch("/products.json");
  const productsJSON = await productsRes.json();
  return productsJSON;
}

const productsPromise = fetchProducts();


const fetchSteps = async () => {
  const stepsRes = await fetch("/steps.json")
  const stepsJSON = await stepsRes.json();
  return stepsJSON;
}

const stepsPromise = fetchSteps();

const fetchSubscriptions = async () => {
  const subscriptionsRes = await fetch("/subscriptions.json");
  const subcriptionsJSON = await subscriptionsRes.json();
  return subcriptionsJSON;
}

const subscriptionsPromise = fetchSubscriptions();


function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedSubscriptions, setSelectedSubscriptions] = useState([]);
  return (
    <>
      <header>
        <Navbar navLinksPromise={navLinksPromise} selectedProducts={selectedProducts}></Navbar>
        <Banner></Banner>
        <CompanyInfo companyInfoPromise={companyInfoPromise}></CompanyInfo>
      </header>

      <main>
        <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
          <Products productsPromise={productsPromise} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}></Products>
          <ToastContainer />
        </Suspense>

        <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
          <Steps stepsPromise={stepsPromise}></Steps>
        </Suspense>

        <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
          <Subscriptions subscriptionsPromise={subscriptionsPromise} selectedSubscriptions={selectedSubscriptions} setSelectedSubscriptions={setSelectedSubscriptions}></Subscriptions>
        </Suspense>
      </main>

      <footer>

      </footer>
    </>
  )
}

export default App
