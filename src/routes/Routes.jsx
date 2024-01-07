import { Routes as ReactDomRoutes, Route } from "react-router-dom";

import Checkout from "../pages/Checkout/Checkout";
import Felicitaciones from "../pages/Felicitaciones/Felicitaciones";
import Home from "../pages/Home/Home";
import SobreNosotros from "../pages/SobreNosotros/SobreNosotros";
import ProductosRoutes from "../pages/ProductosRoutes/ProductosRoutes";
import ContactoDatos from "../pages/ContactoDatos/ContactoDatos";

import Login from "../pages/Login/Login";
import MisOrdenes from "../pages/MisOrdenes/MisOrdenes";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Register from "../pages/Register/Register";
import Resumen from "../pages/Resumen/Resumen";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Checkout2 from "../pages/Checkout2/Checkout2";
import Gracias from "../pages/Gracias/Gracias";

function Routes() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/sobrenosotros" element={<SobreNosotros />} />
      <Route path="/productosroutes" element={<ProductosRoutes />} />
      <Route path="/datos" element={<Checkout2 />} />
      <Route path="/gracias" element={<Gracias />} />



      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/mis-ordenes" element={<MisOrdenes />} />
      <Route path="/felicitaciones" element={<Felicitaciones />} />
      <Route path="/resumen/:orderId" element={<Resumen />} />

      {/* <Route path="/checkout" element={<Checkout />} /> */}

      <Route
        path="/checkout"
        element={
          <ProtectedRoute redirectTo='/login' >
            <Checkout />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<PageNotFound />} />
    </ReactDomRoutes>
  );
}

export default Routes;
