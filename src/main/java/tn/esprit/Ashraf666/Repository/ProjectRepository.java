package tn.esprit.Ashraf666.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import tn.esprit.Ashraf666.Entities.Club;


import java.util.Date;
import java.util.List;
@Repository
public interface ProjectRepository extends JpaRepository<Club, Integer> {



}
