const Staff = ()=>{
    return <>
    <section className="myRow">
            <div id="staff">
                <h1>Our Friendly Staff</h1>
                <hr/>
                <div className="staff-container">
                    <div className="myCol3">
                        <div className="staff-image">
                            <img src={require("./img/staff/main-chef.jpg")} alt=""/>
                        </div>
                        <div className="staff-desc">
                            <h3> STEPHEN ROBERTS </h3>
                            <h5> Main Chef</h5>
                            <p> Controlling and directing the food preparation process and any other relative activities. Constructing menus with new or existing culinary creations ensuring the variety and quality of the servings. Approving and “polishing” dishes before they reach the customer.</p>
                        </div>
                    </div>
                    <div className="myCol3">
                        <div className="staff-image">
                            <img src={require("./img/staff/kitchen-manager.jpg")} alt=""/>
                        </div>
                        <div className="staff-desc">
                            <h3> LAURA MENDEZ </h3>
                            <h5> Main Chef</h5>
                            <p> Controlling and directing the food preparation process and any other relative activities. Constructing menus with new or existing culinary creations ensuring the variety and quality of the servings. Approving and “polishing” dishes before they reach the customer.</p>
                        </div>
                    </div>
                    <div className="myCol3">
                        <div className="staff-image">
                            <img src={require("./img/staff/pastry-chef.jpg")} alt=""/>
                        </div>
                        <div className="staff-desc">
                            <h3> ADAM ROBINSON </h3>
                            <h5> Pastry Chef</h5>
                            <p>Our Pastry Chef bakes various desserts in a kitchen within a restaurant or bakery. Their main duties include following recipes to create pastries, developing new and unique recipes to feature on the menu and keeping stock of the kitchen inventory.</p>
                        </div>
                    </div>
                    <div className="myCol3">
                        <div className="staff-image">
                            <img src={require("./img/staff/server.jpg")} alt=""/>
                        </div>
                        <div className="staff-desc">
                            <h3> CYNTHIA GRAY </h3>
                            <h5>Server</h5>
                            <p> OUr Server's attend to diners before, during, and after their meals by helping them place and pay for their orders. They also ensure the timely delivery of food and beverages by checking on their tables periodically throughout the service time.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>
}

export default Staff;