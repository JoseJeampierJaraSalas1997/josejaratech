import React from 'react';
import { useRouter } from 'next/router';

const ProductoPage: React.FC = () => {
  const { query } = useRouter();
  const { id } = query;

  return (
    <div>
      <h1>Producto: {id}</h1>
      <p>Detalles del producto con ID: {id}</p>
    </div>
  );
}

export default ProductoPage;
