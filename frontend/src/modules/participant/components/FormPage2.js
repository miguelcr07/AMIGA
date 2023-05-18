import React from "react";

const FormPage2 = ({ formData, setFormData, nextPage, previousPage }) => {
    const handleChange = (e) => {
        setFormData({ ...formData, page2: e.target.value });
    };

    return (
        <div>
            <h1>Formulario - Página 2</h1>
            <input type="text" value={formData.page2} onChange={handleChange} />
            <button onClick={previousPage}>Anterior</button>
            <button onClick={nextPage}>Siguiente</button>
        </div>
    );
};
export default FormPage2;