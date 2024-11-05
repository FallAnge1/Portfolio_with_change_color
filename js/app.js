function showSideBar() {
	const sidebar = document.querySelector('.sidebar');
	sidebar.style.transform = 'translateX(0)';
}
function hideSideBar() {
	const sidebar = document.querySelector('.sidebar');
	sidebar.style.transform = 'translateX(100%)';
}

// --------------- Left SideBar Animation

const viewer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry);
		if(entry.isIntersecting) {
			entry.target.classList.add('show');
		}else {
			entry.target.classList.remove('show');
		}
	});
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => viewer.observe(el));

// ------------ links

// document.getElementById('about').addEventListener('click', (event) => {
// 	event.preventDefault();
// 	const about = document.querySelector('.about');
// 	const subject = document.getElementById('subject');
// 	const title = document.getElementById('title');
// 	const boxes = document.getElementById('boxes');

// 	// Устанавливаем контент
// 	subject.innerHTML = 'Подготовка сайтов';
// 	title.innerHTML = 'Я веб-разработчик с опытом работы в ';

// 	// Добавляем класс для запуска анимации
// 	about.classList.add('no_hide');
// 	subject.classList.add('no_hide');
// 	title.classList.add('no_hide');
// 	boxes.classList.add('no_hide');
// });



document.addEventListener('DOMContentLoaded', function () {
	const content = {
		about: `
			<p>Подготовка сайтов</p>
			<p style="font-size: 25px;">Я веб-разработчик с опытом работы в </p>
			<div class="boxes">
				<div class="box">HTML</div>
				<div class="box">CSS</div>
				<div class="box">JavaScript</div>
				<div class="box">React</div>
				<div class="box">TypeScript</div>
				<div class="box">Node Js</div>
			</div>
				<div class="box2">Создаю адаптивные и функциональные веб-сайты</div>
				<p class="title2">&#8226; &#8226; &#8226; обеспечивающие превосходный пользовательский опыт.</p>
				<p class="title3">Мои проекты варьируются от</p>
				<div class="title4">
					<p><g>лендингов</g></p>
					<p style="font-size: 40px; letter-spacing: 20px; text-transform: uppercase;">до</p>
					<p>сложных <g>веб-приложений</g></p>
				</div>
				<p class="title5">Всегда стремлюсь к совершенству,<br>изучаю новые технологии и методологии.</p>
				<div class="box2 box3">Готов воплотить ваши идеи в жизнь!</div>
		`,
		projects: `
				<h2 style="margin-bottom:30px;">Projects</h2>
				<div class="projects-grid">
					<div class="_project">
						<img src="./img/projects/NFT_GO site landpage.png" alt="">
						<h1>NFT MARKET</h1>
						<p style="margin-bottom: 20px;">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, veritatis!</p>
						<div style="display: flex; flex-direction: row; gap: 10px;">
							<div class="structure">JavaScript</div>
							<div class="structure">HTML</div>
							<div class="structure">React</div>
						</div>
						<button class="btn">Посмотреть</button>
					</div>
					<div class="_project">
						<img src="./img/projects/Масла Очистки site landPage.png" alt="">
						<h1>МАСЛО ОЧИСТКИ</h1>
						<p style="margin-bottom: 20px;">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, veritatis!</p>
						<div style="display: flex; flex-direction: row; gap: 10px;">
							<div class="structure">JavaScript</div>
							<div class="structure">HTML</div>
							<div class="structure">React</div>
						</div>
						<button class="btn">Посмотреть</button>
					</div>
					<div class="_project">
						<img src="./img/projects/Sako_cars Delorian.png" alt="">
						<h1>DELORIAN DMC-12</h1>
						<p style="margin-bottom: 20px;">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, veritatis!</p>
						<div style="display: flex; flex-direction: row; gap: 10px;">
							<div class="structure">JavaScript</div>
							<div class="structure">HTML</div>
							<div class="structure">React</div>
						</div>
						<button class="btn">Посмотреть</button>
					</div>
					<div class="_project">
						<img src="./img/projects/Sako_cars Mercedes.png" alt="">
						<h1>MERCEDES</h1>
						<p style="margin-bottom: 20px;">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, veritatis!</p>
						<div style="display: flex; flex-direction: row; gap: 10px;">
							<div class="structure">JavaScript</div>
							<div class="structure">HTML</div>
							<div class="structure">React</div>
						</div>
						<button class="btn">Посмотреть</button>
					</div>
					<div class="_project">
						<img src="./img/projects/Sako_cars Mustang.png" alt="">
						<h1>FORD MUSTANG</h1>
						<p style="margin-bottom: 20px;">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, veritatis!</p>
						<div style="display: flex; flex-direction: row; gap: 10px;">
							<div class="structure">JavaScript</div>
							<div class="structure">HTML</div>
							<div class="structure">React</div>
						</div>
						<button class="btn">Посмотреть</button>
					</div>
					<div class="_project">
						<img src="./img/projects/Ресторан page 1.png" alt="">
						<h1>САЙТ РЕСТОРАНА</h1>
						<p style="margin-bottom: 20px;">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, veritatis!</p>
						<div style="display: flex; flex-direction: row; gap: 10px;">
							<div class="structure">JavaScript</div>
							<div class="structure">HTML</div>
							<div class="structure">React</div>
						</div>
						<button class="btn">Посмотреть</button>
					</div>
					<div class="_project">
						<img src="./img/projects/Ресторан page 2.png" alt="">
						<h1>САЙТ РЕСТОРАНА 2</h1>
						<p style="margin-bottom: 20px;">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, veritatis!</p>
						<div style="display: flex; flex-direction: row; gap: 10px;">
							<div class="structure">JavaScript</div>
							<div class="structure">HTML</div>
							<div class="structure">React</div>
						</div>
						<button class="btn">Посмотреть</button>
					</div>
					<div class="_project">
						<img src="./img/projects/Ресторан page 3.png" alt="">
						<h1>САЙТ РЕСТОРАНА 3</h1>
						<p style="margin-bottom: 20px;">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, veritatis!</p>
						<div style="display: flex; flex-direction: row; gap: 10px;">
							<div class="structure">JavaScript</div>
							<div class="structure">HTML</div>
							<div class="structure">React</div>
						</div>
						<button class="btn">Посмотреть</button>
					</div>
				</div>
		`,
		contact: `
			<div class="contact-info">
				<h2 class="contact-info-title" id="contact_title">Давайте Поговорим</h2>
				<div style="width: 60%; display: flex; flex-direction: column; align-items: center;">
					<div class="contact-info-link" onclick="CopyLink(email)" id="email">Email</div>
					<div class="contact-info-link" onclick="CopyLink(telegram)" id="telegram">Telegram</div>
					<div class="contact-info-link" onclick="CopyLink(PhoneNum)" id="PhoneNum">Phone</div>
				</div>
			</div>
		`
	};

	// Function to change the content of the right side
	function changeContent(section) {
		document.getElementById('rightside-info').innerHTML = content[section];
	}

	function ChangeClick(elementId) {
    document.getElementById('rightside-info').classList.remove('no_hide');
    changeContent(elementId);
	}
	
	// Add event listeners to navigation links
	document.getElementById('about').addEventListener('click', function (e) {
		e.preventDefault();
		ChangeClick('about');
		setTimeout(() => {
			document.getElementById('rightside-info').classList.add('no_hide');
		}, 300); 
	});

	document.getElementById('projects').addEventListener('click', function (e) {
		e.preventDefault();
		ChangeClick('projects');
		setTimeout(() => {
			document.getElementById('rightside-info').classList.add('no_hide');
		}, 300); 	
	});

	document.getElementById('contact').addEventListener('click', function (e) {
		e.preventDefault();
		ChangeClick('contact');
		setTimeout(() => {
			document.getElementById('rightside-info').classList.add('no_hide');
		}, 300); 		
	});
});


// =--------===---===---===---===--- Contact Links
let copyTextIndex = 0;
let copyCharacterIndex = 0;
let interval1;
const addCopyText = (text) => {
	clearInterval(interval1); 
	copyCharacterIndex = 0; 
	contact_title.textContent = ''; 

	interval1 = setInterval(() => {
			copyCharacterIndex++;
			contact_title.textContent = text.slice(0, copyCharacterIndex);
			if (copyCharacterIndex === text.length) {
					clearInterval(interval1);
			}
	}, 90);
}

const CopyLink = (element) => {
	const email = 'sako.delovoi@gmail.com';
	const telegram = '@Fal1Angel';
	const phone = '+77053367291';
	const value = element.innerHTML;
	if(value === 'Email') {
	navigator.clipboard.writeText(email);
	addCopyText(email)
	contact_title.classList.replace('contact-info-title', 'contact-info-title-change');
	} else if(value === "Telegram") {
	navigator.clipboard.writeText(telegram);
	addCopyText(telegram)
	contact_title.classList.replace('contact-info-title', 'contact-info-title-change');
	} else if(value === "Phone") {
	navigator.clipboard.writeText(phone);
	addCopyText(phone)
	contact_title.classList.replace('contact-info-title', 'contact-info-title-change');
	}
	element.innerHTML = "Cкопирован!"
	setTimeout(() => {
		element.innerHTML = value;
	}, 3000)
	
}	

