import React from 'react'

import Layout from '../components/layout/layout'

import contactStyles from '../styles/contact.module.scss'

const ContactPage = () => {
    return (
        <div className={contactStyles.contact}>
            <Layout>
            <h1 className="lg-heading">Get In <span className="text-secondary">Touch</span></h1>
            <div className={contactStyles.boxes}>
                <div class="contact-text">
                    <a href="mailto:bartholomewbd@gmail.com">
                        <span class="text-secondary">Email:</span>
                        bartholomewbd@gmail.com
                    </a>
                </div>
                <div class="contact-text">
                    <a href="https://www.linkedin.com/in/bartholomewbd/">
                        <span class="text-secondary">LinkedIn:</span> BartholomewBD
                    </a>
                </div>
            </div>
            </Layout>
        </div>
    )
}

export default ContactPage