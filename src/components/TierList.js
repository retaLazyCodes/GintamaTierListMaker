import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changingTier } from "./actions";
import Card from './Card';


function TierList() {

    const tierlist = useSelector(state => state.tierlist.tierlist);

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

    const onDragStart = (e, itemId) => {
        e.dataTransfer.setData("item", itemId);
    }

    const onDragOver = (e) => {
        e.preventDefault();
    }

    const onDrop = (e, tier) => {
        let itemId = Number(e.dataTransfer.getData("item"));
        console.log(tierlist)
        let items = tierlist.filter((item) => {
            if (item.id === itemId) {
                item.tier = tier;
                item.index = list[tier].length;
            }
            return item;
        })
        console.log(tier)
        console.log(itemId)
        console.log(items)
        dispatch(changingTier(items));
    }

    tierlist.sort((a, b) => a.index - b.index).map((card) => {
        list[card.tier].push(
            <Card id={card.id} name={card.name} image={card.image}
                url={card.url} desc={card.description} key={card.id}
                onDragStart={onDragStart}
            />
        )
    })

    return (
        <div className="App">
            <div className="title">Gintama TierList Maker</div>
            <div className="sub-title">Rank your favorite plot arcs</div>

            <div className="container">
                <div className="sTier tier-row-odd" onDragOver={onDragOver} onDrop={(e) => onDrop(e, "sTier")}>
                    <div className="tier">S</div>
                    <div id="sTier" className="tier-list">
                        {list.sTier}
                    </div>
                </div>
                <div className="aTier tier-row-even" onDragOver={onDragOver} onDrop={(e) => onDrop(e, "aTier")}>
                    <div className="tier">A</div>
                    <div id="aTier" className="tier-list">
                        {list.aTier}
                    </div>
                </div>
                <div className="bTier tier-row-odd" onDragOver={onDragOver} onDrop={(e) => onDrop(e, "bTier")}>
                    <div className="tier">B</div>
                    <div id="bTier" className="tier-list">
                        {list.bTier}
                    </div>
                </div>
                <div className="cTier tier-row-even" onDragOver={onDragOver} onDrop={(e) => onDrop(e, "cTier")}>
                    <div className="tier">C</div>
                    <div id="cTier" className="tier-list">
                        {list.cTier}
                    </div>
                </div>
                <div className="dTier tier-row-odd" onDragOver={onDragOver} onDrop={(e) => onDrop(e, "dTier")}>
                    <div className="tier">D</div>
                    <div id="dTier" className="tier-list">
                        {list.dTier}
                    </div>
                </div>
                <div className="fTier tier-row-even" onDragOver={onDragOver} onDrop={(e) => onDrop(e, "fTier")}>
                    <div className="tier">F</div>
                    <div id="fTier" className="tier-list">
                        {list.fTier}
                    </div>
                </div>
                <div className="benchTier tier-row-odd" onDragOver={onDragOver} onDrop={(e) => onDrop(e, "benchTier")}>

                    <div className="tier-bench">Bench</div>
                    <div id="benchTier" className="tier-list">
                        {list.benchTier}
                    </div>
                </div>
            </div>

        </div >
    );
}
export default TierList;
