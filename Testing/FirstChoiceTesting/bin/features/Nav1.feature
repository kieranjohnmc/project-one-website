Feature: In order to perform sucessful navigation
As a user
I want to navigate through the website 

Background:
			Given user navigates to website home page test

@Nav1
Scenario: In order to navigate through nav1
	  
      When user selects Apprenticeships Infrastructure
      Then user is navigated to Appenticeships Infratructure page
      And user selects to Apprenticeships Creative Media 
      And user is navigated to Apprenticeships Creative Media page
      And user selects Find us 
      And user is navigated to Find us page
      And user selects Contact
      Then user is navigated to Contact page

@Nav2      
Scenario: In order to navigate through nav2

      When user selects Degree marketing 
      Then user is navigated to Degree marketing page
      And user selects to Degree Creative media 
      And user is navigated to Degree Creative media page
      And user selects Apprenticeship Software Engineer 
      And user is navigated to Software Engineer page
      And user selects Degree Computing
      Then user is navigated to Degree Computing