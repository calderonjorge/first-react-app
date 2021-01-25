import { useState } from "react";
import { calcularTotal } from "../helpers";


const Form = (props) => {
  const { quantity, setQuantity, term, setTerm, setTotal, setLoading } = props;
  const [error, setError] = useState(false);

  function calculateLoan(e) {
    e.preventDefault();

    // Validacion
    if (quantity === 0 || term === "") {
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);

    setTimeout(() => {
      const total = calcularTotal(quantity, term);
      setTotal(total);
      setLoading(false);
    }, 3000);

  }

  function leerCantidad(e) {
    setQuantity(parseInt(e.target.value));
  }

  function leerTermino(e) {
    setTerm(parseInt(e.target.value));
  }

  return (
    <>
      <form onSubmit={calculateLoan}>
        <div className="row">
          <div>
            <label>Cantidad Prestamo</label>
            <input
              className="u-full-width"
              type="number"
              placeholder="Ejemplo: 3000"
              onChange={leerCantidad}
            />
          </div>
          <div>
            <label>Plazo para Pagar</label>
            <select
              className="u-full-width"
              onChange={leerTermino}
            >
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
          <div>
            <input
              type="submit"
              value="Calcular"
              className="button-primary u-full-width"
            />
          </div>
        </div>
      </form>
      {/* Se valida el error */}
      {(error) ? <p className='error'>Todos los campos son obligatorios</p> : null}
    </>
  )
}

export default Form
