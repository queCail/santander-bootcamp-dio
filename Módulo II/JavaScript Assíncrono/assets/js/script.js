const BASE_URL = 'https://cataas.com/cat?json=true';

const getCats = async () => {
	try {
		const data = await fetch(BASE_URL);
		const json = await data.json();
		return 'https://cataas.com'+json.url;
	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
	const img = document.getElementsByTagName('img')[0];
	img.src = await getCats();
};

loadImg();

const btn = document.getElementById('newCat');
btn.addEventListener('click', loadImg);
