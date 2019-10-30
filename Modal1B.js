import React from 'react';

class Modal1B extends React.Component {

    render() {
        let result1ClassName = 'btn single-button-inactive';
        let result2ClassName = 'btn single-button-inactive';
        let result3ClassName = 'btn single-button-inactive';
        let result4ClassName = 'btn single-button-inactive';
        let result5ClassName = 'btn single-button-inactive';
        let result6ClassName = 'btn single-button-inactive';

        if(!this.props.show) {
            return null;
        }

        if(this.props.runners[0] !== 99) {
            if(this.props.highlight_1b_stay_at_second) {
                result1ClassName = 'btn single-button-selected';
            }
            else {
                result1ClassName = 'btn single-button-active';
            }

            if(this.props.highlight_1b_advance_to_third) {
                result2ClassName = 'btn single-button-selected';
            }
            else {
                result2ClassName = 'btn single-button-active';
            }

            if(this.props.highlight_1b_out_at_third) {
                result3ClassName = 'btn single-button-selected';
            }
            else {
                result3ClassName = 'btn single-button-active';
            }
        }
        
        if(this.props.runners[1] !== 99) {
            if(this.props.highlight_1b_stay_at_third) {
                result4ClassName = 'btn single-button-selected';
            }
            else {
                result4ClassName = 'btn single-button-active';
            }

            if(this.props.highlight_1b_scores) {
                result5ClassName = 'btn single-button-selected';
            }
            else {
                result5ClassName = 'btn single-button-active';
            }

            if(this.props.highlight_1b_out_at_home) {
                result6ClassName = 'btn single-button-selected';
            }
            else {
                result6ClassName = 'btn single-button-active';
            }
        }

        return (
            <div className="modal" id="show1b">
                <h1>SINGLE!</h1>
                <div className="modal-buttons">
                    <div className={result1ClassName} onClick={this.props.result1}>
                        Runner On 1st stay at 2nd.
                    </div>
                    <div className={result2ClassName} onClick={this.props.result2}>
                        Runner On 1st advances to third.
                    </div>
                    <div className={result3ClassName} onClick={this.props.result3}>
                        Runner On 1st thrown out at third.
                    </div>
                    <div  className={result4ClassName} onClick={this.props.result4}>
                        Runner On 2nd stays at third.
                    </div>
                    <div  className={result5ClassName} onClick={this.props.result5}>
                        Runner On 2nd scores!
                    </div>
                    <div  className={result6ClassName} onClick={this.props.result6}>
                        Runner On 2nd thrown OUT at home!
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

export default Modal1B;