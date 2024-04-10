import {useDispatch, useSelector} from "react-redux";
import {selectKnightAge, selectKnightError, selectKnightName, selectKnights} from "../store/selectors/index.js";

const Knights = () => {
    const dispatch = useDispatch();

    const name = useSelector(selectKnightName);
    const age = useSelector(selectKnightAge);
    const knights = useSelector(selectKnights);
    const error = useSelector(selectKnightError);

    const handleChange = e => {
        dispatch(setKnightName(e.target.value), setKnightAge(e.target.value))
    }

    const handleKnightSubmit = () => {
        if (name.trim() === '' || knights.find(knight => knight.name.toLowerCase().trim() === name.toLowerCase().trim() !== undefined)) {
            dispatch(setKnightError('Invalid data'))
            return;
        }
        if (!isInteger(age)) {
            dispatch(setKnightError('age must be an integer'))
            return;
        }
        dispatch(addKnight())
    }

    return (
        <main>
            <header>
                <h1>The knights of the round table</h1>
                <p>Number of knights: {knights.length}</p>
            </header>
            <div id={'content'}>
                <div id={"inputGroup"}>
                    <input type={"text"} onChange={handleChange} value={name}/>
                    <input type={"number"} onChange={handleChange} value={age}/>
                    <button onClick={handleKnightSubmit}>Add</button>
                    {error !== "" && <p style={{color: "red"}}>{error}</p>}
                </div>
                <div id={"list"}>
                    <h4>List</h4>
                    {
                        knights.length > 0 ?
                            knights.map(knight =>
                            <div key={knight.id}>
                                <span>{knight.name}</span>
                                <span>age: {knight.age} ans</span>
                            </div>
                            ):
                            <p>No knights</p>
                    }
                </div>
                </div>
        </main>
)
}

export default Knights;
