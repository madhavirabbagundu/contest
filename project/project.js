
import { Component, Input, NgModule, OnInit, ViewChild } from "@angular/core";
import { Validators } from "@angular/forms";
// import  studentData  from '../student.json'; 
import {
    FormGroup,
    AbstractControl,
    FormControl,
    FormArray,
    NgForm,
    FormBuilder,

  } from "@angular/forms";
  import { NgxSpinnerService } from "ngx-spinner";
  import { ApplicantDetailService } from '../service/applicantDetail.service';
  import { ApplicantAssesmentService } from "../service/applicantAssesment.service";
  import { SnackBarService } from '../service/snack-bar.service';
  import { disableDebugTools, DomSanitizer } from "@angular/platform-browser";
  // import { ApplicationDetailsModel } from "../model/applicantDetails.model";
  import { Router } from "@angular/router";
  import { ApplicantHomeDocs } from "../service/applicantHomeDocs.service";
  import { StudentService } from "../service/student.service";
//   import { NgxSpinnerService } from "ngx-spinner";
  import { ModalDialog } from '../shared/modal.component';
import { DriverProvider } from "protractor/built/driverProviders";
  

  


  interface Student{
    id:Number;
    name:String;
  }
@Component({
    selector:'applicant-root',
    templateUrl:'./applicant.component.html',
    styleUrls:['./applicant.component.css'],
    
})
// var arr = ['A']
export class ApplicantComponent implements OnInit{ 
readonly activeStepClass = 'active';
readonly nonActiveStepClass = "disabled";
@Input() mode: string;
// oneCheckChecked = true;



ApplicantData:any=[
  
  {
    id:0,name:"What is the toughest challenge you faced so far?How did you overcome the same",
   grade:null,

  },

  {
    id:1,name:'How do you  clear your doubts in studies?',
  grade:null,

},
  {
    id:2,name:"Give us the pattern of the next exam you will face. Also give us a plan for how you would prepare for this exam.",
  grade:null,

},
  {
    id:3,name:'give us the few areas of difficulty in your studies.Also tell us how you intend to overcome the same?',
  grade:null,


},
  {
    id:4,name:'What is the goal you have set for yourself this year?Give us an indication of steps to acheive the same?',
  grade:null,


},

  
]

// checkboxChecked = false;


public interviewform: FormGroup;
wizardStepStyle: string[];
wizardStepExpandState: boolean[];
myForm: any;
PerfectAnswer;
IdealAnswer;
BadAnswer;
StandardAnswer;
RightDirection;
tickChecked = false;
gradesOfApplicant=false;
applicantInterview :any[];
selectedValue:String;
data;
previewData;
gradesDropDown: any;




constructor(
    private dt: FormBuilder,
    public spinnerService: NgxSpinnerService,
    private sanitizer: DomSanitizer,
    private modelDispenser3: StudentService,
    private messageService: SnackBarService,
    private modelDispenser: ApplicantDetailService,
    private modelDispenser1: ApplicantAssesmentService,
    private modelDispenser2: ApplicantHomeDocs,
    private router: Router,

  ) {

    this.wizardStepStyle = [
      this.activeStepClass,
      this.nonActiveStepClass,


    ]
    // console.log(check)
    // console.log(this.applicantInterview)
  var data = this.ApplicantData[0]
  var data1 = data.checkboxes
  // console.log(data1)
    // console.log(this.check)
console.log(this.ApplicantData.selectGrade)
    
    this.wizardStepExpandState = [true,false];
    this.createInterview();
    
    // this.createInterview1();


  }
 
  ngOnInit():void{
    this.gradesDropDown = this.getDrpDownValues('33');
    this.applicantInterview = [];
    console.log(this.getDrpDownValues('33'))


  }
  createInterview(){
    this.interviewform = this.dt.group({
      // interviewData:[this.applicantInterview],
        applicantName:[null,[Validators.minLength(3)]],
        interviewerName:[null,[Validators.minLength(3)]],
        applicationNumber:[null,[Validators.maxLength(15)]],
        grade:[null]
        
    })
  }

  submit(){
    if(this.interviewform.valid){
      this.previewData = this.applicantInterview
      console.log("total data:",this.previewData)

      console.log(this.interviewform)
    }
    console.log(this.interviewform.get('checkValue').value)
    console.log(this.interviewform.get('applicationNumber').value)
    console.log(this.interviewform.get('interviewerName').value)


  }
  changeSection(index: number) {

    for (let i = 0; i < this.wizardStepExpandState.length; i++) {
      if (index - 1 === i) {
        this.wizardStepExpandState[i] = true; 
        this.wizardStepStyle[i] = this.activeStepClass;
      } else {
        this.wizardStepExpandState[i] = false;
        this.wizardStepStyle[i] = this.nonActiveStepClass;
      }
    }
    
  }

  getDrpDownValues(referenceCode): any {
    let dropDownValues = [];
    this.modelDispenser3.getReferenceValueList(referenceCode).subscribe(referenceValue => {
      const referenceValues = referenceValue[0].referenceValues;
      for (let referenceValue of referenceValues) {
        dropDownValues.push({
          label: referenceValue.referenceCodeDisplayValue,
          value: referenceValue.referenceCodeValue
        })
      }
    },
      error => {
      });

    return dropDownValues;
  }
  selectQuestion(e){
 
  let ControlGrade = this.interviewform.get('grade').value;
  e.grade = ControlGrade;
  console.log(ControlGrade+"this is the form control")
  // this.ApplicantData.push("grade:  "+this.interviewform.get('grade').value)
  
  this.applicantInterview.push(e)
  // console.log("array Data  :", this.applicantInterview)
  
 
 console.log(this.applicantInterview)
  
  }
 
 
    


  



}