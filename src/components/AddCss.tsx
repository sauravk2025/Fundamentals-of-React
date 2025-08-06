import './AddCss.css';
import style from './AddCss.module.css'
function AddCss() {

    const text2style:React.CSSProperties = {
        color :"blue"

    }

  return (
    <div>
      <h1 id = 'text1'>Adding style by external file</h1>
      <h1 id = 'text2' style={text2style}>Adding style inline</h1>
      <h1 id = 'text3' style={{color:"green"}}>Adding style by defining it before</h1>
      <h2 id = "text4" className={style.text}>Adding style from modules</h2>
    </div>
  )
}

export default AddCss
