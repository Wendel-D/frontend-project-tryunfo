import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form action="">
        <label htmlFor="name">
          Nome do Stand:
          <input type="text" name="name" data-testid="name-input" />
        </label>
        <br />
        <br />
        <label htmlFor="descriçao">
          Descrição:
          <textarea
            name="descriçao"
            cols="30"
            rows="10"
            data-testid="description-input"
          >
            ...
          </textarea>
        </label>
        <br />
        <br />
        <label htmlFor="atri-numeric1">
          nivel de poder:
          <input type="number" name="atri-numeric1" data-testid="attr1-input" />
        </label>
        <br />
        <br />
        <label htmlFor="atri-numeric2">
          nivel de velocidade:
          <input type="number" name="atri-numeric2" data-testid="attr2-input" />
        </label>
        <br />
        <br />
        <label htmlFor="atri-numeric3">
          nivel de alcance:
          <input type="number" name="atri-numeric3" data-testid="attr3-input" />
        </label>
        <br />
        <br />
        <label htmlFor="foto">
          link da imagem do stand:
          <input type="text" name="foto" data-testid="image-input" />
        </label>
        <br />
        <br />
        <select name="raridade" data-testid="rare-input">
          <option value="Normal">Normal</option>
          <option value="Raro">Raro</option>
          <option value="Muito Raro">Muito raro</option>
        </select>
        <br />
        <br />
        <label htmlFor="isTrunfo">
          <input type="checkbox" name="isTrunfo" data-testid="trunfo-input" />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
