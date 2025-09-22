import { useState, useEffect } from 'react';
import HEader from '../../componets/Header/HEader';
import './home.css';
import { Link } from 'react-router-dom';

function Contact() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('Most popular');

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=50')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
      });
  }, []);

  const filtered = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sorted = [...filtered];
  if (sortOption === 'Cheap') {
    sorted.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'Expensive') {
    sorted.sort((a, b) => b.price - a.price);
  } else if (sortOption === 'Most popular') {
    sorted.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div>
      <HEader />
      <main>
        <div className="container">
          <div className="box">
            {sorted.map((card, i) => (
              <Link to={`/promts/${card.id}`} key={i}>
                <div className="card">
                  <img className="img" src={card.images[0]} alt={card.title} />

                  <div className="rating">
                    {[...Array(5)].map((_, starIndex) => (
                      <i key={starIndex} className="fa-solid fa-star"></i>
                    ))}
                    <h4 className="rat">({card.rating || 'N/A'})</h4>
                  </div>

                  <h2>{card.title.slice(0, 20)}</h2>
                  <p>{card.description.slice(0, 50)}</p>
                  <h2 className="cost">${card.price}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
