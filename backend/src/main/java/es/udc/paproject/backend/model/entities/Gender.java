package es.udc.paproject.backend.model.entities;

public enum Gender {
    H("Hombre"), M("Mujer");

    private String value;

    private Gender(String value) { this.value = value;}

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
