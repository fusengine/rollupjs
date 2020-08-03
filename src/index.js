import './sass/main.scss'
import msg from './msg'

const init = () => {
	msg(`
		<div class="container mt-5">
			<h1 class="text-center">Fusengine by Rollup</h1>
			<img scr="https://cdn.fusengine.ch/logo/Fusengine.svg" alt="img"></img>
		</div>
	`)
}

init()
