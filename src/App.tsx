import reactLogo from './assets/react.svg';
import './App.css';

import { useLess } from './hooks/useLess';
import { useVoid } from './hooks/useVoid';
import { useEven } from './hooks/useEven';
import { useCuteAndFunny } from './hooks/useCuteAndFunny';
import { useRandomCodingStamina } from './hooks/useRandomCodingStamina';
import { useTruthy } from './hooks/useTruthy';

import { useLogException } from "./hooks/useLogException"

import { useSus } from "./hooks/useSus"

import { useSmile } from "./hooks/useSmile"
import { useWeird } from "./hooks/useWeird"


function App() {
  const useLessValue = useLess(0);
  const useLessAnotherValue = useLess('ඞ');

  const useEvenValue = useEven(2);
  const useEvenAnotherValue = useEven(1);


  const useCuteAndFunnyValue = useCuteAndFunny(
    'https://www.pixiv.net/en/artworks/101491852'
  );


  const useLogExceptionValue = useLogException("An error is occurred")
  

  const useVoidValue = useVoid()
  const useWeirdValue = useWeird(12)
  const useSusValue = useSus("createSus")


  const useSmileValue = useSmile('hello')

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>React Useless Hooks</h1>
      <div className='card'>
        <h2>useLess - a useless hook that returns initial value.</h2>

        <code>
          const value = useLess(0)
        </code>
        <div>value is {useLessValue}</div>
        <code>
          const anotherValue = useLess("ඞ")
        </code>
        <div>anotherValue is {useLessAnotherValue}</div>
      </div>
      <div className='card'>
        <h2>useEven - a useful hook to check number is even or not.</h2>

        <code>
          const value = useEven(2)
        </code>
        <div>value is {useEvenValue.toString()}</div>
        <code>
          const anotherValue = useEven(1)
        </code>
        <div>anotherValue is {useEvenAnotherValue.toString()}</div>
      </div>
      <div className='card'>
        <h2>useVoid - Does nothing, and returns nothing.</h2>

        <code>
          const value = useVoid()
        </code>
        <div>value is nothing</div>
      </div>

      <div className="card">

        <h2>useWeird - Does something weird</h2>

        <code style={{ backgroundColor: "black" }}>
          const weird = useWeird() &lt;button style=&#123;weird&#125
          &gt;Haha&lt;/button&gt
        </code>
        <button style={useWeirdValue}>Hahaha</button>
      </div>

      <div className="card">

        <h2>useSmile - 😊</h2>

        <code style={{ backgroundColor: "black" }}>
          const value = useSmile('hello')
        </code>
        <div>value is {useSmileValue}</div>
      </div>

      {/* ⬆️ UP HERE!! */}
      {/* <!-- Add your own useless hook example above this comment! --> */}

      <div className='card'>
        <h2>
          useRandomCodingStamina - This hook will return beverage to add more
          stamina while coding.
        </h2>

        <code style={{ backgroundColor: 'black' }}>
          const beverage = useRandomCodingStamina();
        </code>
        <div>
          Your stamina's add up is{' '}
          <span style={{ color: 'whitesmoke' }}>
            {useRandomCodingStamina()}
          </span>
        </div>
      </div>

      <div className='card'>
        <h2>useTruthy - This hook will return true to eternity.</h2>

        <code style={{ backgroundColor: 'black' }}>
          const isAccept = useTruthy();
        </code>
        <div>
          A: Should we hangout to night ?<br />
          B:&nbsp;
          <span style={{ color: 'whitesmoke' }}>
            {useTruthy() ? 'Yes' : 'No'}
          </span>
        </div>
      </div>

      <div className="card">
        <h2>useSus - ඞ</h2>

        <code style={{ backgroundColor: "black" }}>
          const value = useSus("createSus")
        </code>
        <div>value is {useSusValue}</div>
      </div>      


      {/* ⬆️ UP HERE!! */}
      {/* <!-- Add your own useless hook example above this comment! --> */}
      <div className='card'>
        <h2>useCuteAndFunny - 😭</h2>

        <code>
          const value = useCuteAndFunny('https://www.pixiv.net/en/artworks/101491852')
        </code>
        <div>value is {useCuteAndFunnyValue}</div>
      </div>

      <div className="card">
        <h2>useException - a useless hook to log message as error.</h2>

        <code style={{ backgroundColor: "black" }}>
          useLogException("An error is occured")
        </code>
        <div>The error "An error is occured" will be logged in console.</div>
      </div>

      <div className="card">
        <h2>
          Add your own useless hooks and
          <a
            href='https://github.com/narze/react-useless'
            target='_blank'
            style={{ paddingLeft: '0.25em' }}
          >
            submit a Pull Request!
          </a>
        </h2>
        or
        <h2>
          Request or find an idea for useless hooks in
          <a
            href='https://github.com/narze/react-useless/issues'
            target='_blank'
            style={{ paddingLeft: '0.25em' }}
          >
            Github Issues
          </a>
        </h2>
      </div>
    </div>
  );
}

export default App;
