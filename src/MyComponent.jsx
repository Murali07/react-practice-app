import React, { Suspense }  from 'react';

const OtherComponent = React.lazy(() => import("./OtherComponent").then((module) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data loaded successfully");
            resolve(module);
        }, 3000);
    })
}))

function MyComponent() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <OtherComponent />
            </Suspense>
        </div>
    )
}

export default MyComponent;