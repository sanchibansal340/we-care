import './About.scss';

function About() {
    return (
        <div className="About" style={{ marginTop: '3rem' }}>
            <div className="container py-4">
                <h2 className="text-center mt-5">About Us</h2>
                <div className="row justify-content-center mx-auto" style={{ marginTop: '4rem' }}>
                    <div className="col-lg-4 col-md-12">
                        <img 
                            src="https://image.freepik.com/free-vector/woman-depression-with-bewildered-thoughts-her-mind_102172-221.jpg" 
                            alt="About We-Care" className="img-fluid"/>
                    </div>
                    <div className="col-lg-8 col-md-10">
                        <div className="display-4">
                            <p>
                                The idea of <strong>We-Care</strong> was formed when a college student saw
                                the growing cases of PCOD and PCOS and very less awareness. {' '}
                                <u>
                                    According to recent statistics, about 1 in every 5 (about 20%) women in India suffer from PCOS.    
                                </u> 
                            </p>
                            <p>
                                Due to the nature of this disease, a lot of women 
                                shy away from talking about it especially in 
                                countries where periods are still considered a taboo topic.
                                <br /><br />
                                Through <strong>We-Care</strong>, we plan to not only talk 
                                about it but also make more people aware about PCOD and PCOS.
                            </p>
                        </div>
                        <span className="mt-5">
                            <div className="display-4">
                                Some source I have cited the info in this website are:
                            </div>
                            <ul>
                                <li>
                                    <a href="https://pharmeasy.in/blog/what-is-pcod-and-pcos-how-are-they-different/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Pharmeasy
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.nightingales.in/blog/womens-health/pcod-causes-symptoms-and-treatment/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Nightingales
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.healthline.com/health/polycystic-ovary-disease#pregnancy-and-pcos"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Healthline
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.thehindu.com/sci-tech/health/one-in-five-indian-women-suffers-from-pcos/article29513588.ece"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        The Hindu
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.fertilityanswers.com/9-pcos-diet-tips/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Fertility Answers
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default About
