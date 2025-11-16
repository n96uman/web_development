import {useState} from 'react';
function Counter(){
    const [count,setcount]=useState(0);
    const [texts,settexts]=useState("There is no text yet");
    return(
        <div className='main1'>
            <h1>beginer1</h1>
            <div className='counter'>
                <h1 className='changed'>{count}</h1>
                <button onClick={() => setcount(count + 1)}>+</button>
            <button onClick={() => setcount(count -1 )}>-</button>
            </div>
            <div className='changer'>
                <h1 className='changed'>{texts}</h1>
                <input className="input" type='text' placeholder='input your thought' onChange={(e) => settexts(e.target.value)}></input>
            </div>
        </div>
    )
}

export default Counter;