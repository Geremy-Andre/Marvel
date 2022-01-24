import logo from './logo.svg';
import './App.css';
import { HeroesList } from './components/HeroesList'
import { ImageGrid } from './components/ImageGrid';
import { useState } from 'react/cjs/react.development';

export const App=()=> {
  const [categories, setCategories] = useState([])
  const [categories2, setCategories2] = useState('iron')
  const [names, setNames] = useState('Personajes')
  const [flag, setFlag] = useState(' ')
  let a=flag
  console.log(categories.length)
  return (
    <div className='container'>
      <HeroesList setFlag={setFlag} setNames={setNames} setCategories={setCategories2}/>
        {
            <ImageGrid
                category = { categories2 }
                tipos = { names }
            />
        }
    </div>
  );
}
