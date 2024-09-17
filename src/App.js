import './Assets/Style/Style.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
        <Header/>
        <Home/>
        <Footer/>
    </div>
  );
}

export default App;
