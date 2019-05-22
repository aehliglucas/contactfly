import React from 'react';

export default class contactList extends React.Component {
    render() {
        return(
            <div className="panel" id="contactList">
                <div className="contactCard">
                    <img src={avatar}></img>
                    <h1>{name}</h1>
                    <h2>{status}</h2>
                </div>   
            </div>
        );
    }
}
