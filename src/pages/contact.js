import React from 'react'

import Layout from '../components/layout/layout'

import contactStyles from '../styles/contact.module.scss'

const ContactPage = () => {
    return (
        <Layout>
            <div className={contactStyles.contact}>
                <h1 className="lg-heading">Get In <span className="text-secondary">Touch</span></h1>
                <div className={contactStyles.boxes}>
                    <div class="contact-text">
                        <a href="mailto:bartholomewbd@gmail.com">
                            <span class="text-secondary">Email:</span><br />bartholomewbd@gmail.com
                            </a>
                    </div>
                    <div class="contact-text">
                        <a href="https://www.linkedin.com/in/bartholomewbd/">
                            <span class="text-secondary">LinkedIn:</span><br />BartholomewBD
                            </a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ContactPage