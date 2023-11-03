// src/components/Button.js
import React from 'react';

export function Button({ onClick, label }) {
  return <button onClick={onClick}>{label}</button>;
}
