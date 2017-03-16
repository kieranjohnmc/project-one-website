$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "In order to perform sucessful login",
  "description": "As a user\r\nI want to enter correct username and password",
  "id": "in-order-to-perform-sucessful-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "In order to verify login to facebook",
  "description": "",
  "id": "in-order-to-perform-sucessful-login;in-order-to-verify-login-to-facebook",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user entered \"\u003cusername\u003e \" username",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user entered \"\u003cpassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user select the age category",
  "rows": [
    {
      "cells": [
        "Age",
        "location"
      ],
      "line": 13
    },
    {
      "cells": [
        "below 18",
        "UK"
      ],
      "line": 14
    },
    {
      "cells": [
        "above 18",
        "USA"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user \"\u003cloginType\u003e\" successfully logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "in-order-to-perform-sucessful-login;in-order-to-verify-login-to-facebook;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "loginType"
      ],
      "line": 20,
      "id": "in-order-to-perform-sucessful-login;in-order-to-verify-login-to-facebook;;1"
    },
    {
      "cells": [
        "valid",
        "valid",
        "should"
      ],
      "line": 21,
      "id": "in-order-to-perform-sucessful-login;in-order-to-verify-login-to-facebook;;2"
    },
    {
      "cells": [
        "invalid",
        "invalid",
        "shouldnot"
      ],
      "line": 22,
      "id": "in-order-to-perform-sucessful-login;in-order-to-verify-login-to-facebook;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 288941,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "In order to verify login to facebook",
  "description": "",
  "id": "in-order-to-perform-sucessful-login;in-order-to-verify-login-to-facebook;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginTest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user entered \"valid \" username",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user entered \"valid\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user select the age category",
  "rows": [
    {
      "cells": [
        "Age",
        "location"
      ],
      "line": 13
    },
    {
      "cells": [
        "below 18",
        "UK"
      ],
      "line": 14
    },
    {
      "cells": [
        "above 18",
        "USA"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user \"should\" successfully logged in",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_navigates_to_facebook_website()"
});
formatter.result({
  "duration": 141923385,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_validates_the_homepage_title()"
});
formatter.result({
  "duration": 164996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid ",
      "offset": 14
    }
  ],
  "location": "LoginStep.user_entered_valid_username(String)"
});
formatter.result({
  "duration": 2958094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 14
    }
  ],
  "location": "LoginStep.user_entered_valid_password(String)"
});
formatter.result({
  "duration": 95525,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_select_the_age_category(DataTable)"
});
formatter.result({
  "duration": 1278130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "should",
      "offset": 6
    }
  ],
  "location": "LoginStep.user_successfully_logged_in(String)"
});
formatter.result({
  "duration": 138944,
  "status": "passed"
});
formatter.after({
  "duration": 66709,
  "status": "passed"
});
formatter.before({
  "duration": 90788,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "In order to verify login to facebook",
  "description": "",
  "id": "in-order-to-perform-sucessful-login;in-order-to-verify-login-to-facebook;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginTest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user entered \"invalid \" username",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user entered \"invalid\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user select the age category",
  "rows": [
    {
      "cells": [
        "Age",
        "location"
      ],
      "line": 13
    },
    {
      "cells": [
        "below 18",
        "UK"
      ],
      "line": 14
    },
    {
      "cells": [
        "above 18",
        "USA"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user \"shouldnot\" successfully logged in",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_navigates_to_facebook_website()"
});
formatter.result({
  "duration": 71841,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_validates_the_homepage_title()"
});
formatter.result({
  "duration": 86446,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid ",
      "offset": 14
    }
  ],
  "location": "LoginStep.user_entered_valid_username(String)"
});
formatter.result({
  "duration": 133813,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 14
    }
  ],
  "location": "LoginStep.user_entered_valid_password(String)"
});
formatter.result({
  "duration": 96313,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_select_the_age_category(DataTable)"
});
formatter.result({
  "duration": 185522,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shouldnot",
      "offset": 6
    }
  ],
  "location": "LoginStep.user_successfully_logged_in(String)"
});
formatter.result({
  "duration": 155523,
  "status": "passed"
});
formatter.after({
  "duration": 55657,
  "status": "passed"
});
formatter.uri("LoginToProduction.feature");
formatter.feature({
  "line": 2,
  "name": "Login to Production",
  "description": "In order to perform sucessful login to Production\r\nAs a user\r\nI want to enter correct username and password",
  "id": "login-to-production",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "duration": 109339,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.user_navigates_to_facebook_website()"
});
formatter.result({
  "duration": 119998,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_validates_the_homepage_title()"
});
formatter.result({
  "duration": 51709,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "In order to verify login to facebook production",
  "description": "",
  "id": "login-to-production;in-order-to-verify-login-to-facebook-production",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "user entered \"valid\" username",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user entered \"valid\" password",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user validates the captcha image",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user \"shouldbe\" succesfully logged in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 14
    }
  ],
  "location": "LoginStep.user_entered_valid_username(String)"
});
formatter.result({
  "duration": 93156,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 14
    }
  ],
  "location": "LoginStep.user_entered_valid_password(String)"
});
formatter.result({
  "duration": 84077,
  "status": "passed"
});
formatter.match({
  "location": "LoginToProduction.user_validates_the_captcha_image()"
});
formatter.result({
  "duration": 146050,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shouldbe",
      "offset": 6
    }
  ],
  "location": "LoginToProduction.user_succesfully_logged_in(String)"
});
formatter.result({
  "duration": 139733,
  "status": "passed"
});
formatter.after({
  "duration": 64735,
  "status": "passed"
});
formatter.before({
  "duration": 91182,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.user_navigates_to_facebook_website()"
});
formatter.result({
  "duration": 58025,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_validates_the_homepage_title()"
});
formatter.result({
  "duration": 53683,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "In order to verify login to facebook production",
  "description": "",
  "id": "login-to-production;in-order-to-verify-login-to-facebook-production",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "user entered \"invalid\" username",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user entered \"invalid\" password",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user validates the captcha image",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user \"shouldnot\" succesfully logged in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 14
    }
  ],
  "location": "LoginStep.user_entered_valid_username(String)"
});
formatter.result({
  "duration": 108156,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 14
    }
  ],
  "location": "LoginStep.user_entered_valid_password(String)"
});
formatter.result({
  "duration": 104998,
  "status": "passed"
});
formatter.match({
  "location": "LoginToProduction.user_validates_the_captcha_image()"
});
formatter.result({
  "duration": 71841,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shouldnot",
      "offset": 6
    }
  ],
  "location": "LoginToProduction.user_succesfully_logged_in(String)"
});
formatter.result({
  "duration": 83287,
  "status": "passed"
});
formatter.after({
  "duration": 51314,
  "status": "passed"
});
});