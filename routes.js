let cards = [
  {id: '1', name: 'First card', status: 'todo', priority: 1},
  {id: '2', name: 'Second card', status: 'progress', priority: 2},
  {id: '3', name: 'Next card', status: 'review', priority: 3}
]

function routes(app) {

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.get('/cards', (req, res) => {
    res.send(cards);
  });

  app.delete('/card/:cardId', (req, res) => {
    const cardId = req.params.cardId;
    cards = cards.filter(el => el.id !== cardId);
    res.send(cards);
  });

  app.post('/card', (req, res) => {
    const card = req.body;
    cards.push({id: Math.random().toString(), ...card});
    res.send('Card created');
  })

  app.patch('/card/:cardId', (req, res) => {
    const cardId = req.params.cardId;
    const card = req.body;
    cards = cards.map(el => el.id === cardId ? ({...card, id: el.id}) : el)
    res.send('Card updated');
  })

  app.get('/card/:cardId', (req, res) => {
    const cardId = req.params.cardId;
    cardSingle = cards.filter(el => el.id === cardId)
    res.send(cardSingle);
  })
}

module.exports = routes;