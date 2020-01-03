import React from 'react'

import Layout from '../components/layout/layout'

import contactStyles from '../styles/contact.module.scss'

const ContactPage = () => {
    return (
        <div className={contactStyles.contact}>
            <Layout>
            <h1>Get In Touch</h1>
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
            </Layout>
        </div>
    )
}

export default ContactPage