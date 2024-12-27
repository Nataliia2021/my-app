import React, { useState } from 'react';

import './Form.css';
const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [whyAdopt, setWhyAdopt] = useState('');
  const submit = (e) => {
    e.preventDefault();
    if (firstName.length === 0 || lastName.length === 0) {
      alert("Name can't be empty!");
    } else if (email.length === 0) {
      alert('Please provide a valid Email ID!');
    } else if (whyAdopt.length === 0) {
      alert('Please provide an answer!');
    } else {
      alert('Form submitted!');
    }
  };
  return (
    <>
      <div className="ContactUs-main">
        <h2 className="heading"> Feel free to contact us !</h2>
      </div>
      <div className="separator">
        <div className="form">
          <form onSubmit={submit}>
            <div className="main">
              <p> FILL YOUR DETAILS HERE. </p>
              <div className="input-fields">
                <input
                  type="text"
                  placeholder="Enter your first name"
                  onChange={(e) => setFirstName(e.target.value)}
                  name="fName"
                />
                <input
                  type="text"
                  placeholder="Enter your last name"
                  name="lName"
                  onChange={(e) => setLastName(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Enter your email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Enter why you want to adopt a pet"
                  name="whyAdopt"
                  onChange={(e) => setWhyAdopt(e.target.value)}
                />
                <button className="submit-Button" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="guide">
          <div className="guide-head"> A guide to adoption:</div>

          <div className="list">
            <ul>
              <li>
                Rehoming or donating your pet should be easy and stress-free
                both for you and your pet.
              </li>
              <li>
                We have created a reliable, simple & free initiative to help you
                rehome your pet from your loving family directly to another
                family.
              </li>
              <li>
                Make your pet look more attractive to potential new owners. Make
                sure your pet is vaccinated and checked by a veterinarian.{' '}
              </li>
              <li>
                Be transparent/clear with the new owner. Share all the details
                about your pet's personality.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-text"> @2024| my final project</div>
    </>
  );
};
export default Form;
