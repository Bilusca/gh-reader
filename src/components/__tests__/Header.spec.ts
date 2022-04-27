import { describe, it, expect } from "vitest";

import { RouterLinkStub, shallowMount } from "@vue/test-utils";
import Header from "../HeaderComponent.vue";
import { RouterLink } from "vue-router";

describe("Header component", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(Header, {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });

    expect(wrapper.text()).toContain("GH Explorer");

    const links = wrapper.findAllComponents(RouterLink);

    expect(links.at(0)?.props().to).toEqual("/");
    expect(links.at(1)?.props().to).toEqual("/favorite-repos");
    expect(links).toHaveLength(2);
  });
});
