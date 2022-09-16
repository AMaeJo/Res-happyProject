import "./App.css";
import Main from "./view/Main";
import GetAll from "./components/all_recipes";
import GetOne from "./components/show_recipe";
import Edit from "./components/edit_recipe";
import CreateRecipe from "./components/new_recipe";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/recipe/new" element={<CreateRecipe/>} />
              <Route path="/recipe/all" element={<GetAll/>}/> 
              <Route path="/recipe/:id" element={<GetOne/>}/> 
              <Route path="/recipe/edit/:id" element={<Edit/>}/> 
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
