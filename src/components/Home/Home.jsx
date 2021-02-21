import { Features } from '../index';
import './Home.scss';

function Home() {
    return (
        <div className="Home" style={{ marginTop: '3rem' }}>
            <div className="container-fluid row justify-content-center align-items-center mx-auto">
                <div className="col-1" />
                <div className="col-lg-3 col-md-12">
                    <img 
                        src="https://image.freepik.com/free-vector/woman-taking-care-herself_23-2148518983.jpg" 
                        alt="We-Care Home" className="img-fluid"
                    />
                </div>
                <div className="col-lg-8 col-md-12 text-white my-auto">
                    <h1 className="h1-responsive text-center">
                        At We-Care, your health is all that matters
                    </h1>
                    <h4 className="h4-responsive font-weight-light mt-4 text-center">
                        Here to help you about any questions related to PCOD/PCOS
                    </h4>
                </div>
            </div>
            <Features />
        </div>
    )
}

export default Home;
