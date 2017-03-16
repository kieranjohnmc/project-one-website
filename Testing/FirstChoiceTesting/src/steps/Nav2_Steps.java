package steps;

import org.openqa.selenium.By;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Nav2_Steps
{
	
	@When("^user selects Degree marketing$")
	public void user_selects_Degree_marketing() throws Throwable 
	{
		Nav1_Steps.driver.findElement(By.id("toggler")).click();
		Nav1_Steps.driver.findElement(By.id("toggler")).click();
		Nav1_Steps.driver.findElement(By.linkText("Degree Marketing")).click();
	}

	@SuppressWarnings("deprecation")
	@Then("^user is navigated to Degree marketing page$")
	public void user_is_navigated_to_Degree_marketing_page() throws Throwable 
	{
		Assert.assertEquals("Degree Marketing | First Choice", Nav1_Steps.driver.getTitle());
	}

	@Then("^user selects to Degree Creative media$")
	public void user_selects_to_Degree_Creative_media() throws Throwable 
	{

	}

	@Then("^user is navigated to Degree Creative media page$")
	public void user_is_navigated_to_Degree_Creative_media_page() throws Throwable 
	{

	}

	@Then("^user selects Apprenticeship Software Engineer$")
	public void user_selects_Apprenticeship_Software_Engineer() throws Throwable 
	{

	}

	@Then("^user is navigated to Software Engineer page$")
	public void user_is_navigated_to_Software_Engineer_page() throws Throwable 
	{

	}

	@Then("^user selects Degree Computing$")
	public void user_selects_Degree_Computing() throws Throwable 
	{

	}

	@Then("^user is navigated to Degree Computing$")
	public void user_is_navigated_to_Degree_Computing() throws Throwable 
	{

	}
}
