var formattedName = HTMLheaderName.replace("%data%", "Ganga Bhavani");
var formattedRole = HTMLheaderRole.replace("%data%", "Front-end Webdeveloper");

$("#header").append(formattedName);
$("#header").append(formattedRole);

var bio = {
	"name" : "Ganga Bhavani",
	"role" : "Front-end Webdeveloper",
	"contactinfo" : {
		"email" : "m.gangabhavani@gmail.com",
		"mobile" : 2038722244,
		"github" : "https://github.com/gangb",
		"twitter" : "https://twitter.com/mgangabhavani",
		"location" : "fairfield" },
	"pictureURL" : "images/me.jpg",
	"welcomemessage" : "Hello",
	"skills" : ["HTML", "CSS", "JS", "AJAX"]
};

$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contactinfo["email"]);

var work = {
	"currentjob" : "homemaker",
	"employer" : "athome",
	"yearsworked" : "8 years",
	"city" : "fairfield"
};

education["schoolname"] = "CUNY";
education["years"] = ["2009","2010","2011"];
education["city"] = "New york";

$("#main").append(work["currentjob"]);
$("#main").append(education.schoolname);

var education = {
	"schools" : [
		{
			"Level" : "Masters",
			"schoolname" : "HCU",
			"city" : "Hyderabad",
			"years" : "2002 - 2004"
		}
		,

		{
			"Level" : "Bachelors",
			"schoolname" : "St.Joseph's college for women",
			"city" : "Visakhapatnam",
			"years" : "1999 - 2002"
		}
	]
};