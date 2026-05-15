import { Step } from "gauge-ts";

export default class StepImplementation {
    @Step("Total for <count> items at unit price <unitPrice> should be <total>")
    public async totalShouldBe(count: string, unitPrice: string, total: string) {
        throw new Error("rule not implemented");
    }
}
