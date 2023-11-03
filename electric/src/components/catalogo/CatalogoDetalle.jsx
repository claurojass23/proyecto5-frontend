import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

function CatalogoDetalle() {
  useEffect(() => {
    Swal.fire("Estamos en mantenimiento. Por ahora, no hay detalles del producto. Vuelva al inicio.");
  }, []); 

  return (
    <>
      
    </>
  );
}

export default CatalogoDetalle;
