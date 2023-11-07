import './title.css';

export default function Title(props){
    console.log(props);




    return(
        <div className='litlAll'>
            <div className={props.cl.black}>
                <p>Безлимитный {props.send1}</p>
            </div>
            <div className={props.cl.wite}>
                <p>{props.send1}</p>
            </div>
            <div className='div3'>
                <p>до {props.send2} Мбит/сек</p>
            </div>
            <div className='div4'>
                <p>Объём включенного трафика не ограничен</p>
            </div>
        </div>
    )
}