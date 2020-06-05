import React from 'react';

const Contact = () => (
    <div className='contact page'>
        <h2 className="display-4">Contact</h2>
        <div className="page__content">
            <div className="page__text">
                If you like to work with collaborative, thoughtful, and dedicated developers, then <span className="underline">let's talk</span>.
            </div>
            <form className="row justify-content-center" action="/sendemail" method="POST">
                <label className="inp col-12" htmlFor="inp">
                    <input type="text" name="name" placeholder="&nbsp;" required={true}/>
                    <span className="label">Name</span>
                    <span className="focus-bg"></span>
                </label>
                <label className="inp col-12" htmlFor="inp">
                    <input type="email" name="email" placeholder="&nbsp;" required={true} />
                    <span className="label">Email</span>
                    <span className="focus-bg"></span>
                </label>
                <label className="inp col-12" htmlFor="inp">
                    <input type="text" name="subject" placeholder="&nbsp;" required={true}/>
                    <span className="label">Subject</span>
                    <span className="focus-bg"></span>
                </label>
                <label className="inp" htmlFor="inp">
                    <textarea name="content" rows="6" cols="35" placeholder="&nbsp;" required={true}></textarea>
                    <span className="label">Message</span>
                    <span className="focus-bg"></span>
                </label>
                <input className="btn btn-lg btn-primary" type="submit" value="Send it!"></input>
            </form>
        </div>
    </div>
);

export default Contact;