import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const options = ['Accordion', 'Wikipedia', 'Youtube'];

const Dropdown = () => {
  const [active, setActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select Me');
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setActive(false);
    };

    document.body.addEventListener('click', onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener('click', onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderOptions = options.map((option) => {
    const href = option.toLowerCase();
    if (option === selectedOption) {
      return null;
    }

    return (
      <li key={option} onClick={() => setSelectedOption(option)}>
        <Link className="dropdown-item" to={`/${href}`}>
          {option}
        </Link>
      </li>
    );
  });

  return (
    <div className="collapse navbar-collapse">
      <ul ref={ref} className="navbar-nav" onClick={() => setActive(!active)}>
        <li className="nav-item dropdown">
          <div
            style={{ cursor: 'pointer' }}
            className="nav-link dropdown-toggle"
          >
            {selectedOption}
          </div>
          <ul
            className={`${
              active ? 'show' : ''
            } dropdown-menu dropdown-menu-dark`}
          >
            {renderOptions}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
