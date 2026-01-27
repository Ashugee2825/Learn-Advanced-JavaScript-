
import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './Components/FunctionalComponent/FunctionalComponent';
import ClassComponent from './Components/ClassComponent/ClassComponent';
import AnimalCard from './Components/AnimalCard/AnimalCard';
import './Data/Data';
 
function App() {
  return(
   <div>
    <FunctionalComponent/>
    <ClassComponent/>
    <AnimalCard/>
    </div>
  );
}
export default App;
