package com.swadha.spashtam.applicantinterview.model;
import lombok.*;

import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.SqlResultSetMapping;
import javax.persistence.Table;
import javax.validation.Valid;

import org.hibernate.annotations.Where;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

// import antlr.collections.List;
@Entity
@Setter
@NoArgsConstructor
@Table(name = "APPLICANT_INTERVIEW")
@JsonIgnoreProperties({"hibernateLazyInitilizer", "handler", "applicantInterviewDetailsModel"})
@Where(clause = "del_flag = 'N'")
public class ApplicantInterviewDetailsModel {

    @Id
    @Column(name  = "application_id")
    private String applicantId;

    @Valid
    @OneToMany(mappedBy = "applicantInterviewDetailsModel",cascade = CascadeType.ALL)
    private List<ApplicantQuestionDetailsModel> applicantQuestionDetailsModels;


    @Column(name = "applicant_name")
    private String applicantName;

    @Column(name = "interviewer_name")
    private String interviewerName;
    
     @Column(name = "del_flag")
     private char delFlag = 'N';
}
