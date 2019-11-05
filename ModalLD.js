import React from 'react';

class ModalLD extends React.Component {
    render() {
        if(!this.props.show) {
            return null;
        }
        return (
            <div className="modal" id="modal">
                <h1>LINE DRIVE!</h1>
                <div className="modal-buttons">
                    <div className="btn btn-orange" onClick={this.props.result1}>
                        P
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
                    <div className="btn btn-orange" onClick={this.props.result7}>
                        LF
                    </div>
                    <div className="btn btn-orange" onClick={this.props.result8}>
                        CF
                    </div>
                    <div className="btn btn-orange" onClick={this.props.result9}>
                        RF
                    </div>                    
                </div>
                <div className="btn modal-cancel" onClick={this.props.close}>
                    Cancel
                </div>
            </div>
        );
    }
}

export default ModalLD;