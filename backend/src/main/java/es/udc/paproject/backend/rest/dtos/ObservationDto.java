package es.udc.paproject.backend.rest.dtos;

import es.udc.paproject.backend.model.entities.Observation;

import java.time.LocalDate;

public class ObservationDto {

    private Long id;

    private LocalDate date;

    private String title;

    private String text;

    private Long participant;

    public ObservationDto() {
    }

    public ObservationDto(Observation observation) {
        this.id = observation.getId();
        this.date = observation.getDate();
        this.title = observation.getTitle();
        this.text = observation.getText();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Long getParticipant() {
        return participant;
    }

    public void setParticipant(Long participant) {
        this.participant = participant;
    }
}
