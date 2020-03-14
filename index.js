const fs = require('fs')
const data = JSON.parse(fs.readFileSync('data.json'))

const videoHTML = video =>
	video ? `<div class='project__video'><a href='#${id}'>*</a></div>` : ''

const projects = data.projects.map(d => {
	const { id, title, description, url, video } = d
	return `
		<div class='project'>
			<div class='project__image'>
				<a target='_self' href='${url}'><img src='img/${id}.jpg' /></a>
			</div>
			<p class='project__description'><a href='${url}'>${title}</a> ${description}</p>
			${videoHTML(video)}
		</div>
	`
}).join('\n')

const template = fs.readFileSync('index.template', 'utf8')
const style = fs.readFileSync('css/main.css', 'utf8')

const html = template
	.replace('<!-- projects -->', projects)
	.replace('/* style */', style)

fs.writeFileSync('index.html', html)
