import { Before, After, Status } from "@cucumber/cucumber";

Before(async function () {
  console.log("🚀 Test démarré !");
});

After(async function (scenario) {
  if (scenario.result.status === Status.FAILED) {
    console.log("❌ Test échoué, capture d'écran...");
    await this.attachScreenshot(this.page);
  }
});
