package steps;

import org.junit.rules.ErrorCollector;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Nav1_Steps 
{
	public static WebDriver driver;
	public static ErrorCollector ec = new ErrorCollector();
	
	@Before
	public void setUp()
	{
		System.setProperty("webdriver.chrome.driver", "C:/Users/Vanilla/workspaceRC/FirstChoiceTesting/src/chromedriver.exe");
		driver = new ChromeDriver();
	}
	
	@After
	public void kill()
	{
		driver.close();
	}
	
	@Given("^user navigates to website home page test$")
	public void user_navigates_to_website_home_page_test() throws Throwable
	{
		driver.get("https://localhost/project-one-website/index.html");
		driver.manage().window().maximize();
	}

	@When("^user selects Apprenticeships Infrastructure$")
	public void user_selects_Apprenticeships_Infrastructure() throws Throwable 
	{
		//driver.WaitForPageToLoad( "30000" );
		driver.findElement(By.id("toggler")).click();
		driver.findElement(By.id("toggler")).click();
		Thread.sleep(500);
		driver.findElement(By.linkText("IT Infrastructure")).click();
	}

	@Then("^user is navigated to Appenticeships Infrastructure page$")
	public void user_is_navigated_to_Appenticeships_Infrastructure_page() throws Throwable 
	{
		Thread.sleep(1000);
		try
		{
			Assert.assertEquals(driver.getTitle(), "IT Infrastructure | First Choice");
		}
		catch (Throwable t)
		{
			ec.addError(t);
		}
	}

	@And("^user selects to Apprenticeships Creative Media$")
	public void user_selects_to_Apprenticeships_Creative_Media() throws Throwable 
	{
		Thread.sleep(1000);
		driver.findElement(By.id("toggler")).click();
		driver.findElement(By.id("toggler")).click();
		Thread.sleep(500);
		driver.findElement(By.linkText("Creative Media")).click();
	}
	@Then("^user is navigated to Apprenticeships Creative Media page$")
	public void user_is_navigated_to_Apprenticeships_Creative_Media_page() throws Throwable 
	{
		Thread.sleep(1000);
		try
		{
			Assert.assertEquals(driver.getTitle(), "Creative Media | First Choice");
		}
		catch (Throwable t)
		{
			ec.addError(t);
		}
	}

	@And("^user selects Find us$")
	public void user_selects_Find_us() throws Throwable 
	{
		Thread.sleep(1000);
		driver.findElement(By.id("toggler")).click();
		driver.findElement(By.id("toggler")).click(); 
		Thread.sleep(500);
		driver.findElement(By.linkText("Find Us")).click();
	}

	@Then("^user is navigated to Find us page$")
	public void user_is_navigated_to_Find_us_page() throws Throwable 
	{
		Thread.sleep(1000);
		try
		{
			Assert.assertEquals(driver.getTitle(), "Find Us | First Choice");
		}
		catch (Throwable t)
		{
			ec.addError(t);
		}
	}

	@And("^user selects Contact$")
	public void user_selects_Contact() throws Throwable 
	{
		driver.findElement(By.id("toggler")).click();
		driver.findElement(By.id("toggler")).click(); 
		Thread.sleep(500);
		driver.findElement(By.linkText("Contact Us")).click();
	}
	
	@Then("^user is navigated to Contact page$")
	public void user_is_navigated_to_Contact_page() throws Throwable 
	{
		Thread.sleep(1000);
		try
		{
			Assert.assertEquals(driver.getTitle(), "Contact Us | First Choice");
		}
		catch (Throwable t)
		{
			ec.addError(t);
		}
	}
}