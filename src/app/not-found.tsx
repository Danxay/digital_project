import { DoubleTitle } from '../components/DoubleTitle/DoubleTitle';

export default function NotFound() {
  return (
    <div style={{ padding: '200px 0' }} className={'container'}>
      <DoubleTitle first={'404'} second={'Страница не найдена'} />
    </div>
  );
}
