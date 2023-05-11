package es.udc.paproject.backend.rest.controllers;

import es.udc.paproject.backend.model.services.ParticipantService;
import es.udc.paproject.backend.rest.dtos.ParticipantDto;
import es.udc.paproject.backend.rest.dtos.ParticipantSummaryDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/participant")
public class ParticipantController {

    @Autowired
    private ParticipantService participantService;

    @GetMapping("/get")
    ResponseEntity<List<ParticipantSummaryDto>> getListParticipants() {
        return ResponseEntity.ok(participantService.getParcipants());
    }

    @GetMapping("/{id}")
    ResponseEntity<ParticipantDto> getParticipant(@PathVariable Long id,
                                                  @Param("year") int year) {
        return participantService.getParcipipant(id, year).map(
                        ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/save")
    ResponseEntity<ParticipantDto> saveParticipant(@RequestBody ParticipantDto participantDto){
        return ResponseEntity.ok(participantService.saveParticipant(participantDto));
    }
}
