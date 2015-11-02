var work = {
	"jobs": [

		{
			"job": "Front-end webdeveloper",
			"employer": "Enterpi",
			"title": "Jr. Front-end webdeveloper",
			"location": "Hyderabad, India",
			"dates": "2002-2004",
			"description": "Front-End Developer in an internet marketing and advertising company. Produced product infrastructure. Designed and developed client-side interactive features. Connected the front-end engineering team with other groups."
		},

		{
			"job" : "Front-end webdeveloper",
			"employer": "Softsystems",
			"title" : "sr. Front-end webdeveloper",
			"location" : "Hyderabad, India",
			"dates" : "2004-2006",
			"description" : "Front-End Developer in a markeing and advertising agency. Developed and SEO websites for clients using web tech like HTML5, CSS3, JavaScript, Wordpress, LAMP, etc"
		}


	],

	"display": function () {

		for (job in  work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
			var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedWorkDates);
			$(".work-entry:last").append(formattedWorkDescription);
			}

	}


};

work.display();

var projects = {
	"projects": [
        {
            "title": "POS Tagging in Telugu",
            "dates": "2005-2006",
            "description": "Tagging words with the associated part of speech tags for corpus learning in various projects like wordsense disambiguation, parsing and named entity recognition. First stage of tagging is implemented in PERL and the second stage manually.",
            "images": [
            	"images/image1.jpg",
                "images/image1.png",
                "images/image2.png"

                ]
        },
        {
            "title": "Parsing in Telugu",
            "dates": "2006-2007",
            "description": "Tagging words with the associated semantic role(karaka in Paninan Grammar) for corpus learning in Parsing Project.",
            "images": [
                "images/image1.jpg",
                "images/image2.jpg",

            ]
        }
    ],

    "display": function () {
    	var projectsLength = projects.projects.length;
    	for (var project=0; project<projectsLength; project++) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);


			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			var imagesLength = projects.projects[project].images.length;
			for(var i=0; i<imagesLength;i++)
			{

				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[i]);
				$("#projectImages").append(HTMLprojectStart);
				$(".project-entry:last").append(formattedProjectImage);

				//var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[1]);
				//$(".projectsRightTwo").append(formattedProjectImage);
			}

		}

	}

  };
projects.display();

var	bio = {
		"name": "GangaBhavani Manthini",
		"role": "Front-end webdeveloper",
		"contacts": {
			"email": "m.gangabhavani@gmail.com",
			"mobile": "203-872-2244",
			"github": "gangab",
			"twitter": "@mgangabhavani",
			//"blog": "http://okeokaaasa.blogspot.com",
			"location": "Fairfield, CT"
		},
		"welcomeMessage": "Hello",
		"skills": ["HTML","CSS", "JAVASCRIPT"],
		"bioPic": "images/profilepic.jpg",

		"display": function() {
			var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
			$("#text").prepend(formattedRole);
			var formattedName = HTMLheaderName.replace("%data%", bio.name);
			$("#text").prepend(formattedName);
			for(contact in bio.contacts)	{
				var formattedContactGeneric = HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", bio.contacts[contact]);
				$("#topContacts").append(formattedContactGeneric);
				var formattedContactGeneric = formattedContactGeneric.replace("gray-text", "blue-text" );
				$("#footerContacts").append(formattedContactGeneric);

			}

			var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
			$("#image").prepend(formattedBioPic);


			$("#skills").append(HTMLskillsStart);
			var arrayLength = bio.skills.length;

			for(var i=0; i<arrayLength; i++){
				var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills1").append(formattedSkills);

			}
		}
	};

	function inName(name){
				var name = name.trim().split(" ");
				console.log(name);
				name[0] = name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();;
				name[1] = name[1].toUpperCase();


				return name[0]+ " "+name[1];
			}
	$("#main").append(internationalizeButton);

bio.display();
$("#mapDiv").append(googleMap);



var education = {
			"schools": [
			{
			"name": "Internation Institute of Information Technology",
			"location": "Hyderabad",
			"degree": "PG Diploma",
			"majors": "Computational Linguistics",
			"dates": "2007",
			"url": "https://www.iiit.ac.in/"
			},
			{
			"name": "Hyderabad Central University",
			"location": "Hyderabad",
			"degree": "MA",
			"majors": "Linguistics",
			"dates": "2004",
			"url": "http://www.uohyd.ac.in/"
			},
			{
			"name": "St.Joseph's college for women",
			"location": "Visakhapatnam",
			"degree": "B.A",
			"majors": ["English Literature", "psychology", "political Science"],
			"dates": "2002",
			"url": "http://www.stjosephsvizag.com/"
			}
			],

			"onlineCourses":[
			{
				"title": "Introduction to computer programming",
				"school": "MIT",
				"dates": "2014",
				"url": "https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-5"
			},

			{
				"title": "programming-foundations-with-python",
				"school": "Udacity",
				"dates": "2014",
				"url": "https://www.udacity.com/course/programming-foundations-with-python--ud036"
			},

			{ 	"title": "Intro to HTML and CSS",
				"school": "Udacity",
				"dates": "2015",
				"url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
			},
			{ 	"title": "Javascript Basics",
				"school": "Udacity",
				"dates": "2015",
				"url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
			}

			],

	"display": function () {

		$("#education").append(HTMLschoolStart);

		for (school in  education.schools) {

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors )

			var finalSchoolName = formattedSchoolName+formattedSchoolDegree;
			var finalDateLocation = formattedSchoolDates+formattedSchoolLocation;

			$(".education-entry:last").append(finalSchoolName);
			$(".education-entry:last").append(finalDateLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			}


		$(".education-entry:last").append(HTMLonlineClasses);



		for (course in  education.onlineCourses) {
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

			var formattedTitleSchool = formattedOnlineTitle+formattedOnlineSchool;

			$(".education-entry:last").append(formattedTitleSchool);
			$(".education-entry:last").append(formattedOnlineDates)
			$(".education-entry:last").append(formattedOnlineUrl);

			}

		}

	};
education.display();

