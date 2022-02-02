import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import reactDragula from "react-dragula";
import { changingTier } from "./actions";
import Card from './Card';


function TierList() {

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
                <div className="sTier tier-row-odd">
                    <div className="tier">S</div>
                    <div id="sTier"
                        className="tier-list">
                        {list.sTier}
                    </div>
                </div>
                <div className="aTier tier-row-even">
                    <div className="tier">A</div>
                    <div id="aTier"
                        className="tier-list">
                        {list.aTier}
                    </div>
                </div>
                <div className="bTier tier-row-odd">
                    <div className="tier">B</div>
                    <div id="bTier"
                        className="tier-list">
                        {list.bTier}
                    </div>
                </div>
                <div className="cTier tier-row-even">
                    <div className="tier">C</div>
                    <div id="cTier"
                        className="tier-list">
                        {list.cTier}
                    </div>
                </div>
                <div className="dTier tier-row-odd" >
                    <div className="tier">D</div>
                    <div id="dTier"
                        className="tier-list">
                        {list.dTier}
                    </div>
                </div>
                <div className="fTier tier-row-even">
                    <div className="tier">F</div>
                    <div id="fTier"
                        className="tier-list">
                        {list.fTier}
                    </div>
                </div>
                <div className="benchTier tier-row-odd">

                    <div className="tier-bench">Bench</div>
                    <div id="benchTier">
                        {
                            tierlist.map(card => {
                                card.tier = 'benchTier';
                                card.index = 0;
                                return (

                                    <Card name={card.name} image={card.image}
                                        url={card.url} desc={card.description} key={card.id} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </div >
    );
}
export default TierList;
