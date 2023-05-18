import React from "react";

const FormPage3 = ({ formData, setFormData, previousPage }) => {
    const handleChange = (e) => {
        setFormData({ ...formData, page3: e.target.value });
    };

    return (
        <div>
            <h1>Formulario - Página 3</h1>
            <input type="text" value={formData.page3} onChange={handleChange} />
            <button onClick={previousPage}>Anterior</button>
            <button>Enviar</button>
        </div>
    );
};

export default FormPage3;