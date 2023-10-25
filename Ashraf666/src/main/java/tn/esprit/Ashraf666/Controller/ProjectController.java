package tn.esprit.Ashraf666.Controller;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;
import tn.esprit.Ashraf666.Entities.Club;
import tn.esprit.Ashraf666.Service.IProjectService;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;



@AllArgsConstructor
@Slf4j
@RestController
@RequestMapping("controllerProjet")
public class ProjectController {

    @Autowired
    IProjectService clubService ;

    @PostMapping("/add")
    @ResponseBody
    public Club addClub(@RequestBody Club pr) { return clubService.addClub(pr) ;
    }

    @PutMapping ("/update")
    public Club updateClub(@RequestBody Club pr){ return clubService.updateClub(pr);
    }


    @GetMapping("/retrieveAllClubs")
    @ResponseBody
    public List<Club> retrieveAllClubs() {
        return  clubService.retrieveAllClubs();
    }

    @GetMapping("/get/{idClub}")
    public Club getById(@PathVariable("idClub") Integer id){
        return clubService.retrieveClub(id);
    }

    @DeleteMapping("/remove/{idClub}")
    public void removeClub(@PathVariable("idClub") Integer id){ clubService.removeClub(id);
    }



}



