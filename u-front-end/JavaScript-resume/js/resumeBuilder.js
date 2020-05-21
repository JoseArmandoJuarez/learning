var name = "Jose Juarez";
var role = " Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"contacts": {
		"mobile": ": 123-456-7890",
		"email": ": josejuarez.ca@gmail.com",
		"github": ": JoseArmandoJuarez",
		"location": ": Ajax Ontario",
	},
	"welcomeMessage": "Welcome to my resume!",
	"skills": ["HTML", "CSS",  "Video Games",  "Soccer", "Eating"],
	"bioPic": "images/fry.jpg"
};

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedbioPic);
$("#header").append(formattedWelcomeMsg);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);


$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedLocation);

if (bio.skills.length > 0) {
	
	$("#header").append(HTMLskillsStart);
	
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkills);
	
	formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkills);
	
	formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkills);
	
	formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkills);
	
	formattedSkills = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkills);

};

var work = {
	"jobs": [
		{
			"employer": "Not yet",
			"title": " Web Developer",
			"location": "New York",
			"dates": "January 3000 - Future",
			"description": " I would like to make my own website and make small video games"
		},
		{
			"employer": "Career",
			"title": "Game designer",
			"location": "United States",
			"dates": "January 3000 - Future",
			"description": " Make video games for a living and sell them and probably have my own company"
		}
	]
};
function displayWork(){
	for (job in work.jobs) {

		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		
		$(".work-entry:last").append(formattedEmployerTitle);
		
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
displayWork();




var projects = {
	"projects": [
		{
			"title": "My Web Site",
			"dates": "2015-2016",
			"description": " The web site show's some things about me, like what I like to do, whach, play, what I know about HTML, JavaScript, and CSS, etc. <br> This site is just basic, but in the future I will come back and make it look better, and as you can see I havent finish my web site. I haved made other web sites but not as good as this one.",
			"images": ["images/web.png"]
		}
	]
};


for (project in projects.projects) {
	$("#projects").append(HTMLprojectStart);
					
	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);
					
	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);
			
	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);
			
	if (projects.projects[project].images.length > 0){
		for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
		}
	};
};




var education = {
	schools: [
		{
			"name": "Duffins Bay Public School ",
			"location": "Duffins bay public school, ONTARIO",
			"degree": "Primary school, and middle school",
			"major": ["Visual Arts"],
			"dates": "2012-2014",
		},
		{
			"name": "Ajax High School",
			"location": "Ajax ONTARIO",
			"degree": "none",
			"major": [" Canadian Geography", " French", "Fitness"],
			"dates": "2014-2018",
		},
	],
	"onlineCourses": [
		{
			"title": "JavaScript Course",
			"school": "Udacity.com",
			"dates": "February 2017",
			"url": "www.udacity.com"
		},		
	]
};


for (school in education.schools) {
	$("#education").append(HTMLschoolStart);
			
	var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
	$(".education-entry:last").append(formattedName);
			
	var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
	$(".education-entry:last").append(formattedDates);
			
	var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
	$(".education-entry:last").append(formattedLocation);
	
	var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
	$(".education-entry:last").append(formattedMajor);
};

$("#education").append(HTMLonlineClasses);

if (education.onlineCourses){
	for (course in education.onlineCourses) {
			
		$("#education").append(HTMLschoolStart);
			
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		$(".education-entry:last").append(formattedTitle);
			
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedSchool);
			
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedDates);
			
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedURL);
	}
};

$(document).click(function(loc) {
   console.log(loc.pageX, loc.pageY);
});

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	
	return name[0] +" "+name[1];
}

$('#main').append(internationalizeButton);

$("#map-div").append(googleMap);