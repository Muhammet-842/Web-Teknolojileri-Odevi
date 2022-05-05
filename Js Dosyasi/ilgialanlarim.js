const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
		'X-RapidAPI-Key': '3f5fed55b4msh90dfa89af825b1bp1cbf6djsnb098e0f214ff'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game', options)
.then(response => response.json())
.then(data => {
    const list = data.d;

    list.map((item) => {
        const name = item.l;
        const poster = item.i.imageUrl;
        const movie = '<li><img src="'+poster+'"> <h2>"'+name+'"</h2></li>'
        document.querySelector('.movies').innerHTML+= movie;
    })
})
.catch(err => console.error(err));