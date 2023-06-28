import React from 'react';
import {List, ListItem, ListItemIcon, ListItemText, Paper} from '@mui/material';
import {Edit, AddCircle, NoteAdd, Visibility} from '@mui/icons-material';
import "./Participant.css";
import {useNavigate} from "react-router-dom";

const Menu = ({user}) => {
    const navigate = useNavigate();
    const date = new Date();
    const handleEdit = () => {
        navigate('/participant/edit');
    }

    const handleViewData = () => {
        navigate('/participant/data');
    }

    const handleNewAnnualData = () => {
        navigate('/participant/newAnnualData');
    }

    const handleObservationForm = () => {
        navigate("/participant/observationForm");
    }

    return (
        <Paper className="toolbar">
            <List>
                <ListItem button onClick={handleViewData}>
                    <ListItemIcon>
                        <Visibility/>
                    </ListItemIcon>
                    <ListItemText primary="Ver Datos"/>
                </ListItem>
                <ListItem button disabled={date.getFullYear() !== Math.max(...user.yearList)} onClick={handleEdit}>
                    <ListItemIcon>
                        <Edit/>
                    </ListItemIcon>
                    <ListItemText primary="Editar Datos"/>
                </ListItem>
                <ListItem button disabled={ Math.max(...user.yearList) === date.getFullYear()} onClick={handleNewAnnualData}>
                    <ListItemIcon>
                        <AddCircle/>
                    </ListItemIcon>
                    <ListItemText primary="Nueva Inscripción Anual"/>
                </ListItem>
                <ListItem button onClick={handleObservationForm}>
                    <ListItemIcon>
                        <NoteAdd/>
                    </ListItemIcon>
                    <ListItemText primary="Añadir Observación"/>
                </ListItem>

            </List>
        </Paper>
    );
};

export default Menu;
