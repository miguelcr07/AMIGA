package es.udc.paproject.backend.rest.dtos;

import java.time.LocalDate;
import java.util.List;

public class ParticipantDto {

    private Long id;
    private String name;
    private String surnames;
    private String dni;
    private String nie;
    private String pas;
    private String phone;
    private String email;
    private String sex;
    private LocalDate birthDate;
    private LocalDate datePi;
    private LocalDate interviewPi;
    private List<KidDto> kids;
    private Long countryId;
}
