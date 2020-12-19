import React from 'react'
import { motion } from 'framer-motion'

import TextField from '@material-ui/core/TextField'

function Password({ setAllowed }) {
  const checkPW = (e) => {
    if (e.target.value === 'bingo!') {
      setAllowed('bingo!')
    }
  }

  return (
    <motion.div
      className="theme-bg-secondary"
      style={{
        margin: '0px auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'fixed',
        width: '100%',
        padding: '0px 30px 200px 30px',
      }}
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1
          style={{
            marginTop: 0,
            fontFamily: 'Montserrat',
            fontWeight: 700,
          }}
        >
          Coming Soon
        </h1>
        <TextField
          id="pass"
          label="Password"
          defaultValue=""
          className="theme-text"
          style={{ width: 400 }}
          onChange={(e) => checkPW(e)}
        />
      </motion.div>
    </motion.div>
  )
}

export default Password
