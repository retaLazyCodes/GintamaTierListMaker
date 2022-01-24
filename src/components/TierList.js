import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import reactDragula from "react-dragula";
import { adding, changingTier } from "./actions";
import Card from './Card';


function TierList() {
    const [item, setItem] = React.useState("");

    const tierlist = useSelector(state => state);

    React.useEffect(() => {
        const benchTier = document.getElementById('benchTier');
        const sTier = document.getElementById('sTier');
        const aTier = document.getElementById('aTier');
        const bTier = document.getElementById('bTier');
        const cTier = document.getElementById('cTier');
        const dTier = document.getElementById('dTier');
        const fTier = document.getElementById('fTier');

        reactDragula([benchTier, sTier, aTier, bTier, cTier, dTier, fTier]);
    }, [])

    const dispatch = useDispatch();

    const list = {
        sTier: [],
        aTier: [],
        bTier: [],
        cTier: [],
        dTier: [],
        fTier: [],
        benchTier: []
    }

    const onDragOver = (e) => {
        e.preventDefault();
    }

    const onDrop = (e, tier) => {
        let itemId = Number(e.dataTransfer.getData("item"));
        let items = tierlist.filter((item) => {
            if (item.id === itemId) {
                item.tier = tier;
                item.index = list[tier].length;
            }
            return item;
        })
        dispatch(changingTier(items));
    }

    return (
        <div className="App">
            <div className="title">Gintama TierList Maker</div>
            <div className="sub-title">Rank your favorite plot arcs</div>

            <div className="container">
                <div className="sTier tier-row-odd" onDragOver={onDragOver} onDrop={(e) => onDrop(e, "sTier")}>
                    <div className="tier">S</div>
                    <div className="tier-list" id="sTier">{list.sTier}</div>
                </div>
                <div className="aTier tier-row-even" onDragOver={onDragOver} onDrop={(e) => onDrop(e, "aTier")}>
                    <div className="tier">A</div>
                    <div className="tier-list" id="aTier">{list.aTier}</div>
                </div>
                <div className="bTier tier-row-odd" onDragOver={onDragOver} onDrop={(e) => onDrop(e, "bTier")}>
                    <div className="tier">B</div>
                    <div className="tier-list" id="bTier">{list.bTier}</div>
                </div>
                <div className="cTier tier-row-even" onDragOver={onDragOver} onDrop={(e) => onDrop(e, "cTier")}>
                    <div className="tier">C</div>
                    <div className="tier-list" id="cTier">{list.cTier}</div>
                </div>
                <div className="dTier tier-row-odd" onDragOver={onDragOver} onDrop={(e) => onDrop(e, "dTier")}>
                    <div className="tier">D</div>
                    <div className="tier-list" id="dTier">{list.dTier}</div>
                </div>
                <div className="fTier tier-row-even" onDragOver={onDragOver} onDrop={(e) => onDrop(e, "fTier")}>
                    <div className="tier">F</div>
                    <div className="tier-list" id="fTier">{list.fTier}</div>
                </div>
                <div className="benchTier tier-row-odd">

                    <div className="tier-bench">Bench</div>
                    <div className="container-fluid mb-4">
                        <div id="benchTier" className="row justify-content-center row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5"
                            onDragOver={onDragOver}
                            onDrop={(e) => onDrop(e, "benchTier")}>
                            {
                                tierlist.map(card => {
                                    card.tier = 'benchTier';
                                    card.index = 0;
                                    return (
                                        <Card body={card.Name} image={card.Image} key={card.Name} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
}
export default TierList;
