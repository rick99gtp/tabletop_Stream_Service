import React from 'react';

class ModalK extends React.Component {
    render() {
        if(!this.props.show) {
            return null;
        }

        return (
            <div className="modal" id="modal">
                <h1>STRIKEOUT!</h1>
                <div className="modal-buttons">
                    <div className="btn modal-k" onClick={this.props.result1}>
                        K
                    </div>
                    <div className="btn btn-orange modal-reverse-k" onClick={this.props.result2}>
                        K
                    </div>
                    <div className="btn btn-orange modal-dropped">
                        Dropped 3rd Strike
                    </div>
                </div>
                <div className="btn modal-cancel" onClick={this.props.close}>
                    Cancel
                </div>
            </div>
        );
    }
}

export default ModalK;