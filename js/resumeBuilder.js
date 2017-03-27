var bio = {
	"name"	: "Adel AlMutairi",
	"role"	: "Web Developer",
	"contacts"	: {
		"mobile"	: "0500330501", 
		"email"	: "3adelma@gmil.com",
		"github"	: "3adelma",
		"twitter"	: "@adelma2016",
		"location"	: "Riyadh"
	},
	"welcomeMessage" : "welcomeMessage welcomeMessage",
	"skills" : ["programming","Web Developer","JS",".Net Developer"],
	"bioPic": "images/fry.jpg",
	display : function (){

		var formattedName = HTMLheaderName.replace("%data%",bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
		var formattedWecomeMessage= HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
		var formattedPic = HTMLbioPic.replace("%data%",bio.bioPic);

		$("#header").prepend(formattedPic);
		$("#header").prepend(formattedWecomeMessage);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		var formattedMobil = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

		var iStrings = ["#topContacts","#footerContacts"];
		for(var i=0,id ; i<iStrings.length ; i++){
			id=iStrings[i];
			$(id).append(formattedMobil);
			$(id).append(formattedEmail);
			$(id).append(formattedGithub);
			$(id).append(formattedTwitter);
			$(id).append(formattedLocation);
		}	

		$("#header").append(HTMLskillsStart);

		for(var skill=0 ; skill <bio.skills.length ; skill++){
			var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}

};

var education = {
	"schools":[
	{
		"name"	: "Qassim University, College of Computer",
		"location"	: "Buraidah, Qassim,KSA",
		"degree": "BA",
		"dates"	: "2008 - 2013",
		"major"	: ["CS"],
		"url"	: "http://www.qu.edu.sa/en/Pages/Home.aspx"
	},
	{
		"name"	: "King Saud university, Comuter Collage",
		"location"	: "Riyadh, Ksa",
		"degree": "Masters",
		"major"	: ["CS"],
		"dates"	: "2013 - 2015",
		"url"	: "http://ksu.edu.sa/en"
	}
	],
	"onlineCourses" : [
	{
		"title"	: "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"dates"	: 2014,
		"url"	: "https://www.udacity.com/"

	}
	],
	display : function (){
		$("#education").append(HTMLschoolStart);

		education.schools.forEach(function(school){
			var formattedSchoolName	= HTMLschoolName.replace("#",school.url);
			formattedSchoolName = formattedSchoolName.replace("%data%", school.name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
			var formattedschoolMajor = HTMLschoolMajor.replace("%data%", school.major);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",school.location);

			var formattedSchoolNameDegree =  formattedSchoolName + formattedSchoolDegree ;
			$(".education-entry:last").append(formattedSchoolNameDegree);

			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedschoolMajor);
			$(".education-entry:last").append(formattedSchoolLocation);

		});

		$(".education-entry:last").append(HTMLonlineClasses);

		education.onlineCourses.forEach(function(onlineCourse){
			var formattedTitle 	= HTMLonlineTitle.replace("#", onlineCourse.url);
			formattedTitle 	= formattedTitle.replace("%data%", onlineCourse.title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
			var formattedDates 	= HTMLonlineDates.replace("%data%", onlineCourse.dates);
			var formattedURL 	= HTMLonlineURL.replace("#", onlineCourse.url);
			formattedURL 	= formattedURL.replace("%data%", onlineCourse.url);

			var formattedTitleSchool = formattedTitle + formattedSchool ;
			$(".education-entry:last").append(formattedTitleSchool);

			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedURL);

		});

	}
};

var work = {
	"jobs" : [
	{

		"employer"	: "Ministry Of Health",
		"title"		: "Web Developer",
		"dates"		: "January 2012" ,
		"description": "Web developer description",
		"location"	: "Riyadh, KSA",
		"url"		: "http://www.moh.gov.sa/en/Pages/Default.aspx"
	},
	{
		"employer"	: "Qatar Airways",
		"title"		: "Sales Executive",
		"dates"		: "2012 - January 1, 2014",
		"description": "Qatar Airways Sales description aaaaaaaa",
		"location"	: "Buraidah, KSA",
		"url"		: "http://www.qatarairways.com/sa/en/homepage.page"
	}],
	display : function(){

		$("#workExperience").append(HTMLworkStart);
		for(var job=0 ; job < work.jobs.length ; job++){
			
			var formattedEmployer = HTMLworkEmployer.replace("#",work.jobs[job].url);
			formattedEmployer = formattedEmployer.replace("%data%",work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			var formattedLocation =	HTMLworkLocation.replace("%data%", work.jobs[job].location);
			
			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDescription);

		}
	}
};

var projects = {
	"projects": [
	{
		"title"		: "Sample Project 1",
		"url"		: "https://www.codecademy.com/en/tracks/projects",
		"dates"		: "2014",
		"description": "Sample project 1 description description",
		"images"	: ["https://d13yacurqjgara.cloudfront.net/users/65867/screenshots/1140744/open-web-platform-ios-icons_1x.jpg","https://i2.wp.com/webdesignledger.com/wp-content/uploads/2013/05/tips.02.jpg?w=970"]
	}
	],
	display : function(){

		for(var project=0 ; project < projects.projects.length ; project++){
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("#", projects.projects[project].url);
			formattedTitle = formattedTitle.replace("%data%", projects.projects[project].title);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			
			$(".project-entry:last").append(formattedTitle);
			$(".project-entry:last").append(formattedDates);
			$(".project-entry:last").append(formattedDescription);

			for(var image=0 ; image < projects.projects[project].images.length ; image++){	
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}			
		}
	}
};

$("#mapDiv").append(googleMap);

bio.display();
education.display();

work.display();
projects.display();