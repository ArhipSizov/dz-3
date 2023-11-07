import './style/App.css';
import Title from "./Title/Title";

function App(){

  const arrSend1 = ['300','450','550','1000']
  const arrSend2 = ['10','50','100','200']

  const clBlue = {
    wite:"blue-wite",
    black:"blue-black"
  }
  const clGreen = {
    wite:"green-wite",
    black:"green-black"
  }
  const clRed = {
    wite:"red-wite",
    black:"red-black"
  }
  const clBlack = {
    wite:"black-wite",
    black:"black-black"
  }


  return(
    <div className='all'>
      <Title send2={arrSend2[0]} send1={arrSend1[0]} cl={clBlue}/>
      <Title send2={arrSend2[1]} send1={arrSend1[1]} cl={clGreen}/>
      <Title send2={arrSend2[2]} send1={arrSend1[2]} cl={clRed}/>
      <Title send2={arrSend2[3]} send1={arrSend1[3]} cl={clBlack}/>
    </div>
  )
}

export default App
