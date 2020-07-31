import React from 'react';
import './App.css';
import HeroDetail from './components/HeroDetail';
import Header from './components/Header';
import HeroDashboard from './components/HeroDashboard';
import HeroList from './components/HeroList';
import { Route, Switch, Redirect } from 'react-router-dom';
import heroListItem from './hero.mock';
import PageNotFound from './components/PageNotFound'

function App(props) {
	return (
		<main className = "main-container">
			<Header />
			<Switch>
			<Route path="/" exact component={()=><HeroDashboard heroes={heroListItem}/>}/>
			<Route path="/hero" exact component={(props)=><HeroList  {...props} heroes={heroListItem}/>}/>
			<Route path="/hero/:heroId" component={HeroDetail} />
			<Redirect from="/heroes" to="/hero" />
			<Route component={PageNotFound} />
			</Switch>
		</main>
	);
}

export default App;