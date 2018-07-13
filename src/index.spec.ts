import { Man } from "./index";

describe("Man", () => {
    it("should be defined", () => {
        expect(Man).toBeDefined()
    });
    it("should return somth", () => {
        expect(new Man().sayWhat()).toBe(4)
    });
});