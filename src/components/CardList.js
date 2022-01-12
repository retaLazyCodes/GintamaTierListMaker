import { useEffect } from "react";
import reactDragula from "react-dragula";
import { useSelector } from "react-redux";
import Card from "./Card";

function CardList() {
    const arcs = useSelector(state => state)

    useEffect(() => {
        const left = document.getElementById('left');
        const right = document.getElementById('right');
        reactDragula([left, right]);
    }, [])

    return (
        <div className="container">

            <div id="left" className="container">
                {
                    arcs.map(card => {
                        return (
                            <Card body={card.name} key={card.id} />
                        )
                    })
                }
            </div>

            <div id="right" className="container">
                {/* <Card body="Card 1" />
                <Card body="Card 2" />
                <Card body="Card 3" />
                <Card body="Card 4" /> */}
            </div>

        </div>
    );
}

export default CardList;