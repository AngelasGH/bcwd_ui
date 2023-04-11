//import { Button } from 'react-bootstrap';
// import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';

// News & Advisories
import BcwdNews from './pages/news_advisory/BcwdNews';
import ServiceAdvisories from './pages/news_advisory/ServiceAdvisories';
import WaterQualityResult from './pages/news_advisory/WaterQualityResult';
import DonorUpdates from './pages/news_advisory/DonorUpdates';

// Bills & Payments
import BillsPaymentPartners from './pages/bills_payments/BillsPaymentPartners';
import BillCalculator from "./pages/bills_payments/BillCalculator";

// Company
import AboutUs from './pages/company/AboutUs';
import Bidding from './pages/company/Bidding';
import Transparency from './pages/company/Transparency';

// Contact Us
import ContactUs from './pages/contact_us/ContactUs';
import Faqs from './pages/contact_us/Faqs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Layout />}>
            <Route index element={ <Home />} />

            {/* News & Advisories */}
            <Route path='bcwdnews' element={ <BcwdNews/> } />
            <Route path='serviceadvisories' element={ <ServiceAdvisories/> } />
            <Route path='waterqualityresult' element={ <WaterQualityResult/> } />
            <Route path='donorupdates' element={ <DonorUpdates /> } />

            {/* Bills & Payments */}
            <Route path='billspaymentpartners' element={ <BillsPaymentPartners/> } />
            <Route path='billcalculator' element={ <BillCalculator/> } />

            {/* Company */}
            <Route path='aboutus' element={ <AboutUs/> } />
            <Route path='bidding' element={ <Bidding/> } />
            <Route path='transparency' element={ <Transparency/> } />
            
            {/* Contact Us */}
            <Route path='contactus' element={ <ContactUs/> } />
            <Route path='faqs' element={ <Faqs/> } />
            
            {/* error handler */}
            <Route path='*' element={ <NoPage/> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;