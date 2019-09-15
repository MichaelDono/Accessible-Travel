import { Link } from "gatsby"
import React from "react"

import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import styles from './largeButton.module.css'

export default (props) => (
    <Button as={Link} variant="primary" size="lg" className={styles.buttonContainer} block>
        <img src="static/img/placeholder.png"  height={100} className={styles.img} />
        <h3 className={styles.title}>{props.title || "Hello World"}</h3>
    </Button>
)