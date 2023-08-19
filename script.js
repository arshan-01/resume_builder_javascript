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

const suggestedSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node",
  "Express",
  "MongoDB",
  "Python",
  "Django",
  "C",
  "C++",
  "Java",
  "PHP",
  "Laravel",
  "MySQL",
  "PostgreSQL",
];

const suggestedIndustries = [
  "Software Development",
  "Web Development",
  "Mobile App Development",
  "Data Science",
  "Machine Learning",
  "Artificial Intelligence",
  "Cloud Computing",
  "DevOps",
  "Cyber Security",
  "Digital Marketing",
  "UI/UX Design",
  "Graphic Design",
  "Game Development",
  "Blockchain",
  "Internet of Things",
  "Augmented Reality",
  "Virtual Reality",
  "Robotics",
];

const Person = {
  fullName: "",
  mobileNumber: "",
  email: "",
  dob: "",
  currentAddress: {
    address: "",
    city: "",
    country: "",
  },
  permanentAddress: {
    address: "",
    city: "",
    country: "",
  },
  academicDetails: [],
  skills: [],
  interestedIndustries: [],
  workExperiences: [],
};

// Handle Skills
const tagList = document.getElementById("tagList");
const tagInput = document.getElementById("tagInput");
const suggestions = document.getElementById("suggestions"); // Suggestions container
const form = document.getElementById("form"); // Get the form element
const form2 = document.getElementById("form2"); // Get the form element

const tags = [];

function updateTagList() {
  tagList.innerHTML =
    Person.skills && Person.skills.length > 0
      ? Person.skills
          .map(
            (tag) => `
        <li class="tag">
          ${tag}
          <span class="remove-tag" onclick="removeTag('${tag}')">&times;</span>
        </li>
      `
          )
          .join("")
      : `<li class="tag">
      No skills added yet
      </li>`;
}

function addTag(tag) {
  if (tag && !Person.skills.includes(tag.trim())) {
    Person.skills.push(tag.trim());
    tagInput.value = "";
    suggestions.innerHTML = ""; // Clear suggestions
    updateTagList();
  }
}

function removeTag(tag) {
  const index = Person.skills.indexOf(tag);
  if (index !== -1) {
    Person.skills.splice(index, 1);
    updateTagList();
  }
}

function handleTagInput(event) {
  const inputSkill = tagInput.value.trim();
  suggestions.innerHTML = ""; // Clear suggestions

  if (inputSkill) {
    const matchingSuggestions = suggestedSkills.filter(
      (skill) =>
        skill.toLowerCase().includes(inputSkill.toLowerCase()) &&
        !Person.skills.includes(skill)
    );

    const suggestionElements = matchingSuggestions.map((suggestion) => {
      const suggestionElement = document.createElement("div");
      suggestionElement.className = "suggestion";
      suggestionElement.textContent = suggestion;
      suggestionElement.addEventListener("click", () => addTag(suggestion));
      return suggestionElement;
    });

    suggestions.innerHTML = "";
    suggestions.append(...suggestionElements);
  }

  if (event.key === "Enter" || event.key === ",") {
    const tag = inputSkill.replace(/,/g, "");
    addTag(tag);
  }
}

function removeAllTags() {
  Person.skills.length = 0;
  updateTagList();
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
});
form2.addEventListener("submit", function (event) {
  event.preventDefault();
});

updateTagList();

// Interested Industries
const industryList = document.getElementById("industryList");
const industryInput = document.getElementById("industryInput");
const industrySuggestions = document.getElementById("IndustrySuggestions"); // Suggestions container for industries

function updateIndustryList() {
  industryList.innerHTML =
    Person.interestedIndustries && Person.interestedIndustries.length > 0
      ? Person.interestedIndustries
          .map(
            (industry) => `
        <li class="industry">
          ${industry}
          <span class="remove-industry" onclick="removeIndustry('${industry}')">&times;</span>
        </li>
      `
          )
          .join("")
      : `<li class="industry">
      No industries added yet
      </li>`;
}

function addIndustry(industry) {
  if (industry && !Person.interestedIndustries.includes(industry.trim())) {
    Person.interestedIndustries.push(industry.trim());
    industryInput.value = "";
    industrySuggestions.innerHTML = ""; // Clear suggestions
    updateIndustryList();
  }
}

function removeIndustry(industry) {
  const index = Person.interestedIndustries.indexOf(industry);
  if (index !== -1) {
    Person.interestedIndustries.splice(index, 1);
    updateIndustryList();
  }
}

function handleIndustryInput(event) {
  const inputIndustry = industryInput.value.trim();
  industrySuggestions.innerHTML = ""; // Clear suggestions

  if (inputIndustry) {
    const matchingSuggestions = suggestedIndustries.filter(
      (industry) =>
        industry.toLowerCase().includes(inputIndustry.toLowerCase()) &&
        !Person.interestedIndustries.includes(industry)
    );

    const suggestionElements = matchingSuggestions.map((suggestion) => {
      const suggestionElement = document.createElement("div");
      suggestionElement.className = "IndustrySuggestion";
      suggestionElement.textContent = suggestion;
      suggestionElement.addEventListener("click", () =>
        addIndustry(suggestion)
      );
      return suggestionElement;
    });

    industrySuggestions.innerHTML = "";
    industrySuggestions.append(...suggestionElements);
  }

  if (event.key === "Enter" || event.key === ",") {
    const industry = inputIndustry.replace(/,/g, "");
    addIndustry(industry);
  }
}

function removeAllIndustries() {
  Person.interestedIndustries.length = 0;
  updateIndustryList();
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

updateIndustryList();

// Event listener for form submission
function GenerateCV() {
  // Populate Person object
  Person.fullName = document.getElementById("fullName").value;
  Person.email = document.getElementById("email").value;
  Person.mobileNumber = document.getElementById("mobileNumber").value;
  Person.dob = document.getElementById("dob").value;
  // Validate

  if (
    Person.fullName == "" ||
    Person.email == "" ||
    Person.mobileNumber == "" ||
    Person.dob == ""
  ) {
    alert("Please fill all the fields");
    return false;
  }

  // Populate Current Address

  const curAddress = document.getElementById("currentAddress").value;
  Person.currentAddress.address = curAddress;
  const curCity = document.getElementById("currentCity").value;
  Person.currentAddress.city = curCity;
  const curCountry = document.getElementById("currentCountry");

  Person.currentAddress.country = curCountry.value;

  // Populate Permanent Address
  const perAddress = document.getElementById("permanentAddress");
  Person.permanentAddress.address = perAddress.value;
  const perCity = document.getElementById("permanentCity");
  Person.permanentAddress.city = perCity.value;
  const perCountry = document.getElementById("permanentCountry");
  Person.permanentAddress.country = perCountry.value;

  if (
    curAddress == "" ||
    curCity == "" ||
    curCountry == "" ||
    perAddress == "" ||
    perCity == "" ||
    perCountry == ""
  ) {
    alert("Please fill address the fields");
    return false;
  }
  // Do something with the populated Person object, such as displaying it or sending it to a server.
  console.log(Person);
  GenerateResume();
}

const Refresh = (academicDetails) => {
  const showAcademic = document.getElementById("showAcademic");
  const academicHeading = document.getElementById("academicHeading");

  console.log(academicDetails);

  showAcademic.innerHTML = "";
  academicDetails.map((academic) => {
    showAcademic.innerHTML += `
    </br>
    <div class="row">
    <div class="col-md-2">
      <p>${academic.degree}</p>
    </div>
    <div class="col-md-3">
      <p>${academic.institute}</p>
    </div>
    <div class="col-md-2">
      <p>${academic.year}</p>
    </div>
    <div class="col-md-3">
      <p>${academic.course}</p>
    </div>
    <div class="col-md-2 d-flex">
    <button class="btn btn-primary" onclick="editAcademic('${academic.id}', event)">Edit</button>
    <button class="btn btn-danger" onclick="removeAcademic('${academic.id}', event)">Remove</button>

    </div>
  </div>
    
    `;
  });
};

let editMode = false;
let editId = "";
const editAcademic = (id, event) => {
  const AcademicButton = document.getElementById("AcademicButton");

  event.preventDefault(); // Prevent form submission behavior
  editMode = true;
  editId = id;
  let academicDetail = Person.academicDetails.find(
    (academic) => academic.id === id
  );

  if (editMode) {
    AcademicButton.innerHTML = "Update";
  }

  // Fill the form with the current academic detail
  document.getElementById("degree").value = academicDetail.degree;
  document.getElementById("university").value = academicDetail.institute;
  document.getElementById("completion-year").value = academicDetail.year;
  document.getElementById("course-title").value = academicDetail.course;
};

// Remove Academic Details
const removeAcademic = (id, event) => {
  event.preventDefault(); // Prevent form submission behavior
  const academicDetails = Person.academicDetails.filter(
    (academic) => academic.id !== id
  );
  console.log(academicDetails);
  Person.academicDetails = academicDetails;
  Refresh(academicDetails);
};

const AddMoreAcademic = () => {
  const degree = document.getElementById("degree").value;
  const institute = document.getElementById("university").value;
  const year = document.getElementById("completion-year").value;
  const course = document.getElementById("course-title").value;
  if (editMode) {
    Person.academicDetails = Person.academicDetails.map((academic) => {
      if (academic.id === editId) {
        return {
          ...academic,
          degree: degree,
          institute: institute,
          year: year,
          course: course,
        };
      }
      return academic;
    });
    AcademicButton.innerHTML = "Add More";
  } else {
    if (degree == "" || institute == "" || year == "" || course == "") {
      alert("Please fill all the fields");
      return false;
    }

    const uuid =
      Math.random().toString(36).substring(2) + Date.now().toString(36);
    console.log(uuid);

    // Populate AcademicDetails
    const academicDetail = {
      id: uuid,
      degree: degree,
      institute: institute,
      year: year,
      course: course,
    };
    Person.academicDetails.push(academicDetail);
  }

  Refresh(Person.academicDetails);
  // Reset edit mode and editId
  editMode = false;
  editId = "";

  // Reset the form
  document.getElementById("degree").value = "";
  document.getElementById("university").value = "";
  document.getElementById("completion-year").value = "";
  document.getElementById("course-title").value = "";
};

const removeExperience = (id, event) => {
  event.preventDefault(); // Prevent form submission behavior
  const experienceDetail = Person.workExperiences.filter(
    (experience) => experience.id !== id
  );
  console.log(experienceDetail);
  Person.workExperiences = experienceDetail;
  RefreshExperience(experienceDetail);
};

//  Refresh Experience
const RefreshExperience = (workExperiences) => {
  const showExperience = document.getElementById("showExperience");
  const experienceHeading = document.getElementById("experienceHeading");

  console.log(workExperiences);

  showExperience.innerHTML = "";
  workExperiences.map((experience) => {
    showExperience.innerHTML += `
    </br>
    <div class="row">
    <div class="col-md-2">
      <p>${experience.company}</p>
    </div>
    <div class="col-md-3">
      <p>${experience.position}</p>
    </div>
    <div class="col-md-2">

      <p>${experience.from}</p>
    </div>
    <div class="col-md-2">
      <p>${experience.to}</p>
    </div>
    <div class="col-md-2">
      <p>${experience.location}</p>

    </div>
    <div class="col-md-1 d-flex">
    <button class="btn btn-primary" onclick="EditExperience('${experience.id}', event)">Edit</button>
    <button class="btn btn-danger" onclick="removeExperience('${experience.id}', event)">Remove</button>

    </div>
  </div>

    `;
  });
};

let editModeExperience = false;
let editIdExperience = "";

const AddMoreExperience = () => {
  const companyName = document.getElementById("company-name").value;
  const jobPosition = document.getElementById("job-position").value;
  const dateFrom = document.getElementById("date-from").value;
  const dateTo = document.getElementById("date-to").value;
  const location = document.getElementById("location").value;

  if (
    companyName == "" ||
    jobPosition == "" ||
    dateFrom == "" ||
    location == ""
  ) {
    alert("Please fill all the fields");
    return false;
  }

  if (editModeExperience) {
    Person.workExperiences = Person.workExperiences.map((experience) => {
      if (editIdExperience === experience.id) {
        return {
          ...experience,
          company: companyName,
          position: jobPosition,
          from: dateFrom,
          to: dateTo,
          location: location,
        };
      }
      return experience;
    });

    editModeExperience = false;
    editIdExperience = "";
    ExperienceButton.innerHTML = "Add More";
  } else {
    const uuid =
      Math.random().toString(36).substring(2) + Date.now().toString(36);

    // Populate Work Experiences
    const workExperience = {
      id: uuid,
      company: companyName,
      position: jobPosition,
      from: dateFrom,
      to: dateTo,
      location: location,
    };
    Person.workExperiences.push(workExperience);
  }

  RefreshExperience(Person.workExperiences);
  // Reset the form
  document.getElementById("company-name").value = "";
  document.getElementById("job-position").value = "";
  document.getElementById("date-from").value = "";
  document.getElementById("date-to").value = "";
  document.getElementById("location").value = "";
};

const EditExperience = (id, event) => {
  event.preventDefault(); // Prevent form submission behavior
  const ExperienceButton = document.getElementById("ExperienceButton");
  editModeExperience = true;
  editIdExperience = id;

  const experience = Person.workExperiences.find(
    (experience) => experience.id === id
  );

  if (editModeExperience) {
    ExperienceButton.innerHTML = " Update";
  }
  // Fill the form with the current experience details
  document.getElementById("company-name").value = experience.company;
  document.getElementById("job-position").value = experience.position;
  document.getElementById("date-from").value = experience.from;
  document.getElementById("date-to").value = experience.to;
  document.getElementById("location").value = experience.location;
};
// Generate Resume

const GenerateResume = () => {
  const resume = document.getElementById("resume");
  resume.innerHTML = `
  
  <!--| ABOUT |--------------------------------------------------->
  <section id="about" class="container">
   
    <h1 class="display-4">${Person.fullName}</h1>
    <p>
      I’m a full-stack web developer with over 16 years of experience. Software development is a fulfilling and rewarding job for me. I love to execute big ideas, and I want to use my talents to solve problems and make life easier for people. I jump at the chance to learn new things. I take great pride in my work and the fact that I create things that others find useful.
    </p>
   
    <p>
  ${Person.skills.length > 0 ? "<strong>Skills:</strong>" : ""}
  ${Person.skills
    .map((skill) => `<span class="badge badge-info">${skill}</span>`)
    .join("")}
</p>

    <p>
    ${
      Person.interestedIndustries.length > 0
        ? " <strong>Interested Industries:</strong>"
        : ""
    }
     
      ${Person.interestedIndustries
        .map((Industry) => `<span class="badge badge-info">${Industry}</span>`)
        .join("")}
    </p>
  </section>

  <!-- EXPERIENCE --------------------------------------------->
  <section id="experience" class="container">
  ${Person.workExperiences.length > 0 ? "<h1>Experience</h1>" : ""}
  
    ${Person.workExperiences
      .map(
        (experience, index) => `
    <div class="card">
      <div class="card-header ${
        index === 0 ? "collapse show" : ""
      }" data-toggle="collapse" data-target="#exp${index + 1}">
        <div class="row">
          <h5 class="col-md-8 mb-0">${experience.position}</h5>
          <em class="col-md-4 text-md-right">${experience.from} - ${
          experience.to
        }</em>
        </div>
      </div>
      <div class="card-block collapse ${index === 0 ? "show" : ""}" id="exp${
          index + 1
        }">
        <h5>${experience.company} - ${experience.location}</h5>
        <p>I’m a full-stack web developer with over 16 years of experience. Software development is a fulfilling and rewarding job for me. I love to execute big ideas, and I want to use my talents to solve problems and make life easier for people. I jump at the chance to learn new things. I take great pride in my work and the fact that I create things that others find useful.</p>
      </div>
    </div>
    `
      )
      .join("")}
  </section>

  <!-- ACADEMIC DETAILS --------------------------------------------->
  <section id="academic-details" class="container">
   ${Person.academicDetails.length > 0 ? "<h1>Academic Details</h1>" : ""}
    <ul>
      ${Person.academicDetails
        .map(
          (academicDetail) => `
          <li>
            <h3>${academicDetail.degree}</h3>
            <p><strong>Institute:</strong> ${academicDetail.institute}</p>
            <p><strong>Year:</strong> ${academicDetail.year}</p>
            <p><strong>Course:</strong> ${academicDetail.course}</p>
          </li>
        `
        )
        .join("")}
    </ul>
  </section>
  <!-- CURRENT AND PERMANENT ADDRESS -------------------------------------------->
  <section id="addresses" class="container">
    <div class="address">
      <h2>Current Address</h2>
      <p><strong>Address:</strong> ${Person.currentAddress.address}</p>
      <p><strong>City:</strong> ${Person.currentAddress.city}</p>
      <p><strong>Country:</strong> ${Person.currentAddress.country}</p>
    </div>
    <div class="address">
      <h2>Permanent Address</h2>
      <p><strong>Address:</strong> ${Person.permanentAddress.address}</p>
      <p><strong>City:</strong> ${Person.permanentAddress.city}</p>
      <p><strong>Country:</strong> ${Person.permanentAddress.country}</p>
    </div>
  </section>
  <!-- CONTACT ----------------------------------------------------->

  <section class="container" id="contact">
    <h1>Contact</h1>
    <div class="row">
      <div class="col-sm-2">Phone:</div>
      <div class="col-sm-4">${Person.mobileNumber}</div>
    </div>
    <div class="row">
      <div class="col-sm-2">Email:</div>
      <div class="col-sm-4"><a href="mailto:${Person.email}">${
    Person.email
  }</a></div>
    </div>
  </section>
  `;
};
