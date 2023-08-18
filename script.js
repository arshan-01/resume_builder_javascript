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

  // Do something with the populated Person object, such as displaying it or sending it to a server.
  console.log(Person);
  GenerateResume();
}

const AddMoreAcademic = () => {
  // Populate AcademicDetails
  const academicDetail = {
    degree: document.getElementById("degree").value,
    institute: document.getElementById("university").value,
    year: document.getElementById("completion-year").value,
    course: document.getElementById("course-title").value,
  };
  Person.academicDetails.push(academicDetail);

  // Reset the form
  document.getElementById("degree").value = "";
  document.getElementById("university").value = "";
  document.getElementById("completion-year").value = "";
  document.getElementById("course-title").value = "";
};

// Add Experience

const AddMoreExperience = () => {
  // Populate Work Experiences
  const workExperience = {
    company: document.getElementById("company-name").value,
    position: document.getElementById("job-position").value,
    from: document.getElementById("date-from").value,
    to: document.getElementById("date-to").value,
    location: document.getElementById("location").value,
  };
  Person.workExperiences.push(workExperience);

  // Reset the form
  document.getElementById("company-name").value = "";
  document.getElementById("job-position").value = "";
  document.getElementById("date-from").value = "";
  document.getElementById("date-to").value = "";
  document.getElementById("location").value = "";
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
      <strong>Skills:</strong>
      ${Person.skills
        .map((skill) => `<span class="badge badge-info">${skill}</span>`)
        .join("")}
    </p>
    <p>
      <strong>Interested Industries:</strong>
      ${Person.interestedIndustries
        .map((Industry) => `<span class="badge badge-info">${Industry}</span>`)
        .join("")}
    </p>
  </section>

  <!-- EXPERIENCE --------------------------------------------->
  <section id="experience" class="container">
    <h1>Experience</h1>
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
    <h1>Academic Details</h1>
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
