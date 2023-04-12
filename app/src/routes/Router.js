import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { Detalhes } from "../Pages/Detalhes/Detalhes";
import { Pokedex } from "../Pages/Pokedex/Pokedex";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/detalhes/:name" element={<Detalhes />} />
        <Route path="/pokedex/" element={<Pokedex />} />
      </Routes>
    </BrowserRouter>
  );
};
