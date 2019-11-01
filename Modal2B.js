import React from 'react';

class Modal2B extends React.Component {
    render() {
        let result1ClassName = 'btn single-button-inactive';
        let result2ClassName = 'btn single-button-inactive';
        let result3ClassName = 'btn single-button-inactive';

        if(!this.props.show) {
            return null;
        }

        if(this.props.highlight_2b_stay_at_third) {
            result1ClassName = 'btn single-button-selected';
        }
        else {
            result1ClassName = 'btn single-button-active';
        }

        console.log(result1ClassName);

        if(this.props.highlight_2b_scores) {
            result2ClassName = 'btn single-button-selected';
        }
        else {
            result2ClassName = 'btn single-button-active';
        }

        if(this.props.highlight_2b_out_at_home) {
            result3ClassName = 'btn single-button-selected';
        }
        else {
            result3ClassName = 'btn single-button-active';
        }

        return (
            <div className="modal" id="show1b">
                <h1>DOUBLE!</h1>
                <div className="modal-buttons">
                    <div className={result1ClassName} onClick={this.props.result1}>
                        Runner On 1st stays at third.
                    </div>
                    <div className={result2ClassName} onClick={this.props.result2}>
                        Runner On 1st Scores!
                    </div>
                    <div className={result3ClassName} onClick={this.props.result3}>
                        Runner On 1st thrown OUT at home!
                    </div>
                </div>
                <div className="modal-buttons">
                    <div onClick={this.props.cancel} className="btn">
                        Cancel
                    </div>
                    <div onClick={this.props.ok} className="btn">
                        OK
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal2B;