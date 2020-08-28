import { mount } from '@vue/test-utils'
import TheBasicButtonPc from '@/components/pc/atoms/TheBasicButton.vue'
import TheBasicButtonSp from '@/components/sp/atoms/TheBasicButton.vue'

describe('TheBasicButtonPc', () => {
  let wrapper = mount(TheBasicButtonPc)
  afterEach(() => {
    wrapper.destroy()
  })

  test('コンポーネントが存在する', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  describe('props指定なし', () => {
    test('buttonとtextが存在する', () => {
      //basicBtnボタンが存在し、whiteクラスを持っていない
      expect(wrapper.is('button')).toBe(true)
      expect(wrapper.classes()).not.toContain('white')

      //propの指定をしていない場合テキストはbuttonである
      expect(wrapper.vm.btnText).toBe('button')
    })
  })

  describe('props指定あり', () => {
    test('whiteクラスとtextを指定する', () => {
      const props = {
        variation: 'white',
        btnText: 'text',
      }
      const wrapper = mount(TheBasicButtonPc, {
        propsData: props,
      })
      //ボタンが存在し、whiteクラスを持っている
      expect(wrapper.classes()).toContain('white')

      //指定したテキストが表示されている
      expect(wrapper.vm.btnText).toBe('text')
    })
  })

  describe('buttonクリック時', () => {
    test('clickEventがemitされる', () => {
      const button = wrapper.find('button')
      button.trigger('click')
      expect(wrapper.emitted('clickEvent')).toBeDefined()
    })
  })
})

describe('TheBasicButtonSp', () => {
  test('コンポーネントが存在する', () => {
    const wrapper = mount(TheBasicButtonSp)
    expect(wrapper.exists()).toBeTruthy()
  })
})

// buttonにpropで渡したテキストが表示されること、whitepropsを渡すとボタンが白くなること,buttonクリックでclickイベントが呼ばれること
