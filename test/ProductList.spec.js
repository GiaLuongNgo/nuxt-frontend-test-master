import { mount, shallowMount } from '@vue/test-utils'
import ProductList from '@/components/ProductList.vue'

let wrapper;

describe('ProductList is a vue instance', () => {
  beforeEach(() => {
    wrapper = shallowMount(ProductList, {
      global: {
        provide: {},
        mocks: {
          products: [],
        }
      }
    })
  })

  test('test component render', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
