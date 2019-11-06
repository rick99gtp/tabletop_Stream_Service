import React from 'react';

class ModalGB extends React.Component {
    render() {
        if(!this.props.show) {
            return null;
        }

        let outs_made_1 = [];
        let outs_made_2 = [];
        let runners_advance = [];

        // which position fielded the ball - set the buttons
        if(this.props.pos === 1) {
            if(this.props.outs === 2) {
                outs_made_1 = ['1-3'];
            }
            else {
                // bases loaded
                if(this.props.runners[0] !== 99 && this.props.runners[1] !== 99 && this.props.runners[2] !== 99) {
                    outs_made_1 = ['1-2', '1-3', '1-4', '1-5', '1-6', '1-2-3 DP'];

                    if(this.props.thrown_to === 1) {
                        // pitcher throws to catcher for one out only
                        // all other runners advance
                        runners_advance = ['Advance to second', 'Advance to third', 'Out at home'];
                        // **************** NEED TO MAKE RUNNER BUTTONS INACTIVE ***************
                    }
                    else if(this.props.thrown_to === 2) {
                        // pitcher throws to 1st for one out only
                        // all other runners advance
                        runners_advance = ['Advance to second', 'Advance to third', 'Scores'];
                        // **************** NEED TO MAKE RUNNER BUTTONS INACTIVE ***************
                    }
                    else if(this.props.thrown_to === 3) {
                        // pitcher throws to 2nd for one out only
                        // all other runners advance
                        runners_advance = ['Out at second', 'Advance to third', 'Scores'];
                        // **************** NEED TO MAKE RUNNER BUTTONS INACTIVE ***************
                    }
                    else if(this.props.thrown_to === 4) {
                        // pitcher throws to 3rd for one out only
                        // all other runners advance
                        runners_advance = ['Advance to second', 'Out at third', 'Scores'];
                        // **************** NEED TO MAKE RUNNER BUTTONS INACTIVE ***************
                    }
                    else if(this.props.thrown_to === 5) {
                        // pitcher throws to shortstop 2nd for one at second only
                        // all other runners advance
                        runners_advance = ['Out at second', 'Advance to third', 'Scores'];
                        // **************** NEED TO MAKE RUNNER BUTTONS INACTIVE ***************
                    }
                    else {
                        // pitcher throws home, then on to 1st for the double play
                        if(this.props.outs === 0) {
                            runners_advance = ['Advance to second', 'Advance to third', 'Out at home'];
                        }
                    }
                }
                outs_made_1 = ['1-2','1-3','1-4','1-5','1-6'];
                outs_made_2 = ['1-2-3 DP', '1-6-3 DP', '1-4-3 DP'];

                
            }
        }
        else if(this.props.pos === 2) {
            if(this.props.outs === 2) {
                outs_made_1 = ['2-3'];
            }
            else {
                outs_made_1 = ['2-3','2-4','2-5','2-6','2-4-3 DP', '2-6-3 DP'];
            }
        }
        else if(this.props.pos === 3) {
            if(this.props.outs === 2) {
                outs_made_1 = ['3U', '3-1'];
            }
            else {
                outs_made_1 = ['3U', '3-1', '3-2', '3-4', '3-5', '3-6'];
                outs_made_2 = ['3-2-3 DP', '3-4-3 DP', '3-4-1 DP', '3-6-1 DP', '3-6-3 DP'];
            }
        }
        else if(this.props.pos === 4) {
            if(this.props.outs === 2) {
                outs_made_1 = ['4-3', '4-6'];
            }
            else {
                outs_made_1 = ['4-2', '4-3', '4-5', '4-6', '4-6-3 DP'];
            }
        }
        else if(this.props.pos === 5) {
            if(this.props.outs === 2) {
                outs_made_1 = ['5U', '5-3', '5-4'];
            }
            else {
                outs_made_1 = ['5U', '5-2', '5-4', '5-2-3 DP', '5-4-3 DP', '5-4-3 TP'];
            }
        }
        else if(this.props.pos === 6) {
            if(this.props.outs === 2) {
                outs_made_1 = ['6-3', '6-4'];
            }
            else {
                outs_made_1 = ['6-2', '6-3', '6-4', '6-5', '6-4-3 DP'];
            }
        }

        // runners on base
        // if there are 2 outs, then it doesn't matter what happened to the runners
        if(this.props.outs < 2) {
            
        }

        return (
            <div className="modal" id="modal">
                <h1>GROUNDBALL!</h1>
                <div className="gb-choices">
                    <div className="gb-modal">
                        <div>
                            FIELDED
                        </div>
                        <div className="btn btn-orange" onClick={this.props.result1}>
                            P
                        </div>
                        <div className="btn btn-orange" onClick={this.props.result2}>
                            C
                        </div>
                        <div className="btn btn-orange" onClick={this.props.result3}>
                            1B
                        </div>
                        <div className="btn btn-orange" onClick={this.props.result4}>
                            2B
                        </div>
                        <div className="btn btn-orange" onClick={this.props.result5}>
                            3B
                        </div>
                        <div className="btn btn-orange" onClick={this.props.result6}>
                            SS
                        </div>               
                    </div>
                    <div className="gb-modal">
                        <div className="outs-made" id="pitcher-outs-made">
                            OUT(S) MADE
                        </div>
                        <div className="btn btn-orange" onClick={this.props.result1}>
                            {outs_made_1[0]}
                        </div>
                        <div className="btn btn-orange" onClick={this.props.result2}>
                            {outs_made_1[1]}
                        </div>
                        <div className="btn btn-orange" onClick={this.props.result3}>
                            {outs_made_1[2]}
                        </div>
                        <div className="btn btn-orange" onClick={this.props.result4}>
                            {outs_made_1[3]}
                        </div>
                        <div className="btn btn-orange" onClick={this.props.result5}>
                            {outs_made_1[4]}
                        </div>
                        <div className="btn btn-orange" onClick={this.props.result6}>
                            {outs_made_1[5]}
                        </div>               
                    </div>
                    <div className="gb-modal">
                        <div className="outs-made" id="pitcher-outs-made">
                            OUT(S) MADE
                        </div>
                        <div className="btn btn-orange" onClick={this.props.result1}>
                            {outs_made_2[0]}
                        </div>
                        <div className="btn btn-orange" onClick={this.props.result2}>
                            {outs_made_2[1]}
                        </div>
                        <div className="btn btn-orange" onClick={this.props.result3}>
                            {outs_made_2[2]}
                        </div>
                        <div className="btn btn-orange" onClick={this.props.result3}>
                            {outs_made_2[3]}
                        </div>
                        <div className="btn btn-orange" onClick={this.props.result3}>
                            {outs_made_2[4]}
                        </div>
                        <div className="btn btn-orange" onClick={this.props.result3}>
                            {outs_made_2[5]}
                        </div>
                    </div>
                    
                    <div className="gb-modal">
                        <div>
                            RUNNER
                        </div>
                        <div className="btn btn-orange" onClick={this.props.result1}>
                            P
                        </div>
                        <div className="btn btn-orange" onClick={this.props.result2}>
                            C
                        </div>
                        <div className="btn btn-orange" onClick={this.props.result3}>
                            1B
                        </div>
                        <div className="btn btn-orange" onClick={this.props.result4}>
                            2B
                        </div>
                        <div className="btn btn-orange" onClick={this.props.result5}>
                            3B
                        </div>
                        <div className="btn btn-orange" onClick={this.props.result6}>
                            SS
                        </div>               
                    </div>
                </div>
                <div className="gb-buttons">
                    <div className="btn btn-blue" onClick={this.props.close}>
                        CANCEL
                    </div>
                    <div className="btn btn-orange">
                        OK
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalGB;