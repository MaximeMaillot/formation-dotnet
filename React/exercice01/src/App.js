import "./App.css"
import ContainerComponent from "./Component/ContainerComponent";
import FooterComponent from "./Component/FooterComponent";
import HeaderComponent from "./Component/HeaderComponent";

function App() {
  return (
    <div className="app">
      <HeaderComponent />
      <ContainerComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
