import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongDetail extends Component {
  render() {
    if (!this.props.song) {
      return <div>Select Song</div>;
    }

    return ( 
      <div>
        <h3>Detail for</h3>
        {this.props.song.title}
        <br/>
        <h4>duration</h4>
        {this.props.song.duration}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { song: state.selectedSong }
}

export default connect(mapStateToProps, )(SongDetail);