describe('HeroService', function () {
	let heroService;

	beforeEach(function () {
		heroService = new HeroService();
	});

	it('should create a hero service object', function () {
		expect(heroService).toBeTruthy();
	});

	it('should get hero list', function () {
		expect(heroService.getHeroList()).toBeDefined();
		expect(heroService.getHeroList()).toEqual(heroList);
	});

	it('should get one hero by id', function () {
		const id = 14;
		const hero = heroList.find((hero) => hero.id === id);
		expect(heroService.getHeroById(id)).toEqual(hero);
	});

	it('should get one hero by name', function () {
		const name = 'Dr IQ';
		const hero = heroList.find((hero) => hero.name === name);
		expect(heroService.getHeroByName(name)).toEqual(hero);
	});
});
