import React from 'react';

export const Contact = () => {
    return (<div className="contact">
        <h3 className="text-primary contact-title">Contacts</h3>
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <div className="card-body">
                            <i className="fas fa-address-book">
                                <span className="text-primary"> E-Paret IT Consult</span>
                            </i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <div className="card-body">
                            <i class="fas fa-phone-alt">
                                <span className="text-primary">+233 558 0387 82</span>
                            </i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <div className="card-body">
                            <i class="fas fa-mobile">
                                <span className="text-primary">+233 578 5278 85</span>
                            </i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <div className="card-body">
                            <i class="fas fa-envelope-open-text">
                                <span className="text-primary"> eparetitconsult@gmail.com</span>
                            </i>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>);
};
