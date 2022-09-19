import React from 'react';
import './index.scss';

export default function Contact() {
                return (
		<section className='contact-info'>
			<div className="contactBox">
				<h1>Contact me</h1>
				<form id="contact-form">
					<div>
						<label htmlFor="name">Name:</label>
						<input
							type="text"
							name="name"
						/>
					</div>
					<div>
						<label htmlFor="email">Email address:</label>
						<input
							type="email"
							name="email"
						/>
					</div>
					<div>
						<label htmlFor="message">Message:</label>
						<textarea
							name="message"
							rows="5"
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
			<div className="numberBox">
				<p>Email: z.c.chun2003@gmail.com</p>
				<p>Call: 2106830967</p>
			</div>
		</section>
	);
};