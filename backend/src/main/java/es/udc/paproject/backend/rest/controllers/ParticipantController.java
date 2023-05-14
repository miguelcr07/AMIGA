package es.udc.paproject.backend.rest.controllers;

import es.udc.paproject.backend.model.services.ParticipantService;
import es.udc.paproject.backend.rest.dtos.ParticipantDto;
import es.udc.paproject.backend.rest.dtos.ParticipantSummaryDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
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
                                                  @RequestParam("year") int year) {
        return participantService.getParcipipant(id, year).map(
                        ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/save")
    ResponseEntity<ParticipantDto> saveParticipant(@RequestBody @Validated ParticipantDto participantDto){
        return ResponseEntity.ok(participantService.saveParticipant(participantDto));
    }

    @PutMapping("/update")
    ResponseEntity<ParticipantDto> updateParticipant(@RequestBody ParticipantDto participantDto){
        ParticipantDto participantDto1 = participantService.updateParticipant(participantDto);

        if(participantDto1 == null)
            return ResponseEntity.notFound().build();
        else
            return ResponseEntity.ok(participantDto1);
    }
}
