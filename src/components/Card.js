function Card({ body }) {
    return (
        <div className="card">
            <div className="card-header">
                <h3>Example Card</h3>
            </div>
            <div className="card-body">
                <p>{body}</p>
            </div>
        </div>
    );
}

export default Card;