import React from 'react';
import renderer from 'react-test-renderer';

import AudioPlayer from './audio-player';


const gameMock = {
  isPlaying: false,
  onPlayButtonClick: jest.fn(),
  src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
};

it(`AudioPlayer correctly renders`, () => {
  const player = renderer
    .create(<AudioPlayer
      isPlaying={gameMock.isPlaying}
      onPlayButtonClick={gameMock.onPlayButtonClick}
      src={gameMock.src}
    />)
    .toJSON();

  expect(player).toMatchSnapshot();
});
