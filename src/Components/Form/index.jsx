import React, { useState } from "react";
import './Contact.css';

const FormSection = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Valid Email is required";
        if (!formData.phone.match(/^(030|031|032|033|034)\d{8}$/)) newErrors.phone = "Enter a valid 11-digit Pakistani phone number (Jazz, Telenor, Ufone, Zong, Onic)";
        if (!formData.subject.trim()) newErrors.subject = "Subject is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Form submitted successfully!");
        }
    };

    return (
        <div className="parent-contact">
            <div className="container-fluid align-ment-horizontal">
                <div className="contact-section">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="contact-left d-flex flex-column">
                                <div>
                                    <h2 className="contact-heading">
                                        Give the Gift of Life,
                                        <br />
                                        Become a Donor.
                                    </h2>
                                    <p className="contact-text">
                                        Orglink is a generous act that can save and improve lives. Join our mission to make a difference by registering as an organ donor today.
                                    </p>
                                </div>
                                <div className="contact-info">
                                    <div className="contact-address">
                                        <p>
                                            1234 Hope Street,
                                            <br />
                                            Life City, USA 56789
                                        </p>
                                    </div>
                                    <ul className="contact-details">
                                        <li>support@orglink.org</li>
                                        <li>+123-456-7890</li>
                                        <li>Mon-Fri: 9:00am - 5:00pm</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="contact-form">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <label className="form-label">First Name</label>
                                            <input type="text" name="firstName" className="form-control" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                                            {errors.firstName && <p className="error-text">{errors.firstName}</p>}
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label className="form-label">Last Name</label>
                                            <input type="text" name="lastName" className="form-control" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
                                            {errors.lastName && <p className="error-text">{errors.lastName}</p>}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <label className="form-label">Email Address</label>
                                            <input type="email" name="email" className="form-control" placeholder="Email Address" value={formData.email} onChange={handleChange} />
                                            {errors.email && <p className="error-text">{errors.email}</p>}
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label className="form-label">Phone Number</label>
                                            <input type="tel" name="phone" className="form-control" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                                            {errors.phone && <p className="error-text">{errors.phone}</p>}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Subject</label>
                                        <input type="text" name="subject" className="form-control" placeholder="Subject" value={formData.subject} onChange={handleChange} />
                                        {errors.subject && <p className="error-text">{errors.subject}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Message</label>
                                        <textarea name="message" className="form-control" placeholder="How can we assist you in organ donation?" value={formData.message} onChange={handleChange} />
                                        {errors.message && <p className="error-text">{errors.message}</p>}
                                    </div>
                                    <button type="submit" className="btn-send">
                                        Submit Inquiry
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormSection;