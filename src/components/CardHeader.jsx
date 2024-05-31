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
