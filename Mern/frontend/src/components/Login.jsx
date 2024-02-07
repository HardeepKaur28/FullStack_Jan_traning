import React, { useState } from 'react';

const CombinedForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here (e.g., API call)
    if (isLogin) {
      console.log('Login:', formData);
      // Add login logic here (e.g., API call)
    } else {
      console.log('Sign Up:', formData);
      // Add sign-up logic here (e.g., API call)
    }
    // Reset the form after submission
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div className="container mt-5">
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>

      <p className="mt-3" onClick={toggleForm}>
        {isLogin ? 'Don’t have an account? Sign Up' : 'Already have an account? Login'}
      </p>
    </div>
  );
};

export default CombinedForm;
