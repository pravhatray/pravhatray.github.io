

import About from './Components/Home/About';
import { Projects } from './Components/My_Blogs/Projects';
import Navbar from './Components/Navbar/Navbar';
import Tech from './Components/Tech_stack/Tech';


function App() {
  return (
    <div>
       <Navbar/>
       <About/>
      <Projects/>
    </div>
  );
}

export default App;