import './Diet.scss';
import diet from '../../assets/diet.gif';

function Diet() {
    return (
        <div className="Diet" style={{ marginTop: '3rem' }}>
            <div className="container py-4">
                <div className="text-center heading">
                    <h2 className="mt-5">
                        Diet
                    </h2>
                    <div className="display-4">
                        Right diet is very important to recover faster!
                    </div>
                </div>
                <div className="row justify-content-center align-items-center mx-auto mt-1">
                    <div className="col-lg-4 col-md-12">
                        <img src={diet} alt="We-Care Diet" className="img-fluid" />
                    </div>
                    <div className="col-lg-1" />
                    <div className="col-lg-6 col-md-12 mt-5">
                        <div className="card card-1 mb-3 py-2">
                            <div className="card-body">
                                <div className="heading font-weight-bold text-center">
                                    Do's: High-Fibre &amp; Protein Diet
                                </div>
                                <br/>
                                <ul>
                                    <li>Green Leafy Vegetables</li>
                                    <li>Dry Fruits (like almonds, walnuts etc.)</li>
                                    <li>Fruits</li>
                                    <li>Tofu</li>
                                    <li>Chicken and fish</li>
                                </ul>

                                <u>Have a balanced and regular diet!</u>
                            </div>
                        </div>

                        <div className="card card-3 mb-3 py-2">
                            <div className="card-body">
                                <div className="heading font-weight-bold text-center">
                                    Dont's: High Carbohydrate food
                                </div>
                                <br/>
                                <ul>
                                    <li>White bread</li>
                                    <li>Sugary Desserts</li>
                                    <li>Soda</li>
                                    <li>Fried food/ Junk food like fries or burgers</li>
                                </ul>

                                <u>Avoid salty and sugary food!</u>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Diet
