import { Step } from "gauge-ts";
import { greet } from "../../src/hello-world";
import { strictEqual } from "assert";

export default class StepImplementation {
    @Step("Greeting in <language> should be <message>")
    public async greetingShouldBeInLanguage(language: string, message: string) {
        strictEqual(greet(language), message);
    }
}
