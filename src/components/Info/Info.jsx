import { Link } from 'react-router-dom';
import { Accordion, Card } from 'react-bootstrap';
import './Info.scss';

function Info() {
    return (
        <div className="Info" style={{ marginTop: '3rem' }}>
            <div className="container py-4">
                <div className="text-center heading">
                    <h2 className="mt-5">
                        Information
                    </h2>
                    <div className="display-4">
                        Get to know more about PCOD and PCOS!
                    </div>
                </div>
                
                <div className="row justify-content-center mx-auto" style={{ marginTop: '3rem' }}>
                    <div className="col-lg-8 faq">
                        <Accordion>
                            <Card>
                                <Accordion.Toggle 
                                    as={Card.Header} 
                                    className="font-weight-bold" 
                                    eventKey="0"
                                >
                                    What is PCOD or PCOS that you been talking about? 🤔
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        Well, in short, PCOS and PCOD is Polycystic Ovary Syndrome or Disease.
                                        
                                        <br/><br/>

                                        <u>Let's start with the basics.</u>
                                        <br/>
                                        All women have two ovaries which release an egg alternately every month. 
                                        These ovaries also produce female hormones that are responsible 
                                        for many things like fertility, period schedule, facial hair, 
                                        etc. apart from these, <strong>ovaries also produce androgens or male 
                                        hormones (Shocking? I know, but it's true!)</strong> but in very minute 
                                        quantities.

                                        <br/><br/>

                                        <u>Now, coming back to our original question: What is PCOS and PCOD?</u>
                                        <br/>
                                        PCOD and PCOS (more severe than PCOD, but we will discuss that later!)
                                        is a condition in which the ovaries contain many immature or partially 
                                        mature eggs which eventually turn into cysts. 

                                        <br/><br/>

                                        <strong>
                                            Hence Polycystic Ovary Syndrome (or Disease), meaning many cysts in the ovary.
                                        </strong>
                                        
                                        <br/><br/>

                                        <u><strong>Main Problem:</strong></u>
                                        {' '}
                                        The ovaries usually become enlarged and secrete large amounts of androgens (male hormone).
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle 
                                    as={Card.Header} 
                                    eventKey="1"
                                    className="font-weight-bold"
                                >
                                    Well, that sounds dangerous!🚫 How does someone know if they have it?
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <u>Here are some of the symptoms of PCOD and PCOS:</u>
                                        <ul>
                                            <li>Irregular periods, occurring every 2 to 3 months</li>
                                            <li>Unusual body and facial hair growth</li>
                                            <li>Uncontrolled weight gain around the waist area especially</li>
                                            <li>Heavy bleeding</li>
                                            <li>Male-pattern baldness</li>
                                        </ul>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle 
                                    as={Card.Header} 
                                    eventKey="2"
                                    className="font-weight-bold"
                                >
                                    I am confused!😕 What are the differences between PCOD and PCOS?
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                        <u>
                                            PCOD and PCOS are quite different from each other
                                            mainly on the basis of severity!
                                        </u>
                                        <ol className="mt-3">
                                            <li>
                                                <strong>PCOS is a serious condition.</strong> 
                                                {' '}
                                                PCOD is not considered a disease as with the correct 
                                                diet and exercise schedule, the situation improves. 
                                                PCOS is a metabolic disorder.
                                            </li>
                                            <li className="mt-1">
                                                <strong>PCOD is more common.</strong> 
                                                {' '}
                                                Almost a third of the women around the world suffer 
                                                from PCOD. PCOS has a lower number of patients.
                                            </li>
                                            <li className="mt-1">
                                                <strong>PCOS has serious complications.</strong> 
                                                {' '}
                                                Women who suffer from PCOS are at risk of 
                                                developing diabetes, high blood pressure cardiac-vascular 
                                                issues, obesity, and even endometrial cancer.
                                            </li>
                                            <li className="mt-1">
                                                <strong>Those with PCOD don’t have significant fertility issues. </strong> 
                                                {' '}
                                                With a bit of medical help, they conceive 
                                                successfully. Women who suffer from PCOS, on the 
                                                other hand, struggle with infertility. 
                                            </li>
                                        </ol>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle 
                                    as={Card.Header} 
                                    eventKey="3"
                                    className="font-weight-bold"
                                >
                                    Please elaborate more on PCOS!
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>
                                        <strong>PCOS is a metabolic disorder</strong> that is more severe than PCOD. 
                                        In this condition, the ovaries produce a higher quantity of 
                                        the male hormone, and this leads to the formation of more 
                                        than ten follicular cysts in the ovary every month. 
                                        <strong>This stops the release of egg leading to anovulation.</strong>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle 
                                    as={Card.Header} 
                                    eventKey="4"
                                    className="font-weight-bold"
                                >
                                    What causes PCOD or PCOS?
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="4">
                                    <Card.Body>
                                        Doctors don’t know exactly what causes either of these.
                                        PCOD and PCOS is mostly seen among obese women.
                                        <br/>
                                        <u>Other factors can be:</u>
                                        <ul>
                                            <li>
                                                <strong>Genes</strong>
                                            </li>
                                            <li>
                                                <strong>
                                                    Insulin Resistance: 
                                                </strong>
                                                {' '}
                                                When cells can’t use insulin properly, the body’s 
                                                demand for insulin increases. The pancreas makes 
                                                more insulin to compensate. Extra insulin triggers 
                                                the ovaries to produce more male hormones.
                                            </li>
                                        </ul>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle 
                                    as={Card.Header} 
                                    eventKey="5"
                                    className="font-weight-bold"
                                >
                                    How can one treat it? 💊
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="5">
                                    <Card.Body>
                                        Both the disease and syndrome can be controlled by making lifestyle modifications.
                                        <br/>
                                        The best way to control and manage PCOD is by ensuring proper weight management.
                                        {' '} 
                                        <strong>
                                            PCOD/PCOS patients must exercise on a regular basis and maintain a healthy diet.
                                        </strong>
                                        {' '}
                                        The diet should be low on sugars and carbohydrates. 
                                        High protein and high fibre intake are recommended for patients suffering from PCOD.

                                        <br/><br/>

                                        You can know more at 
                                        {' '}
                                        <Link to='/treatment'>Treatment</Link>
                                        {' and '}
                                        <Link to='/diet'>Diet</Link>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            {/* <Card>
                                <Accordion.Toggle 
                                    as={Card.Header} 
                                    eventKey="6"
                                    className="font-weight-bold"
                                >
                                    Recommended videos
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="6">
                                    <Card.Body>
                                        <u>Some videos I recommend you to watch!</u>
                                        <div className="link-1">
                                            <iframe width="560" height="315" title="link-1" src="https://www.youtube.com/embed/lotfMo1fQek" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                        <div className="link-2">
                                            <iframe width="560" height="315" title="link-2" src="https://www.youtube.com/embed/PYC7amQx1MY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card> */}
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
