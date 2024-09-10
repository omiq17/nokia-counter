import logo from "./logo.svg";
import "./App.css";
import Counter from "../features/counter";

function App() {
  return (
    <div className='flex flex-col h-screen'>
      <header className='bg-blue-600 text-white p-4 flex items-center h-[10vh] md:h-[12vh]'>
        <img
          src='https://via.placeholder.com/40' // Replace with your logo URL
          alt='Logo'
          className='mr-4'
        />
        <h1 className='text-xl font-bold'>Counter</h1>
      </header>
      <Counter />
    </div>
  );
}

export default App;
