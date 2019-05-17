import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AudioPlayer from './audio-player';


Enzyme.configure({adapter: new Adapter()});

const gameMock = {
  isPlaying: false,
  onPlayButtonClick: jest.fn(),
  src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
};


it(`On click to play button state correctly changes from play/pause`, () => {
  global.window.HTMLMediaElement.prototype.pause = () => {};

  const player = mount(
      <AudioPlayer
        isPlaying={gameMock.isPlaying}
        onPlayButtonClick={gameMock.onPlayButtonClick}
        src={gameMock.src}
      />
  );

  const button = player.find(`.track__button`);

  player.setState({isLoading: false});

  button.simulate(`click`);
  expect(player.state().isPlaying).toBe(true);

  button.simulate(`click`);
  expect(player.state().isPlaying).toBe(false);
});
