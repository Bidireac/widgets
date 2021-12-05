import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onItemClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const renderItems = items.map((item, index) => {
    return (
      <div
        className="accordion-item"
        key={item.title}
        onClick={() => onItemClick(index)}
      >
        <h2 className="accordion-header">
          <button
            className={`${
              index === activeIndex ? '' : 'collapsed'
            } accordion-button`}
            type="button"
          >
            {item.title}
          </button>
        </h2>
        <div
          className={`${
            index === activeIndex ? 'show' : ''
          } accordion-collapse collapse`}
        >
          <div className="accordion-body">
            <strong>{item.content}</strong>
          </div>
        </div>
      </div>
    );
  });

  return <div className="accordion">{renderItems}</div>;
};

export default Accordion;
