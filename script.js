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

const AllSkills = [
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
const form = document.getElementById("form"); // Get the form element

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
  if (event.key === "Enter" || event.key === ",") {
    const tag = tagInput.value.replace(/,/g, "").trim();
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

updateTagList();

// Event listener for form submission
function GenerateCV() {
  // Populate Person object
  Person.fullName = document.getElementById("fullName").value;
  Person.email = document.getElementById("email").value;
  Person.mobileNumber = document.getElementById("mobileNumber").value;
  Person.dob = document.getElementById("dob").value;

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

  // Populate AcademicDetails
  const academicDetail = {
    degree: document.getElementById("degree").value,
    institute: document.getElementById("university").value,
    year: document.getElementById("completion-year").value,
    course: document.getElementById("course-title").value,
  };
  Person.academicDetails.push(academicDetail);

  // Populate Work Experiences
  // Populate Work Experiences
  const workExperience = {
    company: document.getElementById("company-name").value,
    position: document.getElementById("job-position").value,
    from: document.getElementById("date-from").value,
    to: document.getElementById("date-to").value,
    location: document.getElementById("location").value,
  };
  Person.workExperiences.push(workExperience);

  // Do something with the populated Person object, such as displaying it or sending it to a server.
  console.log(Person);
}

// map all skills to the left box
