import React from 'react';
import { connect } from 'react-redux';
import beep from '../../assets/beep.mp3';

class BeepAudio extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.audioState === 'play' && prevProps.audioState !== 'play') {
      this.timeOverAudio.play();
    }
    if (this.props.audioState === 'reset') {
      this.timeOverAudio.pause();
      this.timeOverAudio.currentTime = 0;
    }
  }
  render() {
    return (
      <audio
        id="beep"
        src={beep}
        ref={(audio) => {
          this.timeOverAudio = audio;
        }}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  audioState: state.audio,
});

// const mapDispatchToProps = (dispatch) => ({
//   timeOver: () => dispatch(timeOver()),
// });

BeepAudio = connect(
  mapStateToProps,
  null,
)(BeepAudio);

export default BeepAudio;
