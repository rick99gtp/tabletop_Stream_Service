import React from 'react';

function ScoreSheetRow(props) {
    
    var sheetRowStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(18, 1fr)",
        gridTemplateRows: "1fr"
    };

    let listOfColors = [];

    listOfColors.push(props.rowBgColor0);
    listOfColors.push(props.rowBgColor1);
    listOfColors.push(props.rowBgColor2);
    listOfColors.push(props.rowBgColor3);
    listOfColors.push(props.rowBgColor4);
    listOfColors.push(props.rowBgColor5);
    listOfColors.push(props.rowBgColor6);
    listOfColors.push(props.rowBgColor7);
    listOfColors.push(props.rowBgColor8);
    listOfColors.push(props.rowBgColor9);
    listOfColors.push(props.rowBgColor10);
    listOfColors.push(props.rowBgColor11);
    listOfColors.push(props.rowBgColor12);
    listOfColors.push(props.rowBgColor13);
    listOfColors.push(props.rowBgColor14);
    listOfColors.push(props.rowBgColor15);
    listOfColors.push(props.rowBgColor16);
    listOfColors.push(props.rowBgColor17);

    let imgList = [];

    for(let i=0; i < 18; i++) {
        imgList.push({display: "flex", position: 'relative', justifyContent: "center", alignItems: "center", backgroundColor: listOfColors[i]});
    }

    return (
        <div style={sheetRowStyle}>
            <div style={imgList[0]} >
                <img src={props.bgimage0} alt="fff" />
                <div className="centertext">
                    {props.centertext0}
                </div>
                <div className="firstbasetext">
                    {props.firstbasetext0}
                </div>
                <div className="secondbasetext">
                    {props.secondbasetext0}
                </div>
                <div className="thirdbasetext">
                    {props.thirdbasetext0}
                </div>
                <div className="homebasetext">
                    {props.homebasetext0}
                </div>
            </div>
            <div style={imgList[1]} >
                <img src={props.bgimage1} alt="fff" />
                <div className="centertext">
                    {props.centertext1}
                </div>
                <div className="firstbasetext">
                    {props.firstbasetext1}
                </div>
                <div className="secondbasetext">
                    {props.secondbasetext1}
                </div>
                <div className="thirdbasetext">
                    {props.thirdbasetext1}
                </div>
                <div className="homebasetext">
                    {props.homebasetext1}
                </div>
            </div>
            <div style={imgList[2]} >
                <img src={props.bgimage2} alt="fff" />
                <div className="centertext">
                    {props.centertext2}
                </div>
                <div className="firstbasetext">
                    {props.firstbasetext2}
                </div>
                <div className="secondbasetext">
                    {props.secondbasetext2}
                </div>
                <div className="thirdbasetext">
                    {props.thirdbasetext2}
                </div>
                <div className="homebasetext">
                    {props.homebasetext2}
                </div>
            </div>
            <div style={imgList[3]} >
                <img src={props.bgimage3} alt="fff" />
                <div className="centertext">
                    {props.centertext3}
                </div>
                <div className="firstbasetext">
                    {props.firstbasetext3}
                </div>
                <div className="secondbasetext">
                    {props.secondbasetext3}
                </div>
                <div className="thirdbasetext">
                    {props.thirdbasetext3}
                </div>
                <div className="homebasetext">
                    {props.homebasetext3}
                </div>
            </div>
            <div style={imgList[4]} >
                <img src={props.bgimage4} alt="fff" />
                <div className="centertext">
                    {props.centertext4}
                </div>
                <div className="firstbasetext">
                    {props.firstbasetext4}
                </div>
                <div className="secondbasetext">
                    {props.secondbasetext4}
                </div>
                <div className="thirdbasetext">
                    {props.thirdbasetext4}
                </div>
                <div className="homebasetext">
                    {props.homebasetext4}
                </div>
            </div>
            <div style={imgList[5]} >
                <img src={props.bgimage5} alt="fff" />
                <div className="centertext">
                    {props.centertext5}
                </div>
                <div className="firstbasetext">
                    {props.firstbasetext5}
                </div>
                <div className="secondbasetext">
                    {props.secondbasetext5}
                </div>
                <div className="thirdbasetext">
                    {props.thirdbasetext5}
                </div>
                <div className="homebasetext">
                    {props.homebasetext5}
                </div>
            </div>
            <div style={imgList[6]} >
                <img src={props.bgimage6} alt="fff" />
                <div className="centertext">
                    {props.centertext6}
                </div>
                <div className="firstbasetext">
                    {props.firstbasetext6}
                </div>
                <div className="secondbasetext">
                    {props.secondbasetext6}
                </div>
                <div className="thirdbasetext">
                    {props.thirdbasetext6}
                </div>
                <div className="homebasetext">
                    {props.homebasetext6}
                </div>
            </div>
            <div style={imgList[7]} >
                <img src={props.bgimage7} alt="fff" />
                <div className="centertext">
                    {props.centertext7}
                </div>
                <div className="firstbasetext">
                    {props.firstbasetext7}
                </div>
                <div className="secondbasetext">
                    {props.secondbasetext7}
                </div>
                <div className="thirdbasetext">
                    {props.thirdbasetext7}
                </div>
                <div className="homebasetext">
                    {props.homebasetext7}
                </div>
            </div>
            <div style={imgList[8]} >
                <img src={props.bgimage8} alt="fff" />
                <div className="centertext">
                    {props.centertext8}
                </div>
                <div className="firstbasetext">
                    {props.firstbasetext8}
                </div>
                <div className="secondbasetext">
                    {props.secondbasetext8}
                </div>
                <div className="thirdbasetext">
                    {props.thirdbasetext8}
                </div>
                <div className="homebasetext">
                    {props.homebasetext8}
                </div>
            </div>
            <div style={imgList[9]} >
                <img src={props.bgimage9} alt="fff" />
                <div className="centertext">
                    {props.centertext9}
                </div>
                <div className="firstbasetext">
                    {props.firstbasetext9}
                </div>
                <div className="secondbasetext">
                    {props.secondbasetext9}
                </div>
                <div className="thirdbasetext">
                    {props.thirdbasetext9}
                </div>
                <div className="homebasetext">
                    {props.homebasetext9}
                </div>
            </div>
            <div style={imgList[10]} >
                <img src={props.bgimage10} alt="fff" />
                <div className="centertext">
                    {props.centertext10}
                </div>
                <div className="firstbasetext">
                    {props.firstbasetext10}
                </div>
                <div className="secondbasetext">
                    {props.secondbasetext10}
                </div>
                <div className="thirdbasetext">
                    {props.thirdbasetext10}
                </div>
                <div className="homebasetext">
                    {props.homebasetext10}
                </div>
            </div>
            <div style={imgList[11]} >
                <img src={props.bgimage11} alt="fff" />
                <div className="centertext">
                    {props.centertext11}
                </div>
                <div className="firstbasetext">
                    {props.firstbasetext11}
                </div>
                <div className="secondbasetext">
                    {props.secondbasetext11}
                </div>
                <div className="thirdbasetext">
                    {props.thirdbasetext11}
                </div>
                <div className="homebasetext">
                    {props.homebasetext11}
                </div>
            </div>
            <div style={imgList[12]} >
                <img src={props.bgimage12} alt="fff" />
                <div className="centertext">
                    {props.centertext12}
                </div>
                <div className="firstbasetext">
                    {props.firstbasetext12}
                </div>
                <div className="secondbasetext">
                    {props.secondbasetext12}
                </div>
                <div className="thirdbasetext">
                    {props.thirdbasetext12}
                </div>
                <div className="homebasetext">
                    {props.homebasetext12}
                </div>
            </div>
            <div style={imgList[13]} >
                <img src={props.bgimage13} alt="fff" />
                <div className="centertext">
                    {props.centertext13}
                </div>
                <div className="firstbasetext">
                    {props.firstbasetext13}
                </div>
                <div className="secondbasetext">
                    {props.secondbasetext13}
                </div>
                <div className="thirdbasetext">
                    {props.thirdbasetext13}
                </div>
                <div className="homebasetext">
                    {props.homebasetext13}
                </div>
            </div>
            <div style={imgList[14]} >
                <img src={props.bgimage14} alt="fff" />
                <div className="centertext">
                    {props.centertext14}
                </div>
                <div className="firstbasetext">
                    {props.firstbasetext14}
                </div>
                <div className="secondbasetext">
                    {props.secondbasetext14}
                </div>
                <div className="thirdbasetext">
                    {props.thirdbasetext14}
                </div>
                <div className="homebasetext">
                    {props.homebasetext14}
                </div>
            </div>
            <div style={imgList[15]} >
                <img src={props.bgimage15} alt="fff" />
                <div className="centertext">
                    {props.centertext15}
                </div>
                <div className="firstbasetext">
                    {props.firstbasetext15}
                </div>
                <div className="secondbasetext">
                    {props.secondbasetext15}
                </div>
                <div className="thirdbasetext">
                    {props.thirdbasetext15}
                </div>
                <div className="homebasetext">
                    {props.homebasetext15}
                </div>
            </div>
            <div style={imgList[16]} >
                <img src={props.bgimage16} alt="fff" />
                <div className="centertext">
                    {props.centertext16}
                </div>
                <div className="firstbasetext">
                    {props.firstbasetext16}
                </div>
                <div className="secondbasetext">
                    {props.secondbasetext16}
                </div>
                <div className="thirdbasetext">
                    {props.thirdbasetext16}
                </div>
                <div className="homebasetext">
                    {props.homebasetext16}
                </div>
            </div>
            <div style={imgList[17]} >
                <img src={props.bgimage17} alt="fff" />
                <div className="centertext">
                    {props.centertext17}
                </div>
                <div className="firstbasetext">
                    {props.firstbasetext17}
                </div>
                <div className="secondbasetext">
                    {props.secondbasetext17}
                </div>
                <div className="thirdbasetext">
                    {props.thirdbasetext17}
                </div>
                <div className="homebasetext">
                    {props.homebasetext17}
                </div>
            </div>
        </div>
        
    );
}

export default ScoreSheetRow;