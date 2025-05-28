import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import './Contact.css';

const FormSection = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        whatsappNumber: "",
        usePhoneForWhatsapp: false,
        subject: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [dots, setDots] = useState("");

    // Create animated dots for loading state
    useEffect(() => {
        let interval;
        if (isLoading) {
            interval = setInterval(() => {
                setDots(prevDots => {
                    if (prevDots.length >= 3) return "";
                    return prevDots + ".";
                });
            }, 500);
        }
        return () => clearInterval(interval);
    }, [isLoading]);

    // Handle checkbox for using same number for WhatsApp
    useEffect(() => {
        if (formData.usePhoneForWhatsapp) {
            setFormData(prev => ({
                ...prev,
                whatsappNumber: prev.phone
            }));
        }
    }, [formData.usePhoneForWhatsapp, formData.phone]);

    const validatePakistaniNumber = (number) => {
        // Validation for Pakistani phone numbers by network
        const jazzPattern = /^(0301|0302|0303|0304|0305|0306|0307|0308|0309)\d{7}$/; // Jazz
        const telenorPattern = /^(0340|0341|0342|0343|0344|0345|0346|0347|0348|0349)\d{7}$/; // Telenor
        const ufonePattern = /^(0330|0331|0332|0333|0334|0335|0336|0337)\d{7}$/; // Ufone
        const zongPattern = /^(0310|0311|0312|0313|0314|0315|0316|0317|0318|0319)\d{7}$/; // Zong
        const onicPattern = /^(0320|0321|0322|0323|0324|0325)\d{7}$/; // Onic

        return (
            jazzPattern.test(number) || 
            telenorPattern.test(number) || 
            ufonePattern.test(number) || 
            zongPattern.test(number) || 
            onicPattern.test(number)
        );
    };

    const getNetworkFromNumber = (number) => {
        if (!number) return "";
        
        const prefixes = {
            Jazz: ["0301", "0302", "0303", "0304", "0305", "0306", "0307", "0308", "0309"],
            Telenor: ["0340", "0341", "0342", "0343", "0344", "0345", "0346", "0347", "0348", "0349"],
            Ufone: ["0330", "0331", "0332", "0333", "0334", "0335", "0336", "0337"],
            Zong: ["0310", "0311", "0312", "0313", "0314", "0315", "0316", "0317", "0318", "0319"],
            Onic: ["0320", "0321", "0322", "0323", "0324", "0325"]
        };
        
        const prefix = number.substring(0, 4);
        
        for (const [network, networkPrefixes] of Object.entries(prefixes)) {
            if (networkPrefixes.includes(prefix)) {
                return network;
            }
        }
        
        return "Unknown";
    };

    const formatWhatsAppNumber = (number) => {
        // Remove the leading zero and add country code for Pakistan
        if (number && number.startsWith('0')) {
            return `92${number.substring(1)}`;
        }
        return number;
    };

    const validate = () => {
        let newErrors = {};
        
        // First Name validation - only letters and at least 2 characters
        if (!formData.firstName.trim()) {
            newErrors.firstName = "First Name is required";
        } else if (!/^[A-Za-z]{2,}$/.test(formData.firstName.trim())) {
            newErrors.firstName = "First Name must contain only letters and be at least 2 characters";
        }
        
        // Last Name validation - only letters and at least 2 characters
        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last Name is required";
        } else if (!/^[A-Za-z]{2,}$/.test(formData.lastName.trim())) {
            newErrors.lastName = "Last Name must contain only letters and be at least 2 characters";
        }
        
        // Email validation - proper email format
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }
        
        // Phone validation - Pakistani phone numbers
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!validatePakistaniNumber(formData.phone)) {
            newErrors.phone = "Enter a valid Pakistani phone number (e.g., 03012345678)";
        }
        
        // WhatsApp validation - Pakistani phone numbers
        if (!formData.usePhoneForWhatsapp && !formData.whatsappNumber.trim()) {
            newErrors.whatsappNumber = "WhatsApp number is required";
        } else if (!formData.usePhoneForWhatsapp && !validatePakistaniNumber(formData.whatsappNumber)) {
            newErrors.whatsappNumber = "Enter a valid Pakistani WhatsApp number (e.g., 03012345678)";
        }
        
        // Subject validation - at least 5 characters
        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required";
        } else if (formData.subject.trim().length < 5) {
            newErrors.subject = "Subject must be at least 5 characters long";
        }
        
        // Message validation - at least 10 characters
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters long";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        if (type === 'checkbox') {
            setFormData({ 
                ...formData, 
                [name]: checked,
                // If unchecked, clear the WhatsApp number
                ...(name === 'usePhoneForWhatsapp' && !checked ? { whatsappNumber: "" } : {})
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
        
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: null });
        }
    };

    const sendEmail = async () => {
        // Get WhatsApp number to use
        const whatsAppToUse = formData.usePhoneForWhatsapp ? formData.phone : formData.whatsappNumber;
        const formattedWhatsAppNumber = formatWhatsAppNumber(whatsAppToUse);
        
        // Prepare template parameters
        const templateParams = {
            from_name: `${formData.firstName} ${formData.lastName}`,
            from_email: formData.email,
            from_phone: `${formData.phone} (${getNetworkFromNumber(formData.phone)})`,
            from_whatsapp: whatsAppToUse ? `${whatsAppToUse} (${getNetworkFromNumber(whatsAppToUse)})` : "",
            whatsapp_formatted: formattedWhatsAppNumber, // For WhatsApp link in template
            subject: formData.subject,
            message: formData.message,
            reply_to: formData.email,
            // Added OrgLink WhatsApp number as requested
            orglink_whatsapp: "03406340240"
        };

        try {            // Your EmailJS credentials
            const serviceId = 'service_fovb5fh';
            const templateId = 'template_yxb33xc';
            const publicKey = 'qHkHnTDSPLvaHtLhB';

            const response = await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            );

            console.log('SUCCESS!', response.status, response.text);
            return true;
        } catch (error) {
            console.log('FAILED...', error);
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setIsLoading(true);
            
            // Send email using Email.js
            const emailSent = await sendEmail();
            
            // Wait for 2 seconds to show loading state
            setTimeout(() => {
                setIsLoading(false);
                if (emailSent) {
                    setIsSubmitted(true);                    // Create a thank you message with WhatsApp info
                    const thankYouMessage = `Thank you for contacting us! We'll respond soon. Our team may also reach out to you on WhatsApp at your provided number And Email.`;
                    
                    // Display custom alert with WhatsApp information
                    setSuccessMessage(thankYouMessage);
                    
                    // Reset form after successful submission
                    setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        whatsappNumber: "",
                        usePhoneForWhatsapp: false,
                        subject: "",
                        message: ""
                    });
                } else {
                    // Handle email sending failure
                    alert("There was an error sending your message. Please try again later.");
                }
            }, 2000);
        }
    };

    // State for custom success message
    const [successMessage, setSuccessMessage] = useState("");

    const getButtonContent = () => {
        if (isLoading) {
            return `Submitting${dots}`;
        } else if (isSubmitted) {
            return (
                <span className="success-content">
                    <span className="heart-icon">❤️</span> {successMessage || "Thank you for contacting us! We'll respond soon."}
                </span>
            );
        } else {
            return "Submit Inquiry";
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
                                        OrgLink is a generous act that can save and improve lives. Join our mission to make a difference by registering as an organ donor today.
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
                                        <li>WhatsApp: 03406340240</li>
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
                                            <input 
                                                type="text" 
                                                name="firstName" 
                                                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} 
                                                placeholder="First Name" 
                                                value={formData.firstName} 
                                                onChange={handleChange} 
                                                disabled={isLoading}
                                            />
                                            {errors.firstName && <p className="error-text">{errors.firstName}</p>}
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label className="form-label">Last Name</label>
                                            <input 
                                                type="text" 
                                                name="lastName" 
                                                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} 
                                                placeholder="Last Name" 
                                                value={formData.lastName} 
                                                onChange={handleChange} 
                                                disabled={isLoading}
                                            />
                                            {errors.lastName && <p className="error-text">{errors.lastName}</p>}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <label className="form-label">Email Address</label>
                                            <input 
                                                type="email" 
                                                name="email" 
                                                className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                                                placeholder="Email Address" 
                                                value={formData.email} 
                                                onChange={handleChange} 
                                                disabled={isLoading}
                                            />
                                            {errors.email && <p className="error-text">{errors.email}</p>}
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label className="form-label">Phone Number</label>
                                            <input 
                                                type="tel" 
                                                name="phone" 
                                                className={`form-control ${errors.phone ? 'is-invalid' : ''}`} 
                                                placeholder="Phone Number (e.g., 03012345678)" 
                                                value={formData.phone} 
                                                onChange={handleChange} 
                                                disabled={isLoading}
                                            />
                                            {errors.phone && <p className="error-text">{errors.phone}</p>}
                                            {formData.phone && validatePakistaniNumber(formData.phone) && (
                                                <p className="network-info">Network: {getNetworkFromNumber(formData.phone)}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 form-group whatsapp-checkbox">
                                            <div className="form-check">
                                                <input 
                                                    type="checkbox" 
                                                    className="form-check-input" 
                                                    id="usePhoneForWhatsapp" 
                                                    name="usePhoneForWhatsapp" 
                                                    checked={formData.usePhoneForWhatsapp} 
                                                    onChange={handleChange}
                                                    disabled={isLoading}
                                                />
                                                <label className="form-check-label" htmlFor="usePhoneForWhatsapp">
                                                    Use same number for WhatsApp
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {!formData.usePhoneForWhatsapp && (
                                        <div className="form-group">
                                            <label className="form-label">WhatsApp Number</label>
                                            <input 
                                                type="tel" 
                                                name="whatsappNumber" 
                                                className={`form-control ${errors.whatsappNumber ? 'is-invalid' : ''}`} 
                                                placeholder="WhatsApp Number (e.g., 03012345678)" 
                                                value={formData.whatsappNumber} 
                                                onChange={handleChange} 
                                                disabled={isLoading}
                                            />
                                            {errors.whatsappNumber && <p className="error-text">{errors.whatsappNumber}</p>}
                                            {formData.whatsappNumber && validatePakistaniNumber(formData.whatsappNumber) && (
                                                <p className="network-info">Network: {getNetworkFromNumber(formData.whatsappNumber)}</p>
                                            )}
                                        </div>
                                    )}
                                    <div className="form-group">
                                        <label className="form-label">Subject</label>
                                        <input 
                                            type="text" 
                                            name="subject" 
                                            className={`form-control ${errors.subject ? 'is-invalid' : ''}`} 
                                            placeholder="Subject" 
                                            value={formData.subject} 
                                            onChange={handleChange} 
                                            disabled={isLoading}
                                        />
                                        {errors.subject && <p className="error-text">{errors.subject}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Message</label>
                                        <textarea 
                                            name="message" 
                                            className={`form-control ${errors.message ? 'is-invalid' : ''}`} 
                                            placeholder="How can we assist you in organ donation?" 
                                            value={formData.message} 
                                            onChange={handleChange} 
                                            disabled={isLoading}
                                            rows="4"
                                        />
                                        {errors.message && <p className="error-text">{errors.message}</p>}
                                    </div>
                                    <button 
                                        type="submit" 
                                        className="btn-send" 
                                        disabled={isLoading || isSubmitted}
                                    >
                                        {getButtonContent()}
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