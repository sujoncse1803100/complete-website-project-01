import React from 'react';
import featureService from '../../../images/featureService.png';

const FeatureService = () => {
    return (
        <section className="feacher-service mt-5 mb-5 ">
            <div className="container">
                <div className=" row">
                    <div className="col-md-6">
                        <img style={{ width: '100%', height: '500px' }} src={featureService} alt="" className="feature-image fluid" />
                    </div>
                    <div className="col-md-6 p-4">
                        <h2>Exeptional Dental Care,On Your Terms</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ipsa suscipit odit esse unde eum ad nobis obcaecati eveniet?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae provident delectus, optio earum, consectetur eum iste amet nisi laboriosam sed suscipit id repellendus, voluptatibus aliquam. Pariatur libero suscipit ad? Culpa corrupti facere animi voluptas doloribus facilis autem dignissimos minus vel.
                        </p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureService;