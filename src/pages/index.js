import React from "react"
import { Link } from "gatsby"

import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

import Layout from "../components/layout"
import LargeButton from "../components/largeButton"

import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <Layout>
    <LargeButton title="Arrange Assistance" />
    <LargeButton title="Travel Updates" />
    <LargeButton title="My Details" />
  </Layout>
)

export default IndexPage
