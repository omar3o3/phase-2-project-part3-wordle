import React , {useState ,useEffect} from 'react'

function EasyMode() {

  const [guessValue , setGuessValue] = useState('')

  useEffect(()=>{
    window.addEventListener('keyup' , handleKeyUp)

    return () => window.removeEventListener('keyup' , handleKeyUp)
  }, [guessValue])

  const handleKeyUp = ({key}) =>{

    // console.log(e.key)
    // console.log(key);

    setGuessValue((prev) => prev + key)

    // setGuessValue(prev => [prev + key])
    // console.log(guessValue);

    // setGuessValue((prev) => [prev , e.key])
    // console.log(guessValue)
  }

  if (guessValue !== ''){
    console.log(guessValue);
  }
  // console.log(guessValue);

  return (
    <div className='container'>
      
      <div className="row align-items-start m-5 display-5 text-center">
        <div className="col border border-dark bg-warning">
          A
        </div>
        <div className="col border border-dark bg-success">
          B
        </div>
        <div className="col border border-dark bg-secondary">
          C
        </div>
        <div className="col border border-dark">
          D
        </div>
        <div className="col border border-dark">
          E
        </div>
      </div>

      <div className="row align-items-start m-5 display-5 text-center">
        <div className="col border border-dark bg-warning">
          A
        </div>
        <div className="col border border-dark bg-success">
          B
        </div>
        <div className="col border border-dark bg-secondary">
          C
        </div>
        <div className="col border border-dark">
          D
        </div>
        <div className="col border border-dark">
          E
        </div>
      </div>

      <div className="row align-items-start m-5 display-5 text-center">
        <div className="col border border-dark bg-warning">
          A
        </div>
        <div className="col border border-dark bg-success">
          B
        </div>
        <div className="col border border-dark bg-secondary">
          C
        </div>
        <div className="col border border-dark">
          D
        </div>
        <div className="col border border-dark">
          E
        </div>
      </div>

      <div className="row align-items-start m-5 display-5 text-center">
        <div className="col border border-dark bg-warning">
          A
        </div>
        <div className="col border border-dark bg-success">
          B
        </div>
        <div className="col border border-dark bg-secondary">
          C
        </div>
        <div className="col border border-dark">
          D
        </div>
        <div className="col border border-dark">
          E
        </div>
      </div>

      <div className="row align-items-start m-5 display-5 text-center">
        <div className="col border border-dark bg-warning">
          A
        </div>
        <div className="col border border-dark bg-success">
          B
        </div>
        <div className="col border border-dark bg-secondary">
          C
        </div>
        <div className="col border border-dark">
          D
        </div>
        <div className="col border border-dark">
          E
        </div>
      </div>

    </div>
  )
}

export default EasyMode