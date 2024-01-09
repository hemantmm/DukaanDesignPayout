import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function App() {
  return (
   <>
    <div className='flex home'>
      <Sidebar />
      <Navbar />
    </div>
   </>
  );
}

export default App;
