import React, { useState } from 'react';

import AppRoutes from './appRoutes'
import AppAuthRoutes from './appAuthRoutes'

const Routes: React.FC = () => {

    const [auth, setAuth] = useState(true);

    return(
        auth ? <AppRoutes/> : <AppAuthRoutes/>
    )
}


export default Routes