package com.swadha.spashtam.applicantinterview.model;
import lombok.*;

import java.math.BigInteger;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.JoinFormula;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Getter
@Setter
@Table(name = "APPLICANT_INTERVIEW_QUESTIONS")
@JsonIgnoreProperties({"hibernateLazyInitilizer", "handler", "applicantQuestionDetailsModels"})
public class ApplicantQuestionDetailsModel {

    @Id
    @Column(name = "applicant_question_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int applicantQuetionId;

    @Column(name="question_id")
    private int questionId;

    @Column(name = "application_id" ,insertable = false,updatable = false)
    private String applicantId;

    @Valid
    @ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name = "application_id",referencedColumnName = "application_id")
    private ApplicantInterviewDetailsModel applicantInterviewDetailsModel;

    @Column(name = "question")
    private String question;

    @Column(name = "grade")
    private String grade;

    @Column(name  = "del_flag")
    private char delFlag='N';   
    
}
