import React from 'react';

const butt = () => {
    // Maybe readjust to needs and add Links
    return (
        <div className="row text-center m-auto p-4">
            <div className="col-md-4">
                <button className="btn btn-primary">Participaton List</button>
            </div>
            <div className="col-md-4">
                <button className="btn btn-danger">Register Here</button>
            </div>
            <div className="col-md-4">
                <button className="btn btn-warning">Event Page</button>
            </div>
        </div>
    );
}
export default butt;