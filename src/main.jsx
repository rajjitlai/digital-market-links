import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Toaster />
        <RouterProvider router={router}
            future={{ v7_startTransition: true, v7_relativeSplatPath: true, }}
        />
    </React.StrictMode>
);
