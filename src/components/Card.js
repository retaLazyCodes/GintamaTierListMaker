import React from "react";

function Card({ id, name, image, episodes, release, onDragStart }) {

    const [isShown, setIsShown] = React.useState(false);

    return (

        <div className="dropdown is-hoverable is-up" id={id}>

            <div className="card dropdown-trigger"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                draggable onDragStart={(e) => onDragStart(e, id)}
            >
                <div className="card-image">
                    <figure className="image is-3by2">
                        <img src={image} alt="card-image" />
                    </figure>
                </div>

            </div >

            <div className="dropdown-menu" id="dropdown-menu4" role="menu" style={{
                width: '15rem'
            }}>
                <div className="dropdown-item">

                    <div className="card" style={{
                        height: '18rem', width: '100%', backgroundColor: 'black'
                    }}>
                        <img src={image} alt="..." />
                        <div className="card-body">
                            <h5 className="title is-6" style={{ marginBottom: '2px' }}>{name}</h5>
                            <div className="card-episodes">
                                <div className="columns">
                                    <div className="column">
                                        Anime episodes:
                                    </div>
                                    <div className="column">
                                        {episodes}
                                    </div>
                                </div>
                            </div>
                            <div className="card-release">
                                <div className="columns">
                                    <div className="column">
                                        Release date:
                                    </div>
                                    <div className="column">
                                        {release}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div >

    );
}

export default Card;