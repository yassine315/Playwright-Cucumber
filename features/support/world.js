import { setWorldConstructor } from "@cucumber/cucumber";
import { AllureRuntime, InMemoryAllureWriter } from "allure-playwright";
import { AllureReporter } from "@shelex/cucumber-allure";

class CustomWorld {
  constructor() {
    this.allure = new AllureRuntime({ resultsDir: "allure-results" });
    this.reporter = new AllureReporter(this.allure);
  }

  attachScreenshot(page) {
    return page.screenshot().then((buffer) => {
      this.reporter.allure.attachment("screenshot", buffer, "image/png");
    });
  }
}

setWorldConstructor(CustomWorld);
