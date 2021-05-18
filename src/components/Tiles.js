const Tiles = () => {
    return (
        <div className="main">
            <div className="tilesContainer" id="tilesContainerLeft">
                <div className="tile8x8">
                    <h2>Challeges</h2>
                    <div class="quest">
                        <h3 class="quest_header">This is quest 1.</h3>
                        <div class="hide_quest"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div>
                        <div class="bar">
                            <div class="filling gas"></div>
                        </div>
                        <button class="quest_button gas">Claimen</button>
                        <div class="line"></div>
                        <div class="arrow"></div>
                    </div>

                    <div class="quest">
                        <h3 class="quest_header">This is quest 2.</h3>
                        <div class="hide_quest"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div>
                        <div class="bar">
                            <div class="filling water"></div>
                        </div>
                        <button class="quest_button water">Claimen</button>
                        <div class="line"></div>
                        <div class="arrow"></div>
                    </div>
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
                        <h2>Punten</h2>
                        <p>3457</p>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default Tiles
