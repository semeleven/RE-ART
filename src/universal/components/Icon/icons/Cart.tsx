import React from "react"

const Cart = props => (
	<svg
		viewBox="0 0 20 20"
		style={{ fill: '#fff' }}
		{...props}
	>
		<path
			fill="#FFF"
			d="M18 17.987V7H2v11l16-.013zM4.077 5A5.996 5.996 0 0 1 10 0c2.973 0 5.562 2.162 6.038 5H20v14.986L0 20V5h4.077zm9.902-.005C13.531 3.275 11.86 2 10 2 8.153 2 6.604 3.294 6.144 4.995c.92 0 7.654.03 7.835 0z"
		/>
	</svg>
);

export default Cart;
