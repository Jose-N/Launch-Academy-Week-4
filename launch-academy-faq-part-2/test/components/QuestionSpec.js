import Question from '../../src/components/Question'

describe('Question', () => {
  let wrapper,
      onClickSpy;

  beforeEach(() => {
    onClickSpy = jasmine.createSpy('onClick Spy')
    wrapper = mount(
      <Question
        question={'What is your camp like?'}
        answer={'HI'}
        selected={true}
        handleClick={onClickSpy}
      />
    )
  })

  it('should render a Question component that has an h5 with question text', () => {
    expect(wrapper.find('h5')).toBePresent()
    expect(wrapper.find('h5').text()).toEqual('What is your camp like?')
  })

  it('should render a Question component that has an p with answer text', () => {
    expect(wrapper.find('p')).toBePresent()
    expect(wrapper.find('p').text()).toEqual('HI')
  })

  it('should render a Question component that has an div with className', () => {
    expect(wrapper.find('div').at(1)).toBePresent()
    expect(wrapper.find('div').at(1)).toHaveProp('className', 'selected-question')
  })


  it('should invoke onClick function from props when clicked', () => {
    wrapper.find('i').simulate('click')
    expect(onClickSpy).toHaveBeenCalled();
  })
})
