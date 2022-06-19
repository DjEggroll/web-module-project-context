import React, { useContext } from 'react';

import ProductContext from './../contexts/ProductContext';

// Components
import Product from './Product';

const Products = props => {
	const values = useContext(ProductContext);
	console.log('values', values);

	return (
		<div className="products-container">
			{values.products.map(product => (
				<Product
					key={product.id}
					product={product}

				/>
			))}
		</div>
	);
};

export default Products;
