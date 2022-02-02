import React from "react";

function Card({ name, image, url, desc }) {

    const [isShown, setIsShown] = React.useState(false);

    return (

        <div class="dropdown is-hoverable is-up">

            <div className="card dropdown-trigger"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
            >
                <div className="card-image">
                    <figure class="image is-3by2">
                        <img src={image} alt="card-image" />
                    </figure>
                </div>

            </div >

            <div class="dropdown-menu" id="dropdown-menu4" role="menu" style={{
                width: '15rem'
            }}>
                {/* <div class="dropdown-content" > */}
                <div class="dropdown-item">

                    <div class="card" style={{
                        height: '18rem', width: '100%',
                    }}>
                        <img src={image} alt="..." />
                        <div class="card-body">
                            <h5 class="title is-6" style={{ marginBottom: '2px' }}>{name}</h5>
                            <p class="subtitle is-6" style={{ margin: '0 1px' }}>{desc}</p>
                        </div>
                    </div>

                </div>
                {/* </div> */}
            </div>

        </div >

    );
}

export default Card;