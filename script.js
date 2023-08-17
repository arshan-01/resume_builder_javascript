console.log("Hello, world!");

// 1.	Make a JavaScript program which will get a person’s details and generate CV. The form to get candidate’s inform must have the following features:
// a.	Complete name.
// i.	Complete name will be a required field.
// b.	Mobile Number.
// i.	Mobile number will be a required field
// c.	Email.
// i.	Email should be according to email format.
// d.	Date of birth (DOB):
// i.	DOB should be selected from a calendar.
// e.	Current Address
// f.	Permanent Address
// i.	Both addresses will have 3 fields, address (input=text), city (input=text) country (dropdown of country)
// ii.	Address and city will be a required fields.
// g.	Academic details:
// i.	Should be in proper format to added details required to show on the CV.
// ii.	There should be ‘New Academic Details’ button which will show a form to enter academic details. Then there would be a ‘Add Academic Details‘ button in the bottom of that form. When click on ‘Add Academic Details’ button the entered data will be a added to a table for view, so that the candidate can to delete or edit it.
// h.	Skills:
// i.	There would be a list of all skills in the left box and the candidate will fill the box of selected skills on the right side by clicking on a skill in left box. And if the candidate clicks a skill in the right box (where we have selected skills) that skill will be removed from the selected skill list.
// i.	Interested industries:
// i.	There would be a list of all industries in the left box and the candidate will fill the box of selected industries on the right side by clicking on an industry in left box. And if the candidate clicks an industry in the right box (where we have selected industries) that industry will be removed from the selected industry list.
// j.	List of work experiences:
// i.	Should be in proper format to added details required to show on the CV.
// ii.	There should be ‘New Work Experience’ button which will show a form to enter work experience. Then there would be a ‘Add Work Experience ‘ button in the bottom of that form. When click on ‘Add Work Experience’ button the entered data will be a added to a table for view, so that the candidate can to delete or edit it.
// k.	Generate CV button, clicking on which generate a proper CV at the bottom of the form.

const Person = {
  fullName: "",
  mobileNumber: "",
  email: "",
  dob: "",
  currentAddress: "",
  permanentAddress: "",
  academicDetails: [],
  skills: [],
  interestedIndustries: [],
  workExperiences: [],
};

const AcademicDetails = {
  degree: "",
  institute: "",
  year: "",
  percentage: "",
};

const Skill = {
  name: "",
};

const InterestedIndustry = {
  name: "",
};

const WorkExperience = {
  company: "",
  designation: "",
  from: "",
  to: "",
  description: "",
};

const PersonForm = document.getElementById("person-form");
const AcademicDetailsForm = document.getElementById("academic-details-form");
const SkillForm = document.getElementById("skill-form");

const PersonFormSubmitButton = document.getElementById(
  "person-form-submit-button"
);
const AcademicDetailsFormSubmitButton = document.getElementById(
  "academic-details-form-submit-button"
);
const SkillFormSubmitButton = document.getElementById(
  "skill-form-submit-button"
);

const PersonFormResetButton = document.getElementById(
  "person-form-reset-button"
);
const AcademicDetailsFormResetButton = document.getElementById(
  "academic-details-form-reset-button"
);
const SkillFormResetButton = document.getElementById("skill-form-reset-button");

const PersonFormInputs = document.querySelectorAll("#person-form input");
const AcademicDetailsFormInputs = document.querySelectorAll(
  "#academic-details-form input"
);

const PersonFormSelects = document.querySelectorAll("#person-form select");
const AcademicDetailsFormSelects = document.querySelectorAll(
  "#academic-details-form select"
);

const PersonFormTextareas = document.querySelectorAll("#person-form textarea");
const AcademicDetailsFormTextareas = document.querySelectorAll(
  "#academic-details-form textarea"
);

const PersonFormErrorMessages = document.querySelectorAll(
  "#person-form .error-message"
);
const AcademicDetailsFormErrorMessages = document.querySelectorAll(
  "#academic-details-form .error-message"
);

const PersonFormErrorMessagesText = document.querySelectorAll(
  "#person-form .error-message-text"
);
const AcademicDetailsFormErrorMessagesText = document.querySelectorAll(
  "#academic-details-form .error-message-text"
);

const PersonFormErrorMessagesIcons = document.querySelectorAll(
  "#person-form .error-message-icon"
);
const AcademicDetailsFormErrorMessagesIcons = document.querySelectorAll(
  "#academic-details-form .error-message-icon"
);

const PersonFormErrorMessagesCloseButtons = document.querySelectorAll(
  "#person-form .error-message-close-button"
);
const AcademicDetailsFormErrorMessagesCloseButtons = document.querySelectorAll(
  "#academic-details-form .error-message-close-button"
);

const PersonFormErrorMessagesCloseIcons = document.querySelectorAll(
  "#person-form .error-message-close-icon"
);
const AcademicDetailsFormErrorMessagesCloseIcons = document.querySelectorAll(
  "#academic-details-form .error-message-close-icon"
);

const PersonFormErrorMessagesCloseIconSpans = document.querySelectorAll(
  "#person-form .error-message-close-icon span"
);
const AcademicDetailsFormErrorMessagesCloseIconSpans =
  document.querySelectorAll(
    "#academic-details-form .error-message-close-icon span"
  );
