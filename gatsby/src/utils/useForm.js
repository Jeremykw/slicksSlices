import { useState } from 'react';

export default function useForm(defaults) {
  const [values, setValue] = useState(defaults);

  function updateValue(e) {
    // check if its a number an convert
    let { value } = e.target;
    if (e.target.type === 'number') {
      value = parseInt(e.target.value);
    }

    setValue({
      // copy the existing valies into it
      ...values,
      // update the new value that changed
      [e.target.name]: value,
    });
  }

  return { values, updateValue };
}
