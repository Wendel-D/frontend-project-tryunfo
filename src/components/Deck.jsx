import React from 'react';
import PropTypes from 'prop-types';

class Deck extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      onClick,
    } = this.props;
    return (
      <div>
        <p data-testid="rare-card">{cardRare}</p>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <h1 data-testid="name-card">{cardName}</h1>
        {cardTrunfo ? <h2 data-testid="trunfo-card">Super Trunfo</h2> : null}
        <p data-testid="description-card">{cardDescription}</p>
        <p data-testid="attr1-card">
          Poder:
          {cardAttr1}
        </p>
        <p data-testid="attr2-card">
          Alcance:
          {cardAttr2}
        </p>
        <p data-testid="attr3-card">
          Velocidade:
          {cardAttr3}
        </p>
        <button
          type="button"
          data-testid="delete-button"
          onClick={ () => onClick({ cardName, cardTrunfo }) }
        >
          Excluir
        </button>
      </div>
    );
  }
}

Deck.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Deck;
