import React, { Component } from 'react';
import logo_1 from '../../assets/img/demo/client-logos/logo-1.svg';
import logo_2 from '../../assets/img/demo/client-logos/logo-2.svg';
import logo_3 from '../../assets/img/demo/client-logos/logo-3.svg';
import logo_4 from '../../assets/img/demo/client-logos/logo-4.svg';
import logo_5 from '../../assets/img/demo/client-logos/logo-5.svg';


class ClientLogos extends Component {
    state = {}
    render() {
        return (
            <section class="section-spacer pb-0 section--clients">
                <div class="container">
                    <header class="section-header text-center w-100">
                        <h2 class="section-title">Trusted by most fast-forwarding brands</h2>
                    </header>
                    <div class="row">
                        <div class="col-12 mx-auto">
                            <div class="client-logo__wrapper">
                                <a href="" class="client-logo">
                                    <img src={logo_1} alt="Image" />
                                </a>
                                <a href="" class="client-logo">
                                    <img src={logo_2} alt="Image" />
                                </a>
                                <a href="" class="client-logo">
                                    <img src={logo_3} alt="Image" />
                                </a>
                                <a href="" class="client-logo">
                                    <img src={logo_4} alt="Image" />
                                </a>
                                <a href="" class="client-logo">
                                    <img src={logo_5} alt="Image" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
}

export default ClientLogos;