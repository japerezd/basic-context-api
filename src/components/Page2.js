import { useContext } from 'react';
import { DataContext } from '../context/DataContext'

export default function Page2() {
    const { data } = useContext(DataContext);
  return (
    <div>
      <h1>Page 2</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <hr />
    </div>
  );
}
