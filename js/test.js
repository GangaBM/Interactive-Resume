var projects = {
	 "projects": [
        {
            "title": "POS Tagging in Telugu",
           // "title": "Research Assistant",
            "dates": "2005-2006",
            "description": "Tagging words with the associated part of speech tags for corpus learning in various projects like wordsense disambiguation, parsing and named entity recognition. First stage of tagging is implemented in PERL and the second stage manually.",
            "images": [
                "images/image1.png",
                "images/image2.png"

            ]
        },
        {
            "title": "Parsing in Telugu",
            //"title": "Research Assistant",
            "dates": "2006-2007",
            "description": "Tagging words with the associated semantic role(karaka in Paninan Grammar) for corpus learning in Parsing Project.",
            "images": [
                "images/image1.png",
                "images/image2.png"
            ]
        }
    ],

    "display": function () {

	for (project in  projects.projects) {
		$("#projects-left").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

		//$(".project-entry:last").append(formattedProjectTitle);
		//$(".project-entry:last").append(formattedProjectDates);
		//$(".project-entry:last").append(formattedProjectDescription);


		for i in projects.projects[project].images {
			formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[i]);
			//$("#projects-right").append(HTMLprojectStart);
			//$(".project-entry:last").append(formattedProjectImage);
            return formattedProjectImage;
		}
	}
	}

  };

  projects.display();