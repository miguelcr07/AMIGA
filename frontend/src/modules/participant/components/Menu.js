import React from 'react';
import {List, ListItem, ListItemIcon, ListItemText, Paper} from '@mui/material';
import { Edit, AddCircle, NoteAdd, Gavel } from '@mui/icons-material';
import "./Participant.css";
import {useNavigate} from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate();
    const handleEdit = () => {
        navigate('/participant/edit');
    }

    return (


        <Paper className="toolbar">
            <List>
                <ListItem button onClick={handleEdit}>
                    <ListItemIcon>
                        <Edit />
                    </ListItemIcon>
                    <ListItemText primary="Editar Datos" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <AddCircle />
                    </ListItemIcon>
                    <ListItemText primary="Nueva Inscripción Anual" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <NoteAdd />
                    </ListItemIcon>
                    <ListItemText primary="Añadir Observación" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Gavel />
                    </ListItemIcon>
                    <ListItemText primary="Asesoramiento Jurídico" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Gavel />
                    </ListItemIcon>
                    <ListItemText primary="Asesoramiento Judicial" />
                </ListItem>
            </List>
        </Paper>
    );
};

export default Menu;
