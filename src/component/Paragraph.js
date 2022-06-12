import React from 'react';
import { useContext } from 'react'
import { themeContext } from '../ThemeContext'


function Paragraph() {
    const theme = useContext(themeContext)

    return (
        <p className={theme.theme}>
            hello context hook<br />
            hello context hook<br />
            hello context hook<br />
            hello context hook<br />
            hello context hook<br />
            hello context hook<br />
        </p>
    )
}
export default Paragraph;
