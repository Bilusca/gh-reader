import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import RepositoreCard from "../RepositorieCard.vue";

const repositorie = {
  owner: {
    avatar_url: "test-image.jpg",
    login: "logintest",
  },
  name: "Teste repo",
  description: "this is a test repo",
  id: 123456,
};

describe("RepositoreCard component", () => {
  it("renders correctly", () => {
    const wrapper = mount(RepositoreCard, {
      props: {
        repositorie,
        isFavoriteList: false,
      },
    });

    expect(wrapper.text()).toContain("Teste repo");
  });

  it("emmit event when click to add favorite repositore", async () => {
    const wrapper = mount(RepositoreCard, {
      props: {
        repositorie,
        isFavoriteList: false,
      },
    });

    wrapper.find("button").trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted("addFavoriteRepo")).toBeTruthy();

    expect(wrapper.emitted().addFavoriteRepo[0]).toEqual([repositorie]);
  });

  it("emmit event when click to remove favorite repositore", async () => {
    const wrapper = mount(RepositoreCard, {
      props: {
        repositorie,
        isFavoriteList: true,
      },
    });

    wrapper.find("button").trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted("removeFavoriteRepo")).toBeTruthy();

    expect(wrapper.emitted().removeFavoriteRepo[0]).toEqual([repositorie.id]);
  });
});
