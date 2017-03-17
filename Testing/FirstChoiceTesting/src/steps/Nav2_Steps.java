package steps;

import org.openqa.selenium.By;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class Nav2_Steps
{
	
	@When("^user selects Degree marketing$")
	public void user_selects_Degree_marketing() throws Throwable 
	{
		Thread.sleep(1000);
		Nav1_Steps.driver.findElement(By.id("toggler")).click();
		Nav1_Steps.driver.findElement(By.id("toggler")).click();
		Thread.sleep(500);
		Nav1_Steps.driver.findElement(By.linkText("Degree Marketing")).click();
	}

	@Then("^user is navigated to Degree marketing page$")
	public void user_is_navigated_to_Degree_marketing_page() throws Throwable 
	{
		Thread.sleep(1000);
		try
		{
			Assert.assertEquals(Nav1_Steps.driver.getTitle(), "Degree Marketing | First Choice");
		}
		catch (Throwable t)
		{
			Nav1_Steps.ec.addError(t);
		}
	}

	@Then("^user selects to Degree Creative media$")
	public void user_selects_to_Degree_Creative_media() throws Throwable 
	{
		Thread.sleep(1000);
		Nav1_Steps.driver.findElement(By.id("toggler")).click();
		Nav1_Steps.driver.findElement(By.id("toggler")).click();
		Thread.sleep(500);
		Nav1_Steps.driver.findElement(By.linkText("Degree Creative Media")).click();
	}

	@Then("^user is navigated to Degree Creative media page$")
	public void user_is_navigated_to_Degree_Creative_media_page() throws Throwable 
	{
		Thread.sleep(1000);
		try
		{
			Assert.assertEquals(Nav1_Steps.driver.getTitle(), "Degree Creative Media | First Choice");
		}
		catch (Throwable t)
		{
			Nav1_Steps.ec.addError(t);
		}
	}

	@Then("^user selects Apprenticeship Software Engineer$")
	public void user_selects_Apprenticeship_Software_Engineer() throws Throwable 
	{
		Thread.sleep(1000);
		Nav1_Steps.driver.findElement(By.id("toggler")).click();
		Nav1_Steps.driver.findElement(By.id("toggler")).click();
		Thread.sleep(500);
		Nav1_Steps.driver.findElement(By.linkText("Software Engineering")).click();
	}

	@Then("^user is navigated to Software Engineer page$")
	public void user_is_navigated_to_Software_Engineer_page() throws Throwable 
	{
		Thread.sleep(1000);
		try
		{
			Assert.assertEquals(Nav1_Steps.driver.getTitle(), "Software Development | First Choice");
		}
		catch (Throwable t)
		{
			Nav1_Steps.ec.addError(t);
		}
	}

	@Then("^user selects Degree Computing$")
	public void user_selects_Degree_Computing() throws Throwable 
	{
		Thread.sleep(1000);
		Nav1_Steps.driver.findElement(By.id("toggler")).click();
		Nav1_Steps.driver.findElement(By.id("toggler")).click();
		Thread.sleep(500);
		Nav1_Steps.driver.findElement(By.linkText("Degree Computing")).click();
	}

	@Then("^user is navigated to Degree Computing$")
	public void user_is_navigated_to_Degree_Computing() throws Throwable 
	{
		Thread.sleep(1000);
		try
		{
			Assert.assertEquals(Nav1_Steps.driver.getTitle(), "Degree Computing | First Choice");
		}
		catch (Throwable t)
		{
			Nav1_Steps.ec.addError(t);
		}
	}
}
