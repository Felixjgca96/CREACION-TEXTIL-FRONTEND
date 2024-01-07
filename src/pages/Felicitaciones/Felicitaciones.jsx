import { useNavigate } from 'react-router-dom';

import Button from '../../components/UI/Button/Button';

import {
  ContainerInfoStyled,
  PatternStyled,
  TextStyled,
  TitleStyled,
} from './FelicitacionesStyled';

const Felicitaciones = () => {
  const navigate = useNavigate();
  return (
    <div>
      <TextStyled>      <img src="./gracias.png" alt="" className="imgGracias" />

       
        <ContainerInfoStyled>
          <TitleStyled>¡Tu pedido fué realizado con exito!</TitleStyled>
          <p></p>
        </ContainerInfoStyled>
        <Button onClick={() => navigate('/mis-ordenes')}>Ir a mis ordenes</Button>
      </TextStyled>

    </div>
  );
};

export default Felicitaciones;
