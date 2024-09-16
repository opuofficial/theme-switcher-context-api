import Card from "./components/Card";
import Navbar from "./components/Navbar";
import ThemeProvider from "./provider/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <div className="h-screen flex items-center justify-center dark:bg-slate-700">
        <Navbar />
        <Card />
      </div>
    </ThemeProvider>
  );
}

export default App;
