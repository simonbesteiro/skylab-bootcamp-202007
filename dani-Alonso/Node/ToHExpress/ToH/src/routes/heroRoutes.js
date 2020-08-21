const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');
const debug = require('debug')('app:heroRoutes');

const heroRoutes = express.Router();
function router(nav) {
	heroRoutes
		.route('/')
		.all((req, res, next) => {
			if (req.user) {
				next();
			} else {
				res.redirect('/auth/signin');
			}
		})

		.post((req, res) => {
			const { heroId, deleteAll, newHero } = req.body;
			const filter = { _id: ObjectID(heroId) };
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			const collectionName = 'heroes';
			let client;
			(async function mongo() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = await db.collection(collectionName);
					if (heroId) {
						await collection.deleteOne(filter, heroId, (error) => {
							if (error) {
								throw error;
							}
							// debug(response);
							res.redirect('/heroes');
						});
					} else if (deleteAll) {
						await collection.deleteMany({});
						res.redirect('/heroes');
					} else if (newHero) {
						//
						const [{ id }] = await collection
							.find()
							.sort({ id: -1 })
							.limit(1)
							.toArray();
						await collection.insertOne({
							name: newHero,
							id: id + 1
						});
						res.redirect('/heroes');
					}
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		})

		.get((req, res) => {
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			let client;
			(async function query() {
				try {
					client = await MongoClient.connect(url);
					debug('Connection stablished...');
					const db = client.db(dbName);
					const collection = await db.collection('heroes');
					const heroes = await collection.find().toArray();
					res.render('list', { nav, heroList: heroes });
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		});
	heroRoutes
		.route('/:heroId')

		.all((req, res, next) => {
			const id = req.params.heroId;
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			const collectionName = 'heroes';
			let client;
			(async function query() {
				try {
					client = await MongoClient.connect(url);
					debug('Connection stablished...');
					const db = client.db(dbName);
					const collection = await db.collection(collectionName);
					res.hero = await collection.findOne({ _id: new ObjectID(id) });
					next();
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		})
		.post((req, res) => {
			// conectarme a mongodb, actualizar el hero con id:_id, responder redireccionando a la lista
			const updateQuery = { $set: req.body };
			const filter = { _id: new ObjectID(req.params.heroId) };
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			const collectionName = 'heroes';
			let client;

			(async function mongo() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = await db.collection(collectionName);
					await collection.updateOne(filter, updateQuery, (error, response) => {
						if (error) {
							throw error;
						}
						debug(response);
						res.redirect('/heroes');
					});
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		})
		.get((req, res) => {
			res.render('detail', {
				nav,
				hero: res.hero
			});
		});

	return heroRoutes;
}
module.exports = router;
