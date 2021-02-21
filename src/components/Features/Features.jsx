/* eslint-disable jsx-a11y/anchor-has-content */
import info from '../../assets/info.png';
import treatment from '../../assets/treat.png';
import diet from '../../assets/diet.png';
import quiz from '../../assets/quiz.png'
import { Link } from 'react-router-dom';
import './Features.scss';

function Features() {
    return (
        <div className="Features">
            <div className="container p-5">
                <h2 className="text-center mb-4">
                    Features
                </h2>
                <div className="row justify-content-center mx-auto">
                    <div className="col-lg-5 col-md-12 mb-4">
                        <div className="card card-1">
                            <div className="card-body row align-items-center justify-content-center">
                                <img src={info} alt="Information Logo" />
                                <h4>Information</h4>
                            </div>
                            <Link to="/info" className="stretched-link"></Link>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 mb-4">
                        <div className="card card-2">
                            <div className="card-body row align-items-center justify-content-center">
                                <img src={treatment} alt="Treatment Logo" />
                                <h4>Treatment</h4>
                            </div>
                            <Link to="/treatment" className="stretched-link"></Link>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 mb-4">
                        <div className="card card-3">
                            <div className="card-body row align-items-center justify-content-center">
                                <img src={diet} alt="Diet Logo" />
                                <h4>Diet</h4>
                            </div>
                            <Link to="/diet" className="stretched-link"></Link>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 mb-4">
                        <div className="card card-4">
                            <div className="card-body row align-items-center justify-content-center">
                                <img src={quiz} 
                                    alt="Quiz Logo" 
                                />
                                <h4>Quiz</h4>
                            </div>
                            <Link to="/quiz" className="stretched-link"></Link>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Features
