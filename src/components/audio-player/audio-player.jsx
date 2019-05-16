import React from 'react';
import PropTypes from 'prop-types';


// AudioPlayer component for playing audio files
class AudioPlayer extends React.PureComponent {

  /**
   * Create AudioPlayer component
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    const {isPlaying, src} = props;

    this._audio = new Audio(src);

    this.state = {
      progress: this._audio.currentTime,
      isLoading: true,
      isPlaying,
    };

    this._audio.oncanplaythrough = () => {
      this.setState({
        isLoading: false,
      });
    };

    this._audio.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };

    this._audio.onpause = () => {
      this.setState({
        isPlaying: false,
      });
    };

    this._audio.ontimeupdate = () => {
      this.setState({
        progress: this._audio.currentTime
      });
    };

    this._onPlayButtonClick = this._onPlayButtonClick.bind(this);
  }

  /**
   * Method for render audio player
   * @return {*}
   */
  render() {
    const {isLoading, isPlaying} = this.state;

    return <div className="game__track">
      <button
        className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
        disabled={isLoading}
        onClick={this._onPlayButtonClick}
        type="button"
      />
      <div className="track__status">
        <audio></audio>
      </div>
    </div>;
  }

  componentDidUpdate() {
    if (this.props.isPlaying) {
      this._audio.play();
    } else {
      this._audio.pause();
    }
  }

  /**
   * Method for change play status on play button click
   * @private
   */
  _onPlayButtonClick() {
    this.props.onPlayButtonClick();
    this.setState({
      isPlaying: !this.state.isPlaying
    });
  }
}


AudioPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};


export default AudioPlayer;