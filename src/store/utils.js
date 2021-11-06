export function slugify(str){
    str = str.replace(/^\s+|\s+$/g, '');
    str = str.toLowerCase();
    var from = "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;";
    var to   = "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    str = str.replace(/[^a-z0-9 -]/g, '') 
    .replace(/\s+/g, '-') 
    .replace(/-+/g, '-'); 
    return str;
}

export function titleize(slug) {
  var words = slug.split("-");
  return words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
  }).join(' ');
}

export async function fetchWebResults(term){
	const webRes = await fetch(`https://google-search3.p.rapidapi.com/api/v1/search/q=${term}&num=100`, {
		"method": "GET",
		"headers": {
			"x-user-agent": "desktop",
			"x-proxy-location": "US",
			"x-rapidapi-host": "google-search3.p.rapidapi.com",
			"x-rapidapi-key": "1c958f6e54msh1542fe7d9c9d198p15e293jsn03d0798f118a"
		}
	});
	const webJson = await webRes.json();
	return webJson
}

export async function fetchImageResults(term){
	const imgRes = await fetch(`https://google-search3.p.rapidapi.com/api/v1/images/q=${term}&num=100`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "google-search3.p.rapidapi.com",
			"x-rapidapi-key": "1c958f6e54msh1542fe7d9c9d198p15e293jsn03d0798f118a"
		}
	});
	const imgJson = await imgRes.json();
	return imgJson
}

export async function fetchNewsResults(term){
	const newsRes = await fetch(`https://google-search3.p.rapidapi.com/api/v1/news/q=${term}&num=100`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "google-search3.p.rapidapi.com",
			"x-rapidapi-key": "1c958f6e54msh1542fe7d9c9d198p15e293jsn03d0798f118a"
		}
	});
	const newsJson = await newsRes.json();
	return newsJson
}