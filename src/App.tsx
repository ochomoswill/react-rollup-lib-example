import {Button} from 'react-rollup-lib'

function App() {
    return (
        <div className="App" style={{height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div>
                <Button
                    text={'Sample Button'}
                    type={'error'}
                    onClick={() => console.log('We are game')}
                />
            </div>
        </div>
    )
}

export default App
