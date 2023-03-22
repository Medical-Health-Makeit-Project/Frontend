import { useState, useEffect } from 'react';
import { Button } from '@components/buttons';
import { toast } from 'react-toastify';
import './form.payment.scss';

const locations = {
  Colombia: ['Bogotá', 'Cali', 'Medellin', 'Bucaramanga', 'Pereira'],
  USA: ['New York', 'Los Angeles', 'Miami'],
  Mexico: ['CDMX', 'Guadalajara', 'Monterrey'],
  Argentina: ['Buenos Aires', 'Rosario'],
};

export const Form = () => {
  const [countrySelected, setCountrySelected] = useState('Colombia');
  const [citySelected, setCitySelected] = useState(locations.Colombia);
  const [userData, setUserData] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    idType: '',
    idNumber: '',
    country: 'Colombia',
    city: 'Bogota',
    address: '',
  });

  useEffect(() => {
    Object.entries(locations).map(([key, value]) => {
      if (key === countrySelected) return setCitySelected(value);
    });
  }, [countrySelected]);

  const handleSelectedCountry = (e) => {
    setCountrySelected(e.currentTarget.value);
    handleOnChange(e);
  };

  const handleOnChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (Object.values(userData).some((e) => e === ''))
      toast.error(`We can't send your products if you don't complete the form.`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    return toast.clearWaitingQueue();
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handlerSubmit}>
        <label className="label" htmlFor="name">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          minLength="3"
          pattern="[A-Za-z\s]{3,}"
          onChange={handleOnChange}
          placeholder="John"
        />
        <label className="label" htmlFor="lastname">
          Your lastname
        </label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          minLength="3"
          pattern="[A-Za-z\s]{3,}"
          onChange={handleOnChange}
          placeholder="Doe"
        />
        <label className="label" htmlFor="email">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
          placeholder="john@doe.com"
          onChange={handleOnChange}
        />
        <label className="label" htmlFor="phone">
          Your Phone
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$"
          onChange={handleOnChange}
          placeholder="321 678 7878"
        />
        <label className="label" htmlFor="idType">
          Identification Type
        </label>
        <select className="select" name="idType" id="idType" onChange={handleOnChange}>
          <option value="ID">ID</option>
          <option value="passport">Passport</option>
        </select>
        <label className="label" htmlFor="idNumber">
          Identification Number
        </label>
        <input
          type="text"
          id="idNumber"
          name="idNumber"
          pattern="[0-9]+{5,10}"
          onChange={handleOnChange}
          placeholder="0000000000"
        />
        <label className="label" htmlFor="country">
          Your Country
        </label>
        <select className="select" name="country" id="country" onChange={handleSelectedCountry}>
          {Object.keys(locations).map((e) => {
            return (
              <option value={e} key={e}>
                {e}
              </option>
            );
          })}
        </select>
        <label className="label" htmlFor="city">
          Your City
        </label>
        <select className="select" name="city" id="city" onChange={handleOnChange}>
          {citySelected.map((city) => {
            return (
              <option value={city} key={city}>
                {city}
              </option>
            );
          })}
        </select>
        <label className="label" htmlFor="address">
          Your Address
        </label>
        <input type="text" id="address" name="address" onChange={handleOnChange} />
        <Button type="submit" color="danger" className="button-checkout">
          Place order
        </Button>
      </form>
    </div>
  );
};
