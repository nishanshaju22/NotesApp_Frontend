import BottomSection from "./Componets/BottomSection";
import TopSection from "./Componets/TopSection";
// import { getNotes } from "./Services/notes_services";


function App() {

  // getNotes().then(data => console.log(data))

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="h-[45%] w-full flex flex-col items-center justify-center sticky top-0 left-0  border-b border-gray-500 bg-black">
        <TopSection />
      </div>
      <div className="h-[55%] w-full flex flex-col items-center justify-center">
        <BottomSection />
      </div>
    </main>
  );
}

export default App;
