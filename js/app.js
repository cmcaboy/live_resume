var projectsObservable = null;
var skillsObservable = null;
var educationObservable = null;

var model = {
    projects: [
        {
            label: "HR: Value based Sales",
            category: "Business",
            img: "img/value_based_sales.jpg",
            link: "project/value_based_sales.pdf",
            type: "modal",
            modalDisplay: false,
            visible: true
        },
        {
            label: "Payroll Concession Analysis",
            category: "Business",
            img: "img/payroll_concession_analysis.jpg",
            link: "project/final_presentation_vh2.pdf",
            type: "modal",
            modalDisplay: false,
            visible: true
        },
        {
            label: "Retention Analysis",
            category: "Business",
            img: "img/retention_analysis.png",
            link: "project/retention_analysis.pdf",
            type: "modal",
            modalDisplay: false,
            visible: true
        },
        {
            label: "Data Usage Billing Analysis",
            category: "Business",
            img: "img/data_usage_billing.png",
            link: "project/Data_Usage_Billing.pdf",
            type: "modal",
            modalDisplay: false,
            visible: true
        },
        {
            label: "Frogger Game",
            category: "Development",
            img: "img/frogger.jpg",
            link: "project/frogger",
            type: "link",
            modalDisplay: false,
            visible: true
        },
        {
            label: "Neighborhood Map",
            category: "Development",
            img: "img/neighborhood_map.jpg",
            link: "project/neighborhood",
            type: "link",
            modalDisplay: false,
            visible: true
        },
        {
            label: "Development: TBD",
            category: "Development",
            img: "img/development_tbd.jpg",
            link: "development_tbd",
            type: "modal",
            modalDisplay: false,
            visible: true
        },
        {
            label: "Diamond Analysis",
            category: "Analytics",
            img: "img/diamond.jpg",
            link: "diamond_analysis",
            type: "modal",
            modalDisplay: false,
            visible: true
        },
        {
            label: "Analytics: TBD 1",
            category: "Analytics",
            img: "img/analytics_tbd1.png",
            link: "analytics_tbd1",
            type: "modal",
            modalDisplay: false,
            visible: true
        },
        {
            label: "Analytics: TBD 2",
            category: "Analytics",
            img: "img/analytics_tbd2.jpg",
            link: "analytics_tbd2",
            type: "modal",
            modalDisplay: false,
            visible: true
        },
    ],
    skills: [
    {
        label: "javascript",
        img: "img/javascript.png",
        link: "https://www.javascript.com/"
    },
    {
        label: "HTML",
        img: "img/html5.png",
        link: "https://www.html.com/"
    },
    {
        label: "CSS",
        img: "img/css.jpg",
        link: "https://www.w3.org/Style/Overview.en.html"
    },
    {
        label: "Bootstrap",
        img: "img/bootstrap.png",
        link: "http://getbootstrap.com/"
    },
    {
        label: "Knockoutjs",
        img: "img/knockout.jpg",
        link: "http://knockoutjs.com/"
    },
    {
        label: "Jasmine",
        img: "img/jasmine.png",
        link: "https://jasmine.github.io/"
    },
    {
        label: "R",
        img: "img/R.jpg",
        link: "https://www.r-project.org/"
    },
    {
        label: "Python",
        img: "img/python.jpg",
        link: "https://www.python.org/"
    },
    {
        label: "Pandas",
        img: "img/pandas.png",
        link: "http://pandas.pydata.org/"
    },
    {
        label: "Node",
        img: "img/node.png",
        link: "https://nodejs.org/en/"
    },
    {
        label: "Express",
        img: "img/express.png",
        link: "https://expressjs.com/"
    },
    {
        label: "MongoDB",
        img: "img/mongodb.png",
        link: "https://www.mongodb.com/"
    },
    {
        label: "d3",
        img: "img/d3.jpg",
        link: "https://d3js.org/"
    },
    {
        label: "jQuery",
        img: "img/jQuery.png",
        link: "https://jquery.com/"
    }
    ],
    education: [
    {
        label: "Emory University",
        img: "img/emory.jpg",
        program: "Full Time 2 Year MBA",
        link: "www.emory.edu",
        years: "2014-2016"
    },
    {
        label: "Oklahoma State University",
        img: "img/osu.png",
        program: "BS: Computer Science",
        link: "www.okstate.edu",
        GPA: "3.2",
        years: "2004-2008"
    },
    {
        label: "Udacity",
        img: "img/udacity.jpg",
        program: "Front End Nanodegree",
        link: "www.udacity.com",
        years: "2017"
    },    
    ],
    experience: [
    {
        label: "ADP",
        img: "img/adp.png",
        link: "www.adp.com",
        years: "2015-present",
        visible: true,
        modalDisplay: false,
        description: "Leading Provider of Payroll and Human Capital Solutions; 60,000+ employees",
        location: "Florham Park, NJ",
        roles: [
            {
                role: "Senior Product Manager",
                responsibilities: [
                    "Built the new amendments and agency notice experience within RUN, leading to an annual call reduction of 100k and annual savings of 30M.",
                    "Built the first tax self service tool allowing clients to input their unique tax identification numbers directly into the product rather than engaging the service center.",
                    "Analyzed millions of rows of customer data to find NPS and retention related insights, leading to an improvement in both categories."
                ]
            },
            {
                role: "MBA Strategy Intern",
                responsibilities: [
                    "Built a business campaign to automate the jurisdiction process for client jurisdiction changes to reduce concessions and reduce support time; plan included a sensitivity analysis accounting for savings impact of various automation investments, concession reductions, and support times with an overall projected savings of $3MM YoY.",
                    "Worked with external firm to improve customer satisfaction by identifying root causes behind client concessions; utilized data analysis tools and techniques, such as regression analysis and heat maps, to identify trends in data."
                ]
            }
        ]

    },
    {
        label: "Cerner Corporation",
        img: "img/cerner.jpg",
        link: "www.cerner.com",
        years: "2008-2014",
        visible: true,
        modalDisplay: false,
        description: "Healthcare Information Technology Company with 14K Employees Worldwide",
        location: "Kansas City, MO",
        roles: [
            {
                role: "Technical Project Manager",
                responsibilities: [
                    "Analyzed project plan, available resources, and client technical roadmap and improved implementation strategy for a $40MM client by recommending placing Cerner’s resources in a centralized location, allowing complete utilization of client’s onsite resources, reducing solution deployment time by one year and 1500 man hours",
                    "Led a team of five in deployment of Cerner’s business continuity solutions on all 39 client facilities at Dignity Health, resulting in the realization of a $750K contract; responsible for the project plan, resource allocation, status reports to upper management, project status calls, and onsite meetings."
                ]
            },
            {
                role: "Technology Architect",
                responsibilities: [
                    "Improved Cerner's Read Only solution by altering the activation algorithm to disable underlying clinical tasks rather than switch each end user’s clinical role, resulting in a 50% decrease in implementation time.",
                    "Redesigned Cerner’s local data solution to use Oracle Standard Edition rather than Enterprise Edition, saving the hosting organization $7MM per year in licensing and support fees."
                ]
            },
            {
                role: "Sr System Engineer",
                responsibilities: [
                    "Created a plan to migrate the United Arab Emirate’s clinical database by building a solution which included the integration of several 3rd party technologies, saving organization approximately $1MM in licensing and support fees.", 
                    "Automated the installation process of Cerner’s crawler solution by building an easily executable shell script that minimizes manual intervention and simplifies solution interaction, saving 1000+ installation and support hours."
                ]
            }
        ]
    },
    {
        label: "Devon Energy",
        img: "img/devon.png",
        link: "www.devon.com",
        years: "2007",
        visible: true,
        modalDisplay: false,
        description: "Fortune 500 indepedent energy company with 5,000+ employees worldwide.",
        location: "Oklahoma City, OK",
        roles: [
            {
                role: "IT Intern",
                responsibilities: [
                    "Provided PC support for Enterprise level Oil and Gas software such as SCATA."
                ]
            }
        ]
        
    }
    ],
    lived: [
        {
            location: "Shawnee, OK",
            years: "1985-2004",
            description: "Born and raised. <br>Attended Will Rogers Elementry, Shawnee Middle School, and Shawnee High School. <br>2003 Oklahoma 5A football state champion.",
            coords: {lat: 35.326801, lng: -96.927864 }
        },
        {
            location: "Stillwater, OK",
            years: "2004-2008",
            description: "Went to school at Oklahoma State University in Stillwater, OK. <br>While there, I obtained a BS in Computer Science.",
            coords: {lat: 36.115576, lng: -97.059088 }
        },        
        {
            location: "Oklahoma City, OK",
            years: "2007",
            description: "During the summer of 2007, <br>I interned in downtown OKC at Devon Energy as an IT Intern.",
            coords: {lat: 35.465232, lng: -97.524523 }
        },
        {
            location: "Kansas City, MO",
            years: "2008-2014",
            description: "I moved to Kansas City, MO in 2008 to work for Cerner Corporation.",
            coords: {lat: 39.103307, lng: -94.575746 }
        },
        {
            location: "Atlanta, GA",
            years: "2014-2016",
            description: "I went to grad school at Emory University in Atlanta, GA.",
            coords: {lat: 33.749140, lng: -84.386617 }
        },
        {
            location: "Morris Plains, NJ",
            years: "2016-Present",
            description: "I moved to Northern NJ in 2016 to work for ADP.",
            coords: {lat: 40.839357, lng: -74.481136 }
        }
    ],
    traveled: [
        {
            location: "Dublin, Ireland",
            years: "2014/2015",
            description: "Vacation in Summer 2014. St Patricks Day in 2015.",
            coords: {lat: 53.351298, lng: -6.267682 }
        },
        {
            location: "London, England",
            years: "2014/2015",
            description: "Vacation in Summer 2014. Business School in 2015",
            coords: {lat: 51.507269, lng: -0.127613 }
        },
        {
            location: "Paris, France",
            years: "2014",
            description: "Vacation in Summer 2014.",
            coords: {lat: 48.884685, lng: 2.353457 }
        },
        {
            location: "Cologne, Germany",
            description: "Vacation in Summer 2014.",
            years: "2014",
            coords: {lat: 50.937719, lng: 6.960451 }
        },
        {
            location: "Brussels, Belgium",
            years: "2014",
            description: "Vacation in Summer 201.4",
            coords: {lat: 50.869466, lng: 4.346627 }
        },
        {
            location: "Bruges, Belgium",
            years: "2014",
            description: "Vacation in Summer 2014.",
            coords: {lat: 51.209429, lng: 3.223513 }
        },
        {
            location: "Amsterdam, The Netherlands",
            years: "2014",
            description: "Vacation in Summer 2014. Take me back!",
            coords: {lat: 52.370922, lng: 4.895189 }
        },
        {
            location: "Cape Town, South Africa",
            years: "2015",
            description: "Business school trip in 2015. <br>Table Mountain, Simon's Town, Stellenbosch, Robben Island, and more.",
            coords: {lat: -33.924338, lng: 18.429438 }
        },
        {
            location: "Johannesburg, South Africa",
            years: "2015",
            description: "Business school trip in 2015.",
            coords: {lat: -26.204603, lng: 28.044404 }
        },
        {
            location: "Singapore",
            years: "2016",
            description: "Business school trip in 2016.",
            coords: {lat: 1.355497, lng: 103.866565}
        },
        {
            location: "Kuala Lumpur, Malaysia",
            years: "2016",
            description: "Business school trip in 2016.",
            coords: {lat: 3.138156, lng: 101.688960}
        },
        {
            location: "Bangalore, India",
            years: "2012",
            description: "Work related trip to train employees. <br>Spent 3 weeks here. First time out of the counrtry.",
            coords: {lat: 12.970020, lng: 77.591792 }
        },
        {
            location: "Entebbe, Uganda",
            years: "2013",
            description: "Medical Mission trip to Uganda in 2013.",
            coords: {lat: 0.050759, lng: 32.464305 }
        },
        {
            location: "Kampala, Uganda",
            years: "2013",
            description: "Medical Mission trip to Uganda in 2013.",
            coords: {lat: 0.348047, lng: 32.580584 }
        },
        {
            location: "Gulu, Uganda",
            years: "2013",
            description: "Medical Mission trip to Uganda in 2013.<br> Provided assistance to medical professionals<br> as we gave care to the surrounding area of Gulu.",
            coords: {lat: 2.772235, lng: 32.288474 }
        }
    ]
}

var Experience = function(experienceObject) {
    
    var self = this;
    
    // Observable(s)
    self.visible = ko.observable(experienceObject.visible);
    self.modalDisplay = ko.observable(experienceObject.modalDisplay);
    
    // Non-Observable(s)
    self.label = experienceObject.label;
    self.img = experienceObject.img;
    self.link = experienceObject.link;
    self.years = experienceObject.years;
    self.description = experienceObject.description;
    self.location = experienceObject.location;
    
    self.roles = experienceObject.roles.slice();
    
}

Experience.prototype.showModal = function() {
    console.log("Show Modal: "+this);
}

Experience.prototype.toggleModal = function() {
    this.modalDisplay(!this.modalDisplay());
}


var Skill = function(skillObject) {
    
    var self = this;
    
    // Non-Observable(s)
    self.label = skillObject.label;
    self.img = skillObject.img;
    self.link = skillObject.link;
    
}

var Education = function(educationObject) {
    
    var self = this;
    
    self.GPA = null;
    
    // Non-Observable(s)
    self.label = educationObject.label;
    self.img = educationObject.img;
    self.link = educationObject.link;
    self.years = educationObject.years;
    self.program = educationObject.program;
    
    if(educationObject.GPA){
        self.GPA = educationObject.GPA;
    }
    
    self.showDetail = function() {
        $(self).toggleClass('active');
        console.log("click"+self)
    }
    
}

var Project = function(projectObject) {
    
    var self = this;
    
    // Observable(s)
    self.visible = ko.observable(projectObject.visible);
    self.modalDisplay = ko.observable(projectObject.modalDisplay);
    
    // Non-Observable(s)
    self.label = projectObject.label;
    self.category = projectObject.category;
    self.img = projectObject.img;
    self.link = projectObject.link;
    self.type = projectObject.type;
    
    //var modalContent = '<div class="modal" data-bind="visible: modalDisplay">'+
    //    '<embed src="'+self.link+'" type="application/pdf">'+
    //    '</div>';
    
    //$('body').append(modalContent);
    
}

Project.prototype.projectDisable = function() {
    this.visible(false);
}

Project.prototype.projectEnable = function() {
    this.visible(true);
}

Project.prototype.toggleModal = function() {
    this.modalDisplay(!this.modalDisplay());
}

Project.prototype.isModal = function() {
    if(this.type == "modal") {
        return true;
    } else {
        return false;
    }
}
    
Project.prototype.openPage = function() {
    window.location.href = this.link;
}
    
function ViewModel() {
    var self = this;
    
    self.projectsObservable = ko.observableArray([]);
    self.skillsList = ko.observableArray([]);
    self.educationList = ko.observableArray([]);
    self.experienceList = ko.observableArray([]);
    
    model.projects.forEach(function(projectObject) {
        self.projectsObservable.push(new Project(projectObject));
    });
    
    model.skills.forEach(function(skillObject) {
        self.skillsList.push(new Skill(skillObject));
    });    
    model.education.forEach(function(educationObject) {
        self.educationList.push(new Education(educationObject));
    });
    model.experience.forEach(function(experienceObject) {
        self.experienceList.push(new Experience(experienceObject));
    });
    
}

function setProjectCategory(category) {
    // This is for the project filters. User can click on a project category/topic and the elements filter
    if(category == "All") {
        projectsObservable().forEach(function(projectInstance) {
            projectInstance.projectEnable();
        });
    } else {
        projectsObservable().forEach(function(projectInstance) {
            if(projectInstance.category == category) {
                projectInstance.projectEnable();
            } else {
                projectInstance.projectDisable();
            }
        });
    }
}

function filterAll() {setProjectCategory("All");}
function filterBusiness() {setProjectCategory("Business");}
function filterAnalytics() {setProjectCategory("Analytics");}
function filterDevelopment() {setProjectCategory("Development");}

ko.applyBindings(ViewModel);

var MyMap = function() {
    var self = this;
    
    // Adjustable variables
    self.zoom = 2;
    self.centerCoords = {lat: 23.673359, lng: 1.104601 }; // Southern Algeria
    
    self.map = null;
    
    self.map = new google.maps.Map(document.getElementById('map'), {
        zoom: self.zoom,
        center: self.centerCoords
    });
    
}

MyMap.prototype.addMarker = function(markerObject,icon) {
    
    var self = this;
    
    // Create Marker
    
    var marker = new google.maps.Marker({
        position: markerObject.coords,
        map: self.map,
        icon: icon
    });
    
    // Create Info Window
    
    var contentString = '<div class="info-window">'+
        '<h3>'+markerObject.location+'</h3>'+
        '<h5>'+markerObject.years+'</h5>'+
        '<hr>'+
        '<p>'+markerObject.description+'</p>'+
        '</div>';
    
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    
    marker.addListener('click', function() {
        closeAllInfoWindows();
        infowindow.open(self.map,marker);
    });
    
    markerList.push({marker: marker, infowindow: infowindow});
    
}

var markerList = []; // Set to global scope
var map = null;      // Set to global scope

function initMap() {
    var self = this;
    
    map = new MyMap(); // Initiate Map
    
    var blueDot = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
    var greenDot = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
    
    model.lived.forEach(function(livedObject) {
        map.addMarker(livedObject, blueDot);
    });
    model.traveled.forEach(function(traveledObject) {
        map.addMarker(traveledObject, greenDot);
    });
    
}

function closeAllInfoWindows() {
    markerList.forEach(function(markerObject) {
        markerObject.infowindow.close(map,markerObject.marker);
    });
}

function googleMapError() {
    alert("Google Maps is not available at this moment.");
}

