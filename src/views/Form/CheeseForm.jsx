import React from 'react';

export default function CheeseForm() {

  function handleForm(e) {
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleForm}>
        <label>
          Name:
          <input />
        </label>
        <button>Add Cheese!</button>
      </form>
    </>
  );
}
