const nav = require('./nav.json');

const dashboard = (req, res) => {
	res.render('dashboard', {
		title: 'Dashboard',
		link: `/dashboard`,
		navlist: nav
	});
};

const wiki = (req, res) => {
	// FIXME sample data
	const page_content = require('./UoN.json');
	res.render('wiki', {
		title: page_content.name,
		link: `/wiki/${req.params.name}`,
		wiki_content: page_content,
		navlist: nav
	});
};

const settings = (req, res) => {
	res.render('settings', {
		title: 'Settings',
		link: `/settings`,
		navlist: nav
	});
};

module.exports = {
	dashboard,
	wiki,
	settings
};
