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
                        <h2>Verbruik</h2>

                    </div> 
                </div>
                <div className="tilesInnerContainer">
                    <div className="tile4x4" id="tile4x4Left">
                        <div>
                            <h2>Punten</h2>
                            <p>3457</p>
                        </div>
                    </div>
                    <div className="tile4x4" id="tile4x4Right">
                        <div>
                            <h2>Avatar</h2>
                            <p>Afbeelding</p>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default Tiles
