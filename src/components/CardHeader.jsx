import { useState } from 'react';

const CardHeader = () => {
  const [category, setCategory] = useState('All Categories');
  const [date, setDate] = useState('02.05.2021');
  const [status, setStatus] = useState('Status');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    // You can perform additional actions here if needed
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
    // You can perform additional actions here if needed
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
    // You can perform additional actions here if needed
  };

  return (
    <header className="card-header">
      <h4 className="card-title">Latest orders</h4>
      <div className="row align-items-center">
        <div className="col-md-3 col-12 me-auto mb-md-0 mb-3">
          <div className="custom_select">
            <select
              className="form-select select-nice"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="All Categories">All Categories</option>
              <option value="Women Clothing">Women Clothing</option>
              <option value="Mens Clothing">Men&apos;s Clothing</option>
              <option value="Cellphones">Cellphones</option>
              <option value="Computer & Office">Computer & Office</option>
              <option value="Consumer Electronics">Consumer Electronics</option>
              <option value="Jewelry & Accessories">Jewelry & Accessories</option>
              <option value="Home & Garden">Home & Garden</option>
              <option value="Luggage & Bags">Luggage & Bags</option>
              <option value="Shoes">Shoes</option>
              <option value="Mother & Kids">Mother & Kids</option>
            </select>
          </div>
        </div>
        <div className="col-md-2 col-6">
          <input
            type="date"
            value={date}
            className="form-control"
            onChange={handleDateChange}
          />
        </div>
        <div className="col-md-2 col-6">
          <div className="custom_select">
            <select
              className="form-select select-nice"
              value={status}
              onChange={handleStatusChange}
            >
              <option value="Status">Status</option>
              <option value="All">All</option>
              <option value="Paid">Paid</option>
              <option value="Chargeback">Chargeback</option>
              <option value="Refund">Refund</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CardHeader;
