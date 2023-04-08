package com.swadha.spashtam.applicantinterview.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.swadha.spashtam.applicantinterview.model.ApplicantInterviewDetailsModel;
import com.swadha.spashtam.applicantinterview.model.ApplicantQuestionDetailsModel;
import com.swadha.spashtam.applicantinterview.repository.ApplicantInterviewDetailsRepo;

import java.util.List;

@Service
public class ApplicantInterviewDetailsService {
    @Autowired
    private ApplicantInterviewDetailsRepo applicantInterviewDetailsRepo;

    @Autowired
    private ApplicantQuestionDetailsService applicantQuestionDetailsService;

    public List<ApplicantInterviewDetailsModel> getAll() {
        return applicantInterviewDetailsRepo.findAll();
    }

    public ApplicantInterviewDetailsModel addInterview(ApplicantInterviewDetailsModel applicantInterviewDetailsModel) {

        applicantInterviewDetailsModel.setDelFlag('N');
        ApplicantInterviewDetailsModel applicantInterviewDetailsModelSaved = applicantInterviewDetailsRepo.save(applicantInterviewDetailsModel);

        List<ApplicantQuestionDetailsModel> applicantQuestionSavedList = applicantInterviewDetailsModelSaved.getApplicantQuestionDetailsModels();
        for (int i = 0; i < applicantQuestionSavedList.size(); i++) {
            ApplicantQuestionDetailsModel applicantQuestionDetailsModels = applicantQuestionSavedList.get(i);
            applicantQuestionDetailsModels.setApplicantInterviewDetailsModel(applicantInterviewDetailsModelSaved);
            applicantQuestionDetailsModels.setApplicantId(applicantInterviewDetailsModelSaved.getApplicantId());
            applicantQuestionDetailsService.addApplicantQuestionDetailsModel(applicantQuestionDetailsModels);
        }

        return applicantInterviewDetailsModelSaved;
    }

    // public ApplicantInterviewDetailsModel getApplicantInterviewDetailsModel(String applicantId) {
    //     ApplicantInterviewDetailsModel applicantInterviewData = applicantInterviewDetailsRepo
    //             .findByApplicantId(applicantId);
    //     return applicantInterviewData;
    // }

}

