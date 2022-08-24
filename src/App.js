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
    isSaveBuutonDisabled: true,
    prevOn: false,
  };

  onInputChange = ({ target }) => {
    const { type, name } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { cardName, cardDescription, atriNumeric1, atriNumeric2, atriNumeric3, foto, raridade, isTrunfo } = this.state;
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
          isSaveBuutonDisabled="false"
          onInputChange={this.onInputChange}
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
