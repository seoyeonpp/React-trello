import { useRecoilState, useRecoilValue } from 'recoil';
import { hourSelector, minutesState } from './atoms';

function App() {
  const [minutes, setMinutes] = useRecoilState(minutesState)
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinuteChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value)
  }
  const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  }
  return (
    <div>
      <input value={minutes} onChange={onMinuteChange} type="number" placeholder='Minutes' />
      <input value={hours} onChange={onHoursChange} type="number" placeholder='Hours' />
    </div>
  );
}

export default App;
