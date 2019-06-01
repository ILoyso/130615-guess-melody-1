import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AudioPlayer from './audio-player';


Enzyme.configure({adapter: new Adapter()});

const gameMock = {
  src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
};


describe(`AudioPlayer Component`, () => {
  it(`If isPlaying = false "play" button shows correctly`, () => {
    const player = mount(
        <AudioPlayer
          isLoading={false}
          isPlaying={false}
          onPlayButtonClick={jest.fn()}
          renderAudio={jest.fn()}
          src={gameMock.src}
        />
    );

    const button = player.find(`.track__button`);

    expect(button.hasClass(`track__button--play`)).toEqual(true);
  });

  it(`If isPlaying = true "pause" button shows correctly`, () => {
    const player = mount(
        <AudioPlayer
          isLoading={false}
          isPlaying={true}
          onPlayButtonClick={jest.fn()}
          renderAudio={jest.fn()}
          src={gameMock.src}
        />
    );

    const button = player.find(`.track__button`);

    expect(button.hasClass(`track__button--pause`)).toEqual(true);
  });

});
