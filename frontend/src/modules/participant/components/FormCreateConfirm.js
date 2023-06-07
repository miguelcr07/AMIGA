import React from "react";
import {useNavigate} from "react-router-dom";
import { Button, Typography } from "@mui/material";
import './Confirm.css';
import * as actions from "../actions";
import {useDispatch} from "react-redux";

const FormCreateConfirm = ({ formData }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = () => {

        dispatch(actions.createParticipant(formData,
            navigate('/'), null));

    }

    return (
        <div className="container_confirm">
            <Button variant="contained" color="primary" size="large">
                Descargar PDF
            </Button>
            <Typography variant="h6" align="center">
                Esperando firma del documento
            </Typography>
            <Button variant="contained" color="primary" size="large" onClick={handleSubmit}>
                Guardar
            </Button>
        </div>
    );
};

export default FormCreateConfirm;

