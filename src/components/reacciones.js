import React, { Component } from 'react';
import kafkaService from '../services/kakfa.service';

class Reactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCount: 0,
      loveCount: 0,
      laughCount: 0,
      cryCount: 0,
      wowCount: 0,
      angryCount: 0
    };
  }

  saveLike(e, status, reaction) {
    const { userid, objectid } = this.props; // Obtén el userid y objectid de tus props
    const reactionid = reaction; // El parámetro reaction ya contiene el reactionid

    let data = {
      userid: userid,
      objectid: objectid,
      reactionid: reactionid
    };

    console.log(JSON.stringify(data));

    kafkaService.reaction(userid, objectid, reactionid); // Llama a la función reaction pasando los datos
    e.preventDefault();
  }

  handleLikeClick = () => {
    this.setState({ likeCount: this.state.likeCount + 1 });
  };

  handleLoveClick = () => {
    this.setState({ loveCount: this.state.loveCount + 1 });
  };

  handleLaughClick = () => {
    this.setState({ laughCount: this.state.laughCount + 1 });
  };

  handleCryClick = () => {
    this.setState({ cryCount: this.state.cryCount + 1 });
  };

  handleWowClick = () => {
    this.setState({ wowCount: this.state.wowCount + 1 });
  };

  handleAngryClick = () => {
    this.setState({ angryCount: this.state.angryCount + 1 });
  };

  render() {
    const {
      likeCount,
      loveCount,
      laughCount,
      cryCount,
      wowCount,
      angryCount
    } = this.state;

    return (
      <div className="reactions">
        <button
          className="reaccion"
          onClick={(e) => {
            this.handleLikeClick();
            e.preventDefault();
            this.saveLike(e, 1, reaction);
          }}
        >
          <span role="img" aria-label="like">
            👍
          </span>
          <span className="count">{likeCount}</span>
        </button>
        <button
          className="reaccion"
          onClick={(e) => {
            this.handleLoveClick();
            e.preventDefault();
            this.saveLike(e, 2, reaction);
          }}
        >
          <span role="img" aria-label="love">
            ❤️
          </span>
          <span className="count">{loveCount}</span>
        </button>
        <button
          className="reaccion"
          onClick={(e) => {
            this.handleLaughClick();
            e.preventDefault();
            this.saveLike(e, 3, reaction);
          }}
        >
          <span role="img" aria-label="laugh">
            😂
          </span>
          <span className="count">{laughCount}</span>
        </button>
        <button
          className="reaccion"
          onClick={(e) => {
            this.handleCryClick();
            e.preventDefault();
            this.saveLike(e, 4, reaction);
          }}
        >
          <span role="img" aria-label="cry">
            😢
          </span>
          <span className="count">{cryCount}</span>
        </button>
        <button
          className="reaccion"
          onClick={(e) => {
            this.handleWowClick();
            e.preventDefault();
            this.saveLike(e, 5, reaction);
          }}
        >
          <span role="img" aria-label="wow">
            😮
          </span>
          <span className="count">{wowCount}</span>
        </button>
        <button
          className="reaccion"
          onClick={(e) => {
            this.handleAngryClick();
            e.preventDefault();
            this.saveLike(e, 6, reaction);
          }}
        >
          <span role="img" aria-label="angry">
            😠
          </span>
          <span className="count">{angryCount}</span>
        </button>
      </div>
    );
  }
}

export default Reactions;
