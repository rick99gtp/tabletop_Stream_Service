import React from 'react';

class ModalGB extends React.Component {
    render() {
        if(!this.props.show) {
            return null;
        }

        return (
            <div className="modal" id="modal">
                <h1>GROUNDBALL!</h1>
                <div className="gb-modal">
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
                <div>
                    {this.props.gb_result}
                </div>
                <div className="btn modal-cancel" onClick={this.props.gb_ok}>
                    OK
                </div>
                <div className="btn modal-cancel" onClick={this.props.close}>
                    Cancel
                </div>
            </div>
        );
    }
}

export default ModalGB;