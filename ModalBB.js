import React from 'react';

class ModalBB extends React.Component {
    render() {
        if(!this.props.show) {
            return null;
        }

        return (
            <div className="modal" id="modal">
                <h1>WALK!</h1>
                <div className="modal-buttons">
                    <div className="btn modal-bb" onClick={this.props.result1}>
                        BB
                    </div>
                    <div className="btn btn-orange modal-bb" onClick={this.props.result2}>
                        IBB
                    </div>
                </div>
                <div className="btn modal-cancel" onClick={this.props.close}>
                    Cancel
                </div>
            </div>
        );
    }
}

export default ModalBB;