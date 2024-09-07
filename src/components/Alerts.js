import React from 'react';

function Alerts({ props }) {
    if (!props) {
        return null;
    }

    const { mes, type } = props;

    return (
        <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
            <strong>{mes}</strong>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
}

export default Alerts;
