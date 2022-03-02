import './App.css'
import { Link, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
export default function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/recipe-list"> Recipe List </Link>
        </li>
        <li>
          <Link to="/"> Home </Link>
        </li>
      </ul>
      <Switch>
        <Route path="/recipe-list">
          <RecipeList />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
      {/* <Welcome />
      <RecipeList /> */}
    </div>
  );
}

function Welcome() {
  const message = "Welcome to Recipe List 🍗"
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}
function RecipeList() {
  const message = "Awesome Recipe List";
  const [recipeList, setRecipeList] = useState([])
  useEffect(() => {
    fetch("https://61d28820da87830017e595e3.mockapi.io/recipes")
      .then((data) => data.json())
      .then((recipes) => setRecipeList(recipes));
  }, [])
  return (
    <div>
      <h1>{message}</h1>
      <div className='recipe-list-container'>
        {recipeList.map(recipe => <Recipe recipe={recipe} />)}
      </div>
    </div>
  );
}
function Recipe({ recipe }) {
  return (
    <div className='recipe-container'>
      <img src={recipe.picture} alt={recipe.name} className='Recipe-picture' />
      <p className='Recipe-Name'>{recipe.name}</p>
    </div>
  )
}