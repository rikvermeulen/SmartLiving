import Chart from "./components/Chart";

const Tiles = () => {
    return (
        <div className="main">
            <div className="tilesContainer" id="tilesContainerLeft">
                <div className="tile8x8">
                    <h2>Challeges</h2>
                </div>
            </div>
            <div className="tilesContainer" id="tilesContainerRight">
                <div className="tilesInnerContainer">
                    <div className="tile8x4">
                        <Chart/>
                    </div> 
                </div>
                <div className="tilesInnerContainer">
                    <div className="tile4x4" id="tile4x4Left">

                    </div>
                    <div className="tile4x4" id="tile4x4Right">
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default Tiles
