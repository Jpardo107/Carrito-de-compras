import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Carrito = ({carrito}) => {
  return ( 
    <div>
      <h3>Carrito de compras</h3>
      {carrito.length > 0 ?
        carrito.map((producto, index) => {
          return (
            <Producto key={index}>
              <NombreProducto>
                {producto.nombre}
              </NombreProducto>
              Cantidad: {producto.cantidad}
            </Producto>
          )
        })
      :
        <p>Carrito vacio!!</p>
      }
    </div>
    
   );
}
 
const Producto = styled.div`
padding: 10px;
border-bottom: 1px solid #ebebf3;
`
const NombreProducto = styled.p`
font-weight: bold;
font-size: 16px;
color: #000;
`
const MapStateToProps = (estado) =>{
 return {carrito : estado.carrito} 
}
export default connect(MapStateToProps)(Carrito);