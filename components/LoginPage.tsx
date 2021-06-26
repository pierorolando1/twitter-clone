import React from 'react'
import Layout from './Layout'

export const LoginPage = ({ googleOnClick }) => {
    return (
        <Layout title="Login" header={
            <>
                <link href="https://css.gg/mail.css" rel="stylesheet" />
                <link href="https://css.gg/lock.css" rel="stylesheet" />
                <link href="https://css.gg/profile.css" rel="stylesheet" />
            </>
        }>

            <div className="w-screen h-screen overflow-hidden flex justify-center items-center" style={{ background: 'url(https://raw.githubusercontent.com/antoniosarosi/Wallpapers/master/28.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div className="w-full h-full overflow-hidden flex justify-center items-center bg-gray-900 bg-opacity-90" style={{ backdropFilter: 'blur(10px)' }}>
                    <div className="w-full my-2 md:w-3/5 lg:w-2/5">
                        <div className="flex justify-center items-center mt-10 mb-20">
                            <h1 className="text-5xl text-gray-100 font-black uppercase text-center">Tuite-ruvian</h1>
                        </div>
                        <div className="flex my-8 mx-4 md:mx-2 border-b-2 border-gray-600 hover:border-blue-800">
                            <label className="self-center">
                                <i className="gg-mail text-gray-600" />
                            </label>
                            <input className="w-full py-3 pl-5 md:pl-14 border-0 focus:outline-none bg-transparent placeholder-gray-600 text-gray-400" type="email" placeholder="example@example.com" autoComplete="on" required />
                        </div>
                        <div className="flex my-8 mx-4 md:mx-2 border-b-2 border-gray-600 hover:border-blue-800">
                            <label className="self-center">
                                <i className="gg-lock text-gray-600" />
                            </label>
                            <input className="w-full py-3 pl-5 md:pl-14 border-0 focus:outline-none bg-transparent placeholder-gray-600 text-gray-400" type="password" placeholder="password" autoComplete="on" required />
                        </div>
                        <div className="w-full px-2 pb-2">
                            <button className="bg-blue-800 w-full py-2 rounded text-gray-400 hover:bg-blue-700 hover:text-gray-300 transition-all">Ingresar</button>
                        </div>
                        <div className="w-full px-2 py-4">
                            <button onClick={googleOnClick} className="login-with-google-btn w-full">Sign in with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    )
}
