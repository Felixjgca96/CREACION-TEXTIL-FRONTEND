import { useRef } from "react";
import Categorias from "../../components/Categorias/Categorias";
import Hero from "../../components/Hero/Hero";
import CardsProductos from "../../components/Productos/CardsProductos";
import CardsRecomendacion from "../../components/Recomendados/CardsRecomendacion";
import Contacto from "../../components/Contacto/Contacto";

import {
  CategoriasWrapper,
  HomeWrapper,
  ProductosWrapper,
  RecomendadosWrapper,
} from "./HomeStyles";

function Home() {
  const productsRef = useRef();

  const doScroll = () => {    
    window.scrollTo(
      productsRef.current.getBoundingClientRect().x,
      productsRef.current.getBoundingClientRect().y - 25
    )
  }

  return (
    <HomeWrapper>
      {/* Hero Section */}

      <Hero doScroll={doScroll} />

      {/* Recomendados Section */}
      <RecomendadosWrapper>
        <h3>Productos Destacados</h3>
        <CardsRecomendacion />
      </RecomendadosWrapper>

      {/* Categorias Section */}


      {/* Productos Section*/}

      <Contacto />

    </HomeWrapper>
  );
}

export default Home;
