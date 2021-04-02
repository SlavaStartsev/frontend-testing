import React from 'react';

import { Button } from './components/Button';
import { Input } from './components/Input';
import { Link } from './components/Link';

export function App() {
  const [items, setItems] = React.useState([]);
  const [text, setText] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newItem = {
      id: Date.now(),
      text
    };

    setText('');
    setItems(state => [...state, newItem]);
  }

  const handleChange = (event) => setText(event.target.value);

  const removeItem = (event) => {
    const { id } = event.target.dataset;

    setItems(items.filter(item => item.id !== +id));
  } 

  return (
    <div>
      <h1>TODOS</h1>

      <ul>
        {items.map((item, index) => (
          <li key={item.id}>{item.text}<Button type="button" onClick={removeItem} data-id={item.id}>-</Button></li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">Ready with your next todo?</label>
        <br />
        <Input id="new-todo" value={text} onChange={handleChange} />
        <Button type="submit">Add №{items.length + 1}</Button>
      </form>

      <Link href="http://magic.com">Magic link</Link>
    </div>
  );
}

