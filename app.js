let Menu=document.querySelector('#Menu');
let Trending=document.querySelector('#Trending');
let Animation=document.querySelector('#Animation');
let Movies=document.querySelector('#Movies');
let Series=document.querySelector('#Series');
let AboutUs=document.querySelector('#About-Us');
let Premiering=document.querySelector('#Premiering');
let Updates=document.querySelector('#Updates');
let MenuDiv=document.querySelector('#Menu-Div');
//Menu Section
let Home=document.querySelector('#Home');
let animation=document.querySelector('#animation');
let movies=document.querySelector('#movies');
let series=document.querySelector('#series');
let aboutus=document.querySelector('#about-us');
let premiering=document.querySelector('#premiering');
let updates=document.querySelector('#updates');
//news letter
let Input=document.querySelector('#input');
let Email=document.querySelector('#mail');
let UserName=document.querySelector('#UserName');
let Sumbit=document.querySelector('button');
let User=document.querySelector('#user');







//Functions
Menu.onclick=()=>{
	MenuDiv.style.display = 'block';
}

//Menu Functions
Home.onclick=()=>{
	MenuDiv.style.display = 'none';
	Animation.style.display = 'none';
	Trending.style.display = 'block';
	Movies.style.display = 'none';
	Series.style.display = 'none';
	AboutUs.style.display = 'none';
	Premiering.style.display = 'none';
	Updates.style.display = 'none';
}
animation.onclick=()=>{
	MenuDiv.style.display = 'none';
	Animation.style.display = 'block';
	Trending.style.display = 'none';
	Movies.style.display = 'none';
	Series.style.display = 'none';
	AboutUs.style.display = 'none';
	Premiering.style.display = 'none';
	Updates.style.display = 'none';
	Animation.innerHTML=AnimationData;
}
movies.onclick=()=>{
	MenuDiv.style.display = 'none';
	Animation.style.display = 'none';
	Trending.style.display = 'none';
	Movies.style.display = 'block';
	Series.style.display = 'none';
	AboutUs.style.display = 'none';
	Premiering.style.display = 'none';
	Updates.style.display = 'none';
	Movies.innerHTML=MoviesData;
}
series.onclick=()=>{
	MenuDiv.style.display = 'none';
	Animation.style.display = 'none';
	Trending.style.display = 'none';
	Movies.style.display = 'none';
	Series.style.display = 'block';
	AboutUs.style.display = 'none';
	Premiering.style.display = 'none';
	Updates.style.display = 'none';
	Series.innerHTML=SeriesData;
}
aboutus.onclick=()=>{
	MenuDiv.style.display = 'none';
	Animation.style.display = 'none';
	Trending.style.display = 'none';
	Movies.style.display = 'none';
	Series.style.display = 'none';
	AboutUs.style.display = 'block';
	Premiering.style.display = 'none';
	Updates.style.display = 'none';
	AboutUs.innerHTML=AboutData;
}
premiering.onclick=()=>{
	MenuDiv.style.display = 'none';
	Animation.style.display = 'none';
	Trending.style.display = 'none';
	Movies.style.display = 'none';
	Series.style.display = 'none';
	AboutUs.style.display = 'none';
	Premiering.style.display = 'block';
	Updates.style.display = 'none';
	Premiering.innerHTML=PremieringData
}
updates.onclick=()=>{
	MenuDiv.style.display = 'none';
	Animation.style.display = 'none';
	Trending.style.display = 'none';
	Movies.style.display = 'none';
	Series.style.display = 'none';
	AboutUs.style.display = 'none';
	Premiering.style.display = 'none';
	Updates.style.display = 'block';
	Updates.innerHTML=UpdateData;
}

Trending.innerHTML=TrendingData;
Sumbit.onclick=()=>{
	if (Email.value===Email.value) {
		localStorage.setItem('EmailMovieLander',Email.value);
		 Input.style.display='none';
	}
	if (UserName.value===UserName.value) {
		localStorage.setItem('UserMovieLander',UserName.value);
		 Input.style.display='none';
		User.innerHTML=localStorage.getItem('UserMovieLander',UserName.value).toUpperCase();
	}
	 var form = document.getElementById('sheetdb-form');
        form.addEventListener("submit", e => {
          e.preventDefault();
          fetch(form.action, {
              method : "POST",
              body: new FormData(document.getElementById("sheetdb-form")),
          }).then(
              response => response.json()
          ).then((html) => {
            window.alert('Email will be Sent to '+" "+localStorage.getItem('EmailMovieLander',Email.value).toUpperCase()+" "+"For Updates");

          });
        }); 
}
if (localStorage.getItem('EmailMovieLander',Email.value)){
	Input.style.display='none';
}
if (localStorage.getItem('UserMovieLander',UserName.value)){
	Input.style.display='none';
	User.innerHTML=localStorage.getItem('UserMovieLander',UserName.value).toUpperCase();
}

