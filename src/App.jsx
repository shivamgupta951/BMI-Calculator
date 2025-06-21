import Mainbox from "./components/Mainbox";
import backgroundImage from './assets/Image.jpg'; // adjust the path if needed

function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex justify-center items-center pt-24">
        <span className="bg-[#141414] tracking-wider text-3xl font-semibold flex justify-center px-20 p-2 items-center rounded-xl text-white border-4 border-purple-400 shadow-2xl shadow-yellow-300 transform transition-transform duration-300 ease-in-out hover:scale-90">
          BMI Calculator
        </span>
      </div>
      <div className="flex justify-center items-center pt-20">
        <Mainbox />
      </div>
    </div>
  );
}


export default App;
