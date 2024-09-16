import React, { useState } from 'react';

const Accordion = () => {
  // Managing state for which accordion is open
  const [openItem, setOpenItem] = useState(null);

  // Handler to toggle an accordion item
  const toggleItem = (index) => {
    if (openItem === index) {
      setOpenItem(null); // Close if clicked again
    } else {
      setOpenItem(index); // Open the clicked item
    }
  };

  const accordionData = [
    {
      question: "Is there a free trial available?",
      answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time."
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel at any time without any penalties."
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Yes, you can add additional information like PO numbers, tax information, etc."
    },
    {
      question: "How does billing work?",
      answer: "Billing is done on a monthly or yearly basis depending on the plan you choose."
    },
    {
      question: "How do I change my account email?",
      answer: "You can change your account email in the account settings."
    }
  ];

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      {accordionData.map((item, index) => (
        <div key={index} style={{ marginBottom: '10px', borderBottom: '1px solid #ccc' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px',
              cursor: 'pointer',
              backgroundColor: openItem === index ? '#f5f5f5' : '#fff',
              color: openItem === index ? '#333' : '#000',
            }}
            onClick={() => toggleItem(index)}
          >
            <h3 style={{ margin: 0 }}>{item.question}</h3>
            <span>{openItem === index ? '−' : '+'}</span>
          </div>
          {openItem === index && (
            <div style={{ padding: '10px', backgroundColor: '#f9f9f9', color: '#666' }}>
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
