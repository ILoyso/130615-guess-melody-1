import React from 'react';
import PropTypes from 'prop-types';


// AudioPlayer component for playing audio files
class AudioPlayer extends React.PureComponent {

  /**
   * Method for render audio player
   * @return {*}
   */
  render() {
    const {
      isLoading,
      isPlaying,
      onPlayButtonClick,
      renderAudio
    } = this.props;

    return <div className="game__track">
      <button
        className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
        disabled={isLoading}
        onClick={onPlayButtonClick}
        type="button"
      />
      <div className="track__status">
        {renderAudio()}
      </div>
    </div>;
  }
}


AudioPlayer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  renderAudio: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};


export default AudioPlayer;
