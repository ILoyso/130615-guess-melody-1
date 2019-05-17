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

    this._audioRef = React.createRef();

    this.state = {
      progress: 0,
      isLoading: true,
      isPlaying: props.isPlaying,
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
        <audio
          ref={this._audioRef}
        />
      </div>
    </div>;
  }

  /**
   * Method is invoked immediately after a component is mounted (inserted into the tree)
   * Here created audio player and set all handlers (play, pause, update etc) for it
   */
  componentDidMount() {
    const audio = this._audioRef.current;

    audio.src = this.props.src;

    audio.oncanplaythrough = () => {
      this.setState({
        isLoading: false,
      });
    };

    audio.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };

    audio.onpause = () => {
      this.setState({
        isPlaying: false,
      });
    };

    audio.ontimeupdate = () => {
      this.setState({
        progress: audio.currentTime
      });
    };
  }

  /**
   * Method  is invoked immediately after updating occurs. This method is not called for the initial render
   * Method works on player update and check, should it play or set pause
   */
  componentDidUpdate() {
    const audio = this._audioRef.current;

    if (this.props.isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  /**
   * Method is invoked immediately before a component is unmounted and destroyed
   * Here player destroying
   */
  componentWillUnmount() {
    const audio = this._audioRef.current;

    audio.oncanplaythrough = null;
    audio.onplay = null;
    audio.onpause = null;
    audio.ontimeupdate = null;
    audio.src = ``;
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
