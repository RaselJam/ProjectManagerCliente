import Login from './Components/Auth/Login/Login';
import Signup from './Components/Auth/Signup/Signup';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';

const mockUser ={userName:"userTest", img:"https://i.pinimg.com/736x/3a/59/42/3a59424288c02e82234909d6404260b2--character-designer-digital-art.jpg"}
function App() {
  return (
    <div className="app-container">
      <Navbar user={mockUser} />
      <div className="app-content">
        <Sidebar  />


      </div>

    </div>
  );
}

export default App;
