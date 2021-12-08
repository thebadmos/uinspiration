import Design from './component/Design';
import SectionOne from './component/SectionOne';
import SectionTwo from './component/SectionTwo';
import SectionThree from './component/SectionThree';

import Navbar from './component/Navbar';
import './scss/index.scss';


function App() {
  return (
    <div>
     <Navbar/>
     <Design/>
     <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
   
   
    </div>
  );
}
export default App;
