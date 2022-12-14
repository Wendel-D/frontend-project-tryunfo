import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      onInputChange,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.props;
    return (
      <form action="">
        <label htmlFor="name">
          Nome do Stand:
          <input
            type="text"
            name="cardName"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <br />
        <label htmlFor="descriçao">
          Descrição:
          <textarea
            name="cardDescription"
            type="text"
            cols="30"
            rows="10"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          >
            ...
          </textarea>
        </label>
        <br />
        <br />
        <label htmlFor="atri-numeric1">
          nivel de poder:
          <input
            type="number"
            name="atriNumeric1"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <br />
        <label htmlFor="atri-numeric2">
          nivel de velocidade:
          <input
            type="number"
            name="atriNumeric2"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <br />
        <label htmlFor="atri-numeric3">
          nivel de alcance:
          <input
            type="number"
            name="atriNumeric3"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <br />
        <label htmlFor="foto">
          link da imagem do stand:
          <input
            type="text"
            name="foto"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <br />
        <select
          name="raridade"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <br />
        <br />
        <label htmlFor="isTrunfo">
          { hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : <input
            type="checkbox"
            name="isTrunfo"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />}
        </label>
        <button
          name="isSaveButtonDisabled"
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={
            () => onSaveButtonClick({
              cardName,
              cardAttr1,
              cardAttr2,
              cardAttr3,
              cardImage,
              cardDescription,
              cardRare,
              cardTrunfo,
            })
          }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
