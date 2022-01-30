import React from "react";

function Card({ name, image, url, desc }) {

    const [isShown, setIsShown] = React.useState(false);

    return (

        <div class="dropdown is-hoverable is-up">

            <div className="card dropdown-trigger" style={{ width: '8rem' }}
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
                position: 'absolute', zindex: '9999',
                width: '15rem', height: '20rem', textOverflow: 'ellipsis'
            }}>
                <div class="dropdown-content" >
                    <div class="dropdown-item">

                        <div class="card" style={{
                            height: '20rem', width: '100%'
                        }}>
                            <img src={image}
                                class="card-img-top" alt="..." style={{ height: '60%', width: '100%' }} />
                            <div class="card-body">
                                <h5 class="title is-6">{name}</h5>
                                <p class="card-text" style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{desc}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div >

    );
}

export default Card;