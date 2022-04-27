import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import BouncingText from "../BouncingText.vue";

describe("BouncingText component", () => {
  it("renders correctly", () => {
    const wrapper = mount(BouncingText, {
      props: {
        textToBouncing: "Teste...",
      },
    });

    expect(wrapper.text()).toContain("Teste...");
  });
});
