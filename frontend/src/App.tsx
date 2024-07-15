import { Play } from './components/play/Play';

function App() {
  return (
    <section className='my-0 mx-auto p-4 flex flex-col flex-grow'>
      <h1 className='text-2xl font-bold'>RPSSL</h1>
      <div className='flex-1'>
        A game of Rock Paper Scissors Spock Lizard,{' '}
        <a
          href='https://www.samkass.com/theories/RPSSL.html'
          target='_blank'
          rel='noreferrer'
        >
          more information from the creator here!
        </a>
      </div>
      <Play />
    </section>
  );
}

export default App;
