import React, { Component } from 'react';

class CallToAction extends Component {
    state = {}
    render() {
        return (
            <section id="try" className="section-spacer text-left pb-0 pt-50">
                <div className="container">
                    <div className="callout">
                        <div className="callout-content">
                            <div className="Callout--Header">
                                <h2>Start your free trial</h2>
                                <p className="lead">Lick human with sandpaper tongue paw at your fat belly be a nyan cat, feel great about it, be annoying 24/7 poop</p>
                            </div>
                        </div>
                        <div className="callout-footer ml-lg-auto">
                            <form action="">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Enter your email" />
                                    <button type="submit" className="btn btn-primary">Start your free trial</button>
                                </div>
                            </form>
                            <p className="d-block text-sm">14 days free - no credit card required</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
}

export default CallToAction;