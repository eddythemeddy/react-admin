import React, { Component } from 'react';

class CallToAction extends Component {
    state = {}
    render() {
        return (
            <section id="try" class="section-spacer text-left pb-0 pt-50">
                <div class="container">
                    <div class="callout">
                        <div class="callout-content">
                            <div class="Callout--Header">
                                <h2>Start your free trial</h2>
                                <p class="lead">Lick human with sandpaper tongue paw at your fat belly be a nyan cat, feel great about it, be annoying 24/7 poop</p>
                            </div>
                        </div>
                        <div class="callout-footer ml-lg-auto">
                            <form action="">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Enter your email" />
                                    <button type="submit" class="btn btn-primary">Start your free trial</button>
                                </div>
                            </form>
                            <p class="d-block text-sm">14 days free - no credit card required</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
}

export default CallToAction;