import React from 'react';
import ReactPlayer from 'react-player';
import './Trailer.css';
import {faClose} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Trailer = ({ ytTrailerId, onClose }) => {
    if (!ytTrailerId) return null;

    return (
        <div className="trailer-modal-overlay">
            <div className="trailer-modal-content">
                {/*<button className="close-button" onClick={onClose}>Close</button>*/}
                <FontAwesomeIcon className="close-button" icon={faClose} onClick={onClose} />
                <ReactPlayer
                    controls={true}
                    playing={true}
                    url={`https://www.youtube.com/watch?v=${ytTrailerId}`}
                    width='100%'
                    height='100%'
                />
            </div>
        </div>
    );
};

export default Trailer;

/*
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Trailer.css';
import React, { useState } from 'react';

const Trailer = () => {

    let params = useParams();
    let key = params.ytTrailerId;
    const [showPlayer, setShowPlayer] = useState(true);

    const handleClose = () => {
        setShowPlayer(false);
    };

    return (
        <div className="react-player-container">
            {showPlayer && key != null ? (
                <div className="player-wrapper">
                    <button className="close-button" onClick={handleClose}>Close</button>
                    <ReactPlayer
                        controls={true}
                        playing={true}
                        url={`https://www.youtube.com/watch?v=${key}`}
                        width='100%'
                        height='100%'
                    />
                </div>
            ) : null}
        </div>
        /!*<div className="react-player-container">
            {(key != null) ?
                <ReactPlayer controls="true" playing={true} url={`https://www.youtube.com/watch?v=${key}`} width='100%'
                             height='100%'/> : null}
        </div>*!/
    )
}

export default Trailer
*/
