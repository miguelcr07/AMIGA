import React from "react";
import './Confirm.css';
import Typography from "@mui/material/Typography";
import './Participant.css'


import Menu from "./Menu";
import {useSelector} from "react-redux";
import * as userSelector from "../selectors";

const ParticipantDetails = () => {
    const user = useSelector(userSelector.getParticipantData);

    if (!user)
        return null

    return (
        <div className="details">
            <Menu user={user}/>
            <div className="details-body">
                <div className="header-details">
                    <Typography variant="h6" align="center">
                        Datos {user.name + ' ' + user.surnames}
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default ParticipantDetails;
