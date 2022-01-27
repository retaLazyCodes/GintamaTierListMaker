function Card({ body, image }) {

    return (
        <div className="card">
            <img src={image} className="card-img-top" alt="card-image" />
            {/* <div className="card-header">
                <h3>Example Card</h3>
            </div>
            <div className="card-body">
                <p>{body}</p>
            </div> */}
        </div>
    );
}

export default Card;