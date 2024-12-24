import { useEffect, useState } from 'react'

const DAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const MONTH = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const START_DATE = new Date()

function pad(n) {
	if (n > 9) {
		return n
	}
	return '0' + n
}


function App() {

	const [now, setNow] = useState(START_DATE)

	const clock24h = pad(now.getHours()) + ':' + pad(now.getMinutes()) // + ':' + pad(now.getSeconds())
	const thedate = now.getDate() + ' ' + MONTH[now.getMonth()] + ' ' + now.getFullYear()

	useEffect(() => {

		const timer_id = setInterval(() => {
			setNow(new Date())
		}, 1000)

		return () => {
			clearTimeout(timer_id)
		}

	}, [])

	return (
		<div className="thepage">
			<div className="big">{DAY[now.getDay()]}</div>
			<div className="big_time">{clock24h}</div>
			<div className="big">{thedate}</div>
		</div>
	)
}

export default App
