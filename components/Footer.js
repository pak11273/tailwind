import React, { Component } from 'react'

import { Typography } from '@material-ui/core'

export default class Footer extends Component {
    render() {
        return (
            <>
                <Typography variant="subtitle2" style={{ color: '#65819DAA' }}>
                    All Rights Reserved &copy; {new Date().getFullYear()}
                </Typography>
            </>
        )
    }
}
