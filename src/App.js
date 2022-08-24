import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    atriNumeric1: 0,
    atriNumeric2: 0,
    atriNumeric3: 0,
    foto: '',
    raridade: 'normal',
    isTrunfo: false,
    isSaveButtonDisabled: true,
    // prevOn: false,
  };

  onInputChange = ({ target }) => {
    const { type, name } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      const {
        cardName,
        cardDescription,
        foto,
        atriNumeric1,
        atriNumeric2,
        atriNumeric3,
      } = this.state;
      const maxLimit = 210;
      const maxLimitIndividual = 90;
      const soma = (+atriNumeric1 + +atriNumeric2 + +atriNumeric3 <= maxLimit);
      console.log(soma);
      if (
        cardName && cardDescription && foto
        && soma
        && atriNumeric1 <= maxLimitIndividual
        && atriNumeric2 <= maxLimitIndividual
        && atriNumeric3 <= maxLimitIndividual
        && atriNumeric1 >= 0
        && atriNumeric2 >= 0
        && atriNumeric3 >= 0
      ) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  };

  render() {
    const {
      cardName,
      cardDescription,
      atriNumeric1,
      atriNumeric2,
      atriNumeric3,
      foto,
      raridade,
      isTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ atriNumeric1 }
          cardAttr2={ atriNumeric2 }
          cardAttr3={ atriNumeric3 }
          cardImage={ foto }
          cardRare={ raridade }
          cardTrunfo={ isTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick=""
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ atriNumeric1 }
          cardAttr2={ atriNumeric2 }
          cardAttr3={ atriNumeric3 }
          cardImage={ foto }
          cardRare={ raridade }
          cardTrunfo={ isTrunfo }
        />
      </div>
    );
  }
}

export default App;
