import { mount, shallowMount } from "@vue/test-utils";
import ProductPage from "@/pages/product/index.vue";
import * as axios from "axios";

let wrapper;

jest.mock("axios", () => {
  return {
    get: jest.fn(),
  };
});

describe("ProductPage is a vue instance", () => {
  afterEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
  });

  beforeEach(() => {
    jest.resetModules();
    wrapper = shallowMount(ProductPage, {
      global: {
        provide: {},
        mocks: {
          $t: (msg) => msg, 
        },
      },
    });
  });

  test("test component render", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  test("expect getProductList func", async () => {
    const data = { data: "some data" };
    const spy = await jest.spyOn(wrapper.vm, "getProductList");
    axios.get = await jest.fn(() => Promise.resolve(data));
    await wrapper.vm.getProductList();
    expect(spy).toHaveBeenCalled();
  });
});
