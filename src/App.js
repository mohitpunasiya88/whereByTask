import logo from './logo.svg';
import './App.css';
import NavBar from './component/navBar';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Build_first from './component/build_first';
import SecondPage from './component/Industries';
import ThirdPage from './component/third_com';
import Pakang from './component/pakang';
import Companies from './component/companies';
import Delightfull from './component/delightful';
import Testimonial from './component/testimonial';
import GetStarted from './component/getStart';
import Footer from './component/footer';

function App() {
  return (
        <>
          <NavBar/>

          <Build_first/>
          <Pakang/>
          <Companies/>
          <SecondPage/>
          <ThirdPage/>
          <Delightfull/>
          <Testimonial/>
          <GetStarted/>
          <Footer/>
        </>
  );
}

export default App;
