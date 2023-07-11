package es.udc.paproject.backend.model.entities;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class WorkInsertion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate date;
    @ManyToOne
    @JoinColumn(name = "workField_id")
    private WorkField workField;
    private String type;
    @ManyToOne
    @JoinColumn(name = "participant_id")
    private Participant participant;
    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public WorkField getWorkField() {
        return workField;
    }

    public void setWorkField(WorkField workField) {
        this.workField = workField;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Participant getParticipant() {
        return participant;
    }

    public void setParticipant(Participant participant) {
        this.participant = participant;
    }
}
