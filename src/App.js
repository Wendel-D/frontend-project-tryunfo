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
    data: [],
    prevOn: false,
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

  saveClick = (objetoInfo) => {
    this.setState((prevState) => ({
      data: [...prevState.data, objetoInfo],
      prevOn: true,
      atriNumeric1: 0,
      atriNumeric2: 0,
      atriNumeric3: 0,
      raridade: 'normal',
      cardName: '',
      cardDescription: '',
      foto: '',
    }));
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
      data,
      prevOn,
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
          saveClick={ this.saveClick }
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
        {
          prevOn === true && data.map((e) => (
            <Card
              key={ e.cardName }
              cardName={ e.cardName }
              cardDescription={ e.cardDescription }
              cardAttr1={ e.atriNumeric1 }
              cardAttr2={ e.atriNumeric2 }
              cardAttr3={ e.atriNumeric3 }
              cardImage={ e.foto }
              cardRare={ e.raridade }
              cardTrunfo={ e.isTrunfo }
            />
          ))
        }
      </div>
    );
  }
}

export default App;
