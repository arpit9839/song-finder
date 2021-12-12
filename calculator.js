function SearchtLyrics()
{
let search= document.getElementById("split").value;
if(!search) return;
showLyrics(search)
.then((val) => {
	
 if(val) {
	 console.log(val.length);
	 for(var i = 0; i < val.length; i++)
	 {
		 var info=val[i];
		 console.log(info.link);
        var node1 = document.createElement("li");
		var a = document.createElement('a');
		var href = document.createElement('href');
        var node2 = document.createElement("button");
		var  content = document.createTextNode(info.title);
		var  content1 = document.createTextNode("lyrics");
		node1.appendChild(content);
		node2.appendChild(content1);
	    
		a.href= info.link;
		
		
		document.getElementById("title").appendChild(node1).appendChild(a).appendChild(node2);;
		
		
	 }
}
});
}

function showLyrics(search)
{
	search= search.toUpperCase();
	var val =[];
	return getData().then((students) => {
	var data = students.data;
	if(!data) return;
	for (var j = 0; j < data.length; j++)
	{
		
	 var curr = data[j];

	if(curr.title.toUpperCase().trim() == search || curr.title_short.toUpperCase().trim() == search)
	{

	  val.push(curr);
	}
	}
	return val;
	});
}


async function getData()
{
return await fetchApi("https://api.lyrics.ovh/suggest/rihanna");
}


async function fetchApi(url)
{
 let responce = await fetch(url);
  if(responce.status == 200)
  {
   let data = await responce.json();
   return data;
  }
}

