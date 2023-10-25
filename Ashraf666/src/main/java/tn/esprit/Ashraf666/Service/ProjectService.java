package tn.esprit.Ashraf666.Service;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.Ashraf666.Entities.Club;

import tn.esprit.Ashraf666.Repository.ProjectRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class ProjectService implements IProjectService {

    @Autowired
    ProjectRepository projectrepo;

    @Override
    public Club addClub(Club pr) {
        return projectrepo.save(pr);
    }

    @Override
    public Club updateClub(Club pr) {
        return projectrepo.save(pr);
    }

    @Override
    public List<Club> retrieveAllClubs() {
        return (List<Club>) projectrepo.findAll();
    }

    @Override
    public Club retrieveClub(Integer idClub) {
        return projectrepo.findById(idClub).get();
    }


    @Override
    public void removeClub(Integer idClub) {
        projectrepo.deleteById(idClub);
    }



}







