function Card({ name, image, url }) {

    return (
        <div className="card">
            <a href={url} target="_blank">
                <img src={image} className="card-img-top" alt="card-image" />
            </a>
        </div>
    );
}

export default Card;