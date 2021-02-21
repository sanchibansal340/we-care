import './Treatment.scss';

function Treatment() {
    return (
        <div className="Treatment" style={{ marginTop: '3rem' }}>
            <div className="container py-4">
                <div className="text-center heading">
                    <h2 className="mt-5">
                        Treatment
                    </h2>
                    <div className="display-4">
                        Right kind of treatment is needed for a faster recovery
                    </div>
                </div>
                <div className="row justify-content-center mx-auto mt-5">
                    <div className="col-lg-3 col-md-10">
                        <img 
                            src="https://image.freepik.com/free-vector/clipboard-stethoscope-jar-pills-cartoon-icon-illustration-healthcare-medicine-icon-concept_138676-2115.jpg" 
                            alt="Treatment" className="img-fluid"
                        />
                    </div>
                    <div className="col-lg-1" />
                    <div className="col-lg-7 col-md-12 tips">
                        <ol>
                            <li className="mt-2">
                                <strong>Meet a Dietitian and Gynaecologist: </strong> 
                                {' '}
                                Visit a gynaecologist regularly to always be updated with
                                the size of your ovaries.
                                <br/>
                                A dietitian will help you design an extensive diet course
                                to lose weight easily all the while maintaining healthy practices.
                            </li>
                            <li className="mt-2">
                                <strong>No Processed Foods: </strong> 
                                {' '}
                                Avoid processed and refined foods such as white flour, sugar, 
                                breads and pasta. Instead eat whole gluten-free grains like oatmeal, 
                                brown rice, millet, amaranth and quinoa.
                            </li>
                            <li className="mt-2">
                                <strong>Drink More Water: </strong> 
                                {' '}
                                Drink two liters of water per day, flavoring with 
                                cut-up fresh citrus, cucumber, mint or berries.
                            </li>
                            <li className="mt-2">
                                <strong>No Refined Sugar: </strong> 
                                {' '}
                                Avoid foods with refined sugar, high-fructose 
                                corn-syrup, artificial sweeteners, artificial 
                                colors, MSG, trans-fats and high saturated fat.
                            </li>
                            <li className="mt-2">
                                <strong>Eat More Smaller Meals: </strong> 
                                {' '}
                                Eat every 3-4 hours to avoid spikes in your blood sugar.
                            </li>
                            <li className="mt-2">
                                <strong>Take the Right Foods With You: </strong> 
                                {' '}
                                Pack your own lunches for work or play. Make sure you 
                                bring along snacks so you have healthy choices 
                                wherever you go and don’t eat whatever is available 
                                because you are starving.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Treatment
