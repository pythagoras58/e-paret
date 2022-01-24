import React from 'react';

export const Main = () => {
    return (<div className="work-type">
    
  <h3 className="text-primary contact-title">Services</h3>
        <div class="row justify-content-md-center row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
            <div class="col mb-4">
                <div className="card">
                    <img src="/images/1.jpg" className="card-img"/>
                    <div className="card-body">
                        <p><span className="text-success">System Administrative</span> solutions like managing, troubleshooting, licensing, and updating hardware and software assets</p>
                    </div>
                </div>
            </div>

            <div class="col md-4">
                <div className="card">
                    <img src="/images/6.jpg" className="card-img"/>
                    <div className="card-body">
                    <p><span className="text-success">Software </span> solutions like testing, software developmet, software component integration,and software security management</p>
                    
                    </div>
                </div>
            </div>

            <div class="col md-4">
                <div className="card">
                    <img src="/images/5.jpg" className="card-img"/>
                    <div className="card-body">
                    <p><span className="text-success">Hardware</span> solutions like performance testing, troubleshooting, hardware upgrade, and hardware component repairs</p>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};
