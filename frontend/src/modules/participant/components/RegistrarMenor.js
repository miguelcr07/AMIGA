import React, { useState } from "react";
import {TextField, Button, Table, TableHead, TableBody, TableRow,
    TableCell, MenuItem, Select, InputLabel,} from "@mui/material";
import FormControl from "@mui/material/FormControl";

const RegistrarMenor = ({ formData, setFormData }) => {
    const [newChild, setNewChild] = useState({
        sexo: "",
        birthdate: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewChild((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleAddChild = (e) => {
        e.preventDefault();

        // Validar los campos antes de añadir una nueva fila
        if (newChild.sexo.trim() === "" || newChild.birthdate.trim() === "") {
            alert("Por favor, complete ambos campos.");
            return;
        }

        const kidList = formData.kids;
        kidList.push(newChild)
        setFormData({ ...formData, kids: kidList});

        // Restaurar los valores del formulario
        setNewChild({
            sexo: "",
            birthdate: "",
        });
    };

    return (
        <div>

            <form onSubmit={handleAddChild}>
                <div className="row-container">
                    <FormControl
                        className="item">
                        <InputLabel id="kid-label">Sexo menor</InputLabel>
                <Select
                    labelId="kid-label"
                    label="Sexo"
                    name="sexo"
                    value={newChild.sexo}
                    onChange={handleInputChange}
                    required
                >
                    <MenuItem value="H">Masculino</MenuItem>
                    <MenuItem value="M">Femenino</MenuItem>
                </Select>
                    </FormControl>
                <TextField
                    className="item"
                    placeholder="Fecha de nacimiento"
                    label="Fecha de nacimiento"
                    type="date"
                    name="birthdate"
                    value={newChild.birthdate}
                    onChange={handleInputChange}
                    InputLabelProps={{ shrink: true }}
                    required
                />
                <div className="space"></div>
                <Button variant="contained" color="primary" type="submit">
                    Añadir menor
                </Button>
                </div>
            </form>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Sexo</TableCell>
                        <TableCell>Fecha de nacimiento</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {formData.kids.map((child, index) => (
                        <TableRow key={index}>
                            <TableCell>{child.sexo === "H" ? "Masculino" : "Femenino"}</TableCell>

                            <TableCell>{child.birthdate}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default RegistrarMenor;
