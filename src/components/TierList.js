import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { changingTier } from "./actions";
import Card from './Card';


function TierList() {

    const [storedState, setStoredState] = useLocalStorage('tiers', [])
    const tierlist = useSelector(state => state.tierlist.tierlist);

    console.log(tierlist)

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
        let items = tierlist.filter((item) => {
            if (item.Id === itemId) {
                item.tier = tier;
                item.index = list[tier].length;
            }
            return item;
        })
        dispatch(changingTier(items));
    }

    const saveState = (e) => {
        console.log(e.target)
        e.target.classList.add('is-loading')
        console.log(storedState)
        const newState = {
            tierlist: {
                tierlist: tierlist
            }
        }
        setStoredState(newState);
        window.setTimeout(() => {
            e.target.classList.remove('is-loading')
        },1000);
    }

    tierlist.sort((a, b) => a.index - b.index).map((card) => {
        list[card.tier].push(
            <Card id={card.Id} name={card.Name} image={card.Image}
                episodes={card.Episodes} release={card.ReleaseDate} key={card.Id}
                onDragStart={onDragStart}
            />
        )
    })

    return (
        <div className="App">
            <div className="title">Gintama TierList Maker</div>
            <div className="sub-title">Rank your favorite plot arcs</div>
            <div>
                <button id='btn-save' className="button is-warning is-outlined"
                    onClick={saveState}>
                    <span className="icon is-small" style={{marginRight: '2px'}}>
                        <i className="fas fa-check"></i>
                    </span>
                    Save State
                </button>
            </div>

            <div className="container">
                <div className="sTier tier-row-odd" onDragOver={onDragOver} onDrop={(e) => onDrop(e, "sTier")}>
                    <div className="tier">🧐🍷</div>
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
                    <div className="tier">😴</div>
                    <div id="fTier" className="tier-list">
                        {list.fTier}
                    </div>
                </div>
                <div className="benchTier tier-row-odd" onDragOver={onDragOver} onDrop={(e) => onDrop(e, "benchTier")}>
                    <div className="tier-bench">Bench😎</div>
                    <div id="benchTier" className="tier-list">
                        {list.benchTier}
                    </div>
                </div>
            </div>

        </div >
    );
}
export default TierList;
