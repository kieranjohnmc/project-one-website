@Nav1
Feature: In order to perform sucessful navigation
As a user
I want to navigate through the website 

Scenario: In order to navigate through the website
	  Given user navigates to website home page
      When user selects Apprenticeships Infrastructure
      Then user is navigated to Appenticeships Infratructure page
      And user selects to Apprenticeships Creative Media 
      And user is navigated to Apprenticeships Creative Media page
      And user selects Find us 
      And user is navigated to Find us page
      And user selects Contact
      Then user is navigated to Contact page