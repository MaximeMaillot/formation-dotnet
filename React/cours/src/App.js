import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Banner from './components/BannerComponent/Banner';
import Footer from './components/FooterComponent/Footer';
import NavBar from './components/NavBarComponent/NavBar';

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <NavBar></NavBar>
      <Footer></Footer>
    </div>
  );
}

export default App;
