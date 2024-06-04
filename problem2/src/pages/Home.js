import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import placeholderImage from '../images/placeholder.jpg'; 
function Home() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    company: '',
    category: '',
    rating: '',
    minPrice: '',
    maxPrice: '',
    availability: ''
  });
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, [filters, sort, page]);

  const fetchProducts = async () => {
    try {
      const response = await axios.post('http://localhost:3001/getProducts', {
        ...filters,
        sort,
        page
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products', error);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const handlePageChange = (direction) => {
    setPage(page + direction);
  };

  return (
    <div className="container">
      <h1 className="my-4">Top Products</h1>
      <div className="filters mb-3">
        <div className="row">
          <div className="col">
            <select className="form-control" name="company" onChange={handleFilterChange}>
              <option value="">Select Company</option>
              <option value="AMZ">AMZ</option>
              <option value="FLP">FLP</option>
              <option value="SNP">SNP</option>
              <option value="MYN">MYN</option>
              <option value="AZO">AZO</option>
            </select>
          </div>
          <div className="col">
            <select className="form-control" name="category" onChange={handleFilterChange}>
              <option value="">Select Category</option>
              <option value="Phone">Phone</option>
              <option value="Computer">Computer</option>
              <option value="TV">TV</option>
              <option value="Earphone">Earphone</option>
              <option value="Tablet">Tablet</option>
              <option value="Charger">Charger</option>
              <option value="Mouse">Mouse</option>
              <option value="Keypad">Keypad</option>
              <option value="Bluetooth">Bluetooth</option>
              <option value="Pendrive">Pendrive</option>
              <option value="Remote">Remote</option>
              <option value="Speaker">Speaker</option>
              <option value="Headset">Headset</option>
              <option value="Laptop">Laptop</option>
              <option value="PC">PC</option>
            </select>
          </div>
          <div className="col">
            <input className="form-control" type="number" name="rating" placeholder="Rating" onChange={handleFilterChange} />
          </div>
          <div className="col">
            <input className="form-control" type="number" name="minPrice" placeholder="Min Price" onChange={handleFilterChange} />
          </div>
          <div className="col">
            <input className="form-control" type="number" name="maxPrice" placeholder="Max Price" onChange={handleFilterChange} />
          </div>
          <div className="col">
            <select className="form-control" name="availability" onChange={handleFilterChange}>
              <option value="">Availability</option>
              <option value="in_stock">In Stock</option>
              <option value="out_of_stock">Out of Stock</option>
            </select>
          </div>
          <div className="col">
            <select className="form-control" name="sort" onChange={handleSortChange}>
              <option value="">Sort By</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
              <option value="discount">Discount</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={placeholderImage} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.company}</p>
                <p className="card-text">${product.price}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button className="btn btn-secondary" onClick={() => handlePageChange(-1)} disabled={page === 1}>Previous</button>
        <button className="btn btn-secondary" onClick={() => handlePageChange(1)}>Next</button>
      </div>
    </div>
  );
}

export default Home;
