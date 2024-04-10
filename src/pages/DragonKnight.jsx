// eslint-disable-next-line no-unused-vars


import {useSelector} from "react-redux";
import {selectDragons, selectKnights} from "../store/selectors/index.js";

const DragonKnight = () => {
    const dragons = useSelector(selectDragons)
    const knights = useSelector(selectKnights)

    return (
        <div className={'mainPage'}>
            <div className={"headerPage"}>
                <h1>Knights & Dragons</h1>
            </div>
            <div className="couple">
                <div id={"list"}>
                    <h4>The knights</h4>
                    {
                        knights.length > 0 ?
                            knights.map(knight =>
                                <div key={knight.id}>
                                    <span>{knight.name}</span>
                                    |
                                    <span>{knight.age}</span>
                                </div>
                            )
                            :
                            <p>No knight</p>
                    }
                </div>
                <div id={"list"}>
                    <h4>The dragons</h4>
                    {
                        dragons.length > 0 ?
                            dragons.map(dragon =>
                                <div key={dragon.id}>
                                    <span>{dragon.name}</span>
                                </div>
                            )
                            :
                            <p>No dragon</p>
                    }
                </div>
            </div>
        </div>
)
}

export default DragonKnight;
