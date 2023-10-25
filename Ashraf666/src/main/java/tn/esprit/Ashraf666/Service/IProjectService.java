package tn.esprit.Ashraf666.Service;

import tn.esprit.Ashraf666.Entities.Club;


import java.util.Date;
import java.util.List;

public interface IProjectService {

    Club addClub (Club pr);

    Club updateClub (Club pr);

    List<Club> retrieveAllClubs();

    Club retrieveClub (Integer idClub);

    void removeClub(Integer idClub);




}
