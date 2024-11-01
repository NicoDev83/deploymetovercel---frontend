fetch('https://vercel.com/api/toolbar/link/deploymetovercel-sigma.vercel.app?via=project-dashboard-alias-list&p=1&page=year')
	.then(response => response.json())
	.then(data => {
		document.querySelector('#year').textContent = data.year
	});