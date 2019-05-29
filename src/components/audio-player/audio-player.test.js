import React from 'react';
import renderer from 'react-test-renderer';

import AudioPlayer from './audio-player';


const gameMock = {
  src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
};

it(`AudioPlayer correctly renders`, () => {
  const {src} = gameMock;
  const onPlayButtonClick = jest.fn();
  const renderAudio = jest.fn();

  const player = renderer
    .create(<AudioPlayer
      isPlaying={false}
      isLoading={true}
      onPlayButtonClick={onPlayButtonClick}
      renderAudio={renderAudio}
      src={src}
    />).toJSON();

  expect(player).toMatchSnapshot();
});

