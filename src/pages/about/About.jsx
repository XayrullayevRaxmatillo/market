import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HEader from '../../componets/Header/HEader';
import './about.css';
useParams
function About() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
      })
      .catch(err => {
        console.error('Error fetching product:', err);
      });
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <HEader />
      <Link to="/"><button className='btn'>Orqaga qaytish</button></Link>

      <div className="ota">
        <img src={product.images[0]} alt={product.title} />
        <div className="card">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: ⭐ {product.rating}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
