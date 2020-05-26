import React from 'react';
import ruru from '../../assets/img/demo/client-logos/ruru.png';
import palates from '../../assets/img/demo/client-logos/palates.png';
import pintxos from '../../assets/img/demo/client-logos/pintxos.png';

const clients = [{   
    client: 'Ruru',
    logo: ruru
},{   
    client: 'Palates',
    logo: palates
},{   
    client: 'Pintxos',
    logo: pintxos
}];


const ClientLogos = () => {
    
    return (
        <section className="section-spacer pb-0 section--clients">
            <div className="container">
                <header className="section-header text-center w-100">
                    <h2 className="section-title">Trusted by Ghost Kitchens</h2>
                </header>
                <div className="row">
                    <div className="col-12 mx-auto">
                        <div className="client-logo__wrapper">
                            {clients.map(e => 
                                <a href="#" className="client-logo">
                                    <img src={e.logo} alt={e.client} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientLogos;