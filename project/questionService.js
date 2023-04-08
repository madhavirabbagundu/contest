package com.swadha.spashtam.applicantinterview.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.swadha.spashtam.applicantinterview.model.ApplicantInterviewDetailsModel;
import com.swadha.spashtam.applicantinterview.model.ApplicantQuestionDetailsModel;
import com.swadha.spashtam.applicantinterview.repository.ApplicantQuestionDetailsRepo;

import java.util.List;
@Service
public class ApplicantQuestionDetailsService {
    @Autowired
    private ApplicantQuestionDetailsRepo applicantQuestionDetailsRepo;

    public List<ApplicantQuestionDetailsModel> getApplicantQuestionDetailsModels() {
        List<ApplicantQuestionDetailsModel>applicantQuestionDetailsModels = applicantQuestionDetailsRepo.findAll();
        return applicantQuestionDetailsModels;
    }

    
    public ApplicantQuestionDetailsModel addApplicantQuestionDetailsModel(ApplicantQuestionDetailsModel applicantQuestionDetailsModel){

        applicantQuestionDetailsModel.setDelFlag('N');
        return applicantQuestionDetailsRepo.save(applicantQuestionDetailsModel);
    }
}
