import Main from "./pages/Main";
import Nav from "./pages/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppProvider } from "./context/context";
import CreateNote from "./pages/NoteForm";

function App() {
  return (
    <div id="app" style={{ display: "flex" }} >
      <BrowserRouter>
        <header className="min-h-screen w-header bg-header border-solid border-r-2 border-gray-200 transition-all
                           sm:!w-16 md:w-60">
          <Nav />
        </header>
        <AppProvider>
          <main className="flex-1 h-screen overflow-y-scroll">
            <Routes>
              <Route index path="/" element={<Main />} />
              <Route path="/:tag" element={<Main />} />
              <Route path="/create" element={<CreateNote />} />
              <Route path="/edit/:tag" element={<CreateNote />} />
            </Routes>
          </main>
        </AppProvider>
      </BrowserRouter>
    </div>

  );
}

export default App;
