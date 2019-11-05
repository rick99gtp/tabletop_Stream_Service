import React from 'react';

class ModalCS extends React.Component {
    render() {
        let cs1ClassName = "";
        let cs2ClassName = "";
        let cs3ClassName = "";
        let stealBtnClassName = "";

        if(!this.props.show) {
            return null;
        }

        if(this.props.stealactive) {
            stealBtnClassName = "btn modal-cancel";
        }
        else {
            stealBtnClassName = "btn modal-cancel steal-btn-disabled";
        }

        if(this.props.baserunner0 !== 99) {
            if(this.props.highlight1) {
                cs1ClassName = "btn modal-sb-light";
            }
            else {
                cs1ClassName = "btn modal-cancel";
            }
        }

        if(this.props.baserunner1 !== 99) {
            if(this.props.highlight2) {
                cs2ClassName = "btn modal-sb-light";
            }
            else {
                cs2ClassName = "btn modal-cancel";
            }
        }

        if(this.props.baserunner2 !== 99) {
            if(this.props.highlight3) {
                cs3ClassName = "btn modal-sb-light";
            }
            else {
                cs3ClassName = "btn modal-cancel";
            }
        }

        return(
            <div className="modal" id="modal">
                <h1>CAUGHT STEALING!</h1>
                <div className="modal-buttons">
                    <div className={cs1ClassName} onClick={this.props.result1}>
                        STEAL 2ND
                    </div>
                    <div className={cs2ClassName} onClick={this.props.result2}>
                        STEAL 3RD
                    </div>
                    <div className={cs3ClassName} onClick={this.props.result3}>
                        STEAL HOME
                    </div>
                </div>
                <div className={stealBtnClassName} onClick={this.props.steal}>
                    STEAL!
                </div>
                <div className="btn modal-cancel" onClick={this.props.close}>
                    Cancel
                </div>
            </div>
        )
    }
}

export default ModalCS;