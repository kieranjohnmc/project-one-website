package runner;
import java.io.File;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.ExtentCucumberFormatter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features={"src/features"},
		glue={"steps"}, 
		monochrome=true, 
		tags={"@FunctionalTest, @LoginTest"},
		plugin={"pretty","html:target/cucumber","com.cucumber.listener.ExtentCucumberFormatter"})
public class RunCuke 
{
	@BeforeClass
    public static void setup() {
	  ExtentCucumberFormatter.initiateExtentCucumberFormatter();

        // Loads the extent config xml to customize on the report.
        ExtentCucumberFormatter.loadConfig(new File("src/extent-config.xml"));

        // User can add the system information as follows
        ExtentCucumberFormatter.addSystemInfo("Browser Name", "Firefox");
        ExtentCucumberFormatter.addSystemInfo("Browser version", "v47.0.1");
        ExtentCucumberFormatter.addSystemInfo("Selenium version", "v2.53.1");
    	    }
}
