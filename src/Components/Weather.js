import react from "react";

const Weather = ({location,current}) => {
    const {name,region,country} = location
    const {condition,temp_c, feelslike_c} = current
    const styles = {
        wrapper: {
            border: '1px solid black',
            margin: '10px auto',
            padding: '10px',
            width: '222px',
            background: '#f7f3f3'
        },
        temp: {
            marginBottom: '5px'
        },
        feels: {
            fontSize: '15px',
            margin: 0
        },
        condition: {
            fontSize: '15px'
        },
        image: {
            verticalAlign: 'middle',
            height: '35px'
        }
    }
    return (
        <div style={styles.wrapper}>
            <h5>{name}, {region}, {country} weather</h5>
            <div>
                <h3 style={styles.temp}>{temp_c}&deg;C</h3>
                <p style={styles.feels}>Feels like {feelslike_c}&deg;C</p>
                <p style={styles.condition}>{condition.text} <img src={`https:${condition.icon}`} style={styles.image}/> </p>
            </div>
        </div>
    )
}

export default Weather