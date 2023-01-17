import { Habit } from './components/Habit';

export function App() {
	return (
		<>
			<Habit completed={3} />
			<Habit completed={5} />
			<Habit completed={1} />
			<Habit completed={2} />
		</>
	);
}
