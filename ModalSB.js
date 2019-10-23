import React from 'react';

class ModalSB extends React.Component {
    render() {
        let sb1ClassName = "";
        let sb2ClassName = "";
        let sb3ClassName = "";
        let stealBtnClassName = "";

        console.log(this.props);

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
                sb1ClassName = "btn modal-sb-light";
            }
            else {
                sb1ClassName = "btn modal-cancel";
            }
        }

        if(this.props.baserunner1 !== 99) {
            if(this.props.highlight2) {
                sb2ClassName = "btn modal-sb-light";
            }
            else {
                sb2ClassName = "btn modal-cancel";
            }
        }

        if(this.props.baserunner2 !== 99) {
            if(this.props.highlight3) {
                sb3ClassName = "btn modal-sb-light";
            }
            else {
                sb3ClassName = "btn modal-cancel";
            }
        }

        return (
            <div className="modal" id="modal">
                <h1>STOLEN BASE!</h1>
                <div className="modal-buttons">
                    <div className={sb1ClassName} onClick={this.props.result1}>
                        STEAL 2ND
                    </div>
                    <div className={sb2ClassName} onClick={this.props.result2}>
                        STEAL 3RD
                    </div>
                    <div className={sb3ClassName} onClick={this.props.result3}>
                        STEAL HOME
                    </div>
                </div>
                <div className={stealBtnClassName} onClick={this.props.close}>
                    STEAL!
                </div>
                <div className="btn modal-cancel" onClick={this.props.close}>
                    Cancel
                </div>
            </div>
        );
    }
}

export default ModalSB;