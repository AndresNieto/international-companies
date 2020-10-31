import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
    return ( 
        <div className="d-flex p-2 justify-content-center align-items-center contact-container">
            <ContactForm />
        </div>       
     );
}

Contact.propTypes = {};
export default Contact;