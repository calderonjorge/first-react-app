import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Message from "./components/Message";
import Result from "./components/Result";
import Spinner from "./components/Spinner";


function App() {
	//Definir el state
	const [quantity, setQuantity] = useState(0);
	const [term, setTerm] = useState("");
	const [total, setTotal] = useState(0);
	const [loading, setLoading] = useState(false);


	let component;
	if (loading) {
		component = <Spinner />
	} else if (total === 0) {
		component = <Message />;
	} else {
		component = <Result total={total} term={term} quantity={quantity} />;
	}

	return (
		<>
			<Header titulo="Cotizador de prestamos" />
			<div className="container">
				<Form quantity={quantity} setQuantity={setQuantity} term={term} setTerm={setTerm} total={total} setTotal={setTotal} setLoading={setLoading} />
				<div className='mensajes'>
					{/* {(total === 0) ? <Message /> : <Result total={total} term={term} quantity={quantity} />} */}
					{component}
				</div>

			</div>
		</>
	);
}

export default App;
