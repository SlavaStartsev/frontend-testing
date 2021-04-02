import React from 'react';

export function Input({id, name, value, onChange}) {
  return <input id={id} name={name} value={value} onChange={onChange} data-qa="test-input" />
}