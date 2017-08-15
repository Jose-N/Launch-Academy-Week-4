import Tweet from '../../src/components/Tweet';

describe('Tweet', () => {
  let wrapper,
      key, 
      id,
      text,
      name,
      userPhoto,
      handleClick,
      className;

  beforeEach(() => {
    wrapper = mount(
      <Tweet
        key={1}
        id={1}
        text="this is my text"
        name="My Name Is Jefffff"
        userPhoto="www.mynameisjeff.com"
        handleClick={null}
        className=""
      />
    )
  })

  it('should render an div tag', () => {
    expect(wrapper.find('div')).toBePresent();
  });

  it('should render an img tag', () => {
    expect(wrapper.find('img')).toBePresent();
  });
  
  it('should render an span tag', () => {
    expect(wrapper.find('span')).toBePresent();
  });

  it('should render an p tag', () => {
    expect(wrapper.find('p')).toBePresent();
  });

  it('should render an div tag with the specific className', () => {
      expect(wrapper.find('div').hasClass('tweet-box')).toEqual(true)
  });

  it('should render an img tag with the specific props', () => {
      expect(wrapper.find('img').props()).toEqual({
        src: "www.mynameisjeff.com"
      })
  });

  it('should render an span tag with the specific props', () => {
      expect(wrapper.find('span').props()).toEqual({
        children: "My Name Is Jefffff"
      })
  });

  it('should render an p tag with the specific props', () => {
      expect(wrapper.find('p').props()).toEqual({
        children: "this is my text"
      })
  });
})
