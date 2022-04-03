
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import VideoCall from "./videoCall/VideoCall"



function App() {

	return (
		<div className="App">

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<VideoCall />} />
				</Routes>

			</BrowserRouter>

		</div>
	)
}

export default App
