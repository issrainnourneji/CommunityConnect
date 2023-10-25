package tn.esprit.Ashraf666.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name="Club")
@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor
public class Club implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idClub")
    private int idClub;
    @Column(name = "nomClub")
    private String NomClub;
    @Temporal(TemporalType.DATE)
    private Date dateCreationC;

    @Enumerated(EnumType.STRING)
    private Categorie categorie;

    private Boolean actif;

}
