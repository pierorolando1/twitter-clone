import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../redux/auth/actions'
import Layout from './Layout'
import { motion } from 'framer-motion'
import { Selector } from './Selector'

export const HomePage = ({ user }) => {
    const dispatch = useDispatch()
    return (
        <Layout title={`Home | ${user.displayName}`} header={
            <>
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" />
                <link href="https://css.gg/home-alt.css" rel="stylesheet" />
                <link href="https://css.gg/bell.css" rel="stylesheet" />
                <link href="https://css.gg/mail.css" rel="stylesheet" />
                <link href="https://css.gg/more-o.css" rel="stylesheet" />
                <link href="https://css.gg/image.css" rel="stylesheet" />
                <link href="https://css.gg/layout-list.css" rel="stylesheet" />
                <link href="https://css.gg/comment.css" rel="stylesheet" />
            </>
        }>
            <div className="relative text-center w-full h-screen bg-gray-900 sm:p-10 xl:p-20 overflow-hidden" style={{ background: 'url(https://raw.githubusercontent.com/antoniosarosi/Wallpapers/master/28.jpg)', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <motion.div initial={{ opacity: 0.3 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }} className="grid basegrid w-full h-full bg-gray-900-5 sm:rounded-lg max-h-full overflow-auto" style={{ backdropFilter: 'blur(10px)' }}>
                    <div className="absolute w-full h-8 hidden p-2 sm:flex">
                        <div className="m-1 bg-red-600 w-3 h-3 rounded-full" />
                        <div className="m-1 bg-yellow-500 w-3 h-3 rounded-full" />
                        <div className="m-1 bg-green-600 w-3 h-3 rounded-full" />
                    </div>
                    <div className="h-full w-full overflow-auto">
                        <header className="flex justify-center place-items-center flex-col px-3">
                            <img className="sm:w-16 sm:h-16 w-10 h-10 max-w-none object-cover rounded-full m-0 mt-16" src={user.photoURL} alt="" />
                            <h1 className="text-gray-200 font-medium text-base sm:block hidden">{user.displayName}</h1>
                            <p className="text-sm font-normal text-gray-400 md:block hidden">Sr. Softaware Engineer</p>
                            <button className="my-5 sm:block hidden bg-blue-800 hover:bg-blue-700 text-gray-300 sm:py-2 p-1 px-2 m-3 sm:rounded-lg rounded-full sm:w-full max-w-7rem w-min opacity-95">
                                <h1 className="sm:block hidden">Publicar</h1>
                                <div className="sm:hidden block">
                                    <i className="fas fa-upload" />
                                </div>
                            </button>
                        </header>
                        <div className="py-5">
                            <div className="cursor-pointer flex border-l-4 border-blue-800 font-medium text-sm text-blue-700 items-center justify-center my-5 h-7">
                                <i className="gg-home-alt" />
                                <h1 className="px-2 md:block hidden">Newsfeed</h1>
                            </div>
                            <div className="cursor-pointer flex font-medium text-sm items-center justify-center my-5 h-7 text-gray-500">
                                <i className="gg-bell" />
                                <h1 className="px-2 md:block hidden">Notifications</h1>
                            </div>
                            <div className="cursor-pointer flex font-medium text-sm items-center justify-center my-5 h-7 text-gray-500">
                                <i className="gg-mail" />
                                <h1 className="px-2 md:block hidden">Menssages</h1>
                            </div>
                            {/*TODO borrarlo*/}
                            {/*<button className="bg-red-600 p-1 px-3 text-gray-300 rounded-lg bg-opacity-70 hover:bg-opacity-95" onClick={() => dispatch(startLogout())}>Cerrar sesion</button>*/}
                            <Selector />
                        </div>
                    </div>
                    <div className="bg-gray-900-10 h-full w-full sm:p-5 p-3 pt-10 overflow-auto sm:static fixed top-2/4">
                        <div className="flex sm:hidden">
                            <div className="bg-gray-800 text-gray-400 flex place-items-center px-3 rounded-2xl mr-2 opacity-80 hover:bg-blue-900 cursor-pointer">
                                <i className="text-sm fas fa-align-left" />
                            </div>
                            <input type="text" placeholder="Buscar" className="search opacity-80 transition sm:text-base text-sm bg-gray-800 rounded-2xl focus:rounded-sm focus:outline-none focus:border-blue-900 w-full p-2 px-5 text-gray-400 border-transparent focus:border-b-2 focus:bg-gray-900" />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex place-items-center py-3">
                                <img className="m-2 ml-0 w-8 h-8 max-w-none object-cover rounded-full" src={user.photoURL} alt="" />
                                <h1 className="text-gray-300 font-bold text-sm">{user.displayName}</h1>
                            </div>
                            <div className="flex justify-between flex-wrap">
                                <input type="text" placeholder="Whats on your mind?" className="transition-all rounded-full bg-gray-800 shadow-xl text-gray-300 placeholder-gray-600 py-2 px-4 text-sm outline-none border-gray-900 border pr-6 sm:w-min w-full focus:border-gray-800 focus:py-10 focus:bg-gray-900 focus:mb-3 focus:w-full focus:rounded-lg" />
                                <div className="flex sm:p-0 py-3">
                                    <div className="cursor-pointer mx-1 sm:ml-5 bg-gray-800 hover:bg-blue-900 shadow-lg text-center flex items-center rounded-full w-9 h-9 place-content-center">
                                        <i className="text-gray-500 gg-image" />
                                    </div>
                                    <div className="cursor-pointer mx-1 bg-gray-800 hover:bg-blue-900 shadow-lg text-center flex items-center rounded-full w-9 h-9 place-content-center">
                                        <i className="text-gray-500 gg-layout-list" />
                                    </div>
                                    <div className="cursor-pointer mx-1 bg-gray-800 hover:bg-blue-900 shadow-lg text-center flex items-center rounded-full w-9 h-9 place-content-center">
                                        <i className="text-gray-500 gg-image" />
                                    </div>
                                    <div className="cursor-pointer mx-1 bg-gray-800 hover:bg-blue-900 shadow-lg text-center flex items-center rounded-full w-9 h-9 place-content-center">
                                        <i className="text-gray-500 gg-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-5 flex p-4 bg-blue-800-5 rounded-md hover:shadow-xl">
                            <img className="mx-3 ml-0 w-8 h-8 max-w-none object-cover rounded-full" src="https://www.thesun.co.uk/wp-content/uploads/2021/04/1570372a-afd7-413b-b2ba-952363290742.jpg" alt="" />
                            <div className="flex flex-col">
                                <div className="flex text-gray-500">
                                    <h1 className="text-gray-50 font-bold sm:text-base text-sm">Piero Rolando</h1>
                                    <h1 className="px-1 sm:block hidden">@rolandopiero63</h1>
                                    <h1 className="px-1 sm:hidden block text-xs">@rola...</h1>
                                    <h1 className="sm:block hidden">•</h1>
                                    <h1 className="sm:block hidden px-1">Jun 01</h1>
                                </div>
                                <p className="text-left pt-1 text-gray-300 sm:text-sm text-xs">Este es el baile, este es el ritmo, que a todos encanta, el ritmo del chino. Ya está en la costa, ya llegó a la sierra, también en la selva, el ritmo del chino. Y se baila así,y se mueve así, el ritmo del chino es del Perú 2000, y te gusta a ti y me gusta a mi, el ritmo del chino es del Perú 2000. Chino, chino, chino, chino, chino, chino, chino. Y se baila así,y se mueve así, el ritmo del chino es del Perú 2000. y te gusta a ti y me gusta a mi, el ritmo del chino es del Perú 2000. Todo el pueblo quiere, el ritmo del chino, el Perú prefiere el ritmo del chino.</p>
                                <div className="flex justify-between text-gray-500 sm:text-base text-xs">
                                    <div className="cursor-pointer flex place-items-center rounded-3xl p-1 px-3 hover:text-blue-600">
                                        <i className="far fa-comment-dots pr-2" />
                                        <h1>2.3k</h1>
                                    </div>
                                    <div className="cursor-pointer flex place-items-center rounded-3xl p-1 px-3 hover:text-green-600">
                                        <i className="fas fa-retweet pr-2" />
                                        <h1>5.3k</h1>
                                    </div>
                                    <div className="cursor-pointer flex place-items-center rounded-3xl p-1 px-3 hover:text-red-600">
                                        <i className="far fa-heart pr-2" />
                                        <h1>10.9k</h1>
                                    </div>
                                    <div className="cursor-pointer flex place-items-center rounded-3xl p-1 px-3 hover:text-blue-600">
                                        <i className="fas fa-external-link-alt" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-900-10 h-full w-full lg:block hidden pt-16 p-6 overflow-auto">
                        <h1 className="text-gray-700 uppercase font-bold text-left text-sm py-1">Top topics</h1>
                        <div className="py-3">
                            <h1 className="text-xs text-left text-gray-600">Trending in Peru</h1>
                            <h1 className="text-left font-bold text-gray-100">Vizcarra</h1>
                            <h1 className="text-xs text-left text-gray-600">40.7k Tweets</h1>
                        </div>
                        <div className="py-3 cursor-pointer">
                            <h1 className="text-xs text-left text-gray-600">Trending in Peru</h1>
                            <h1 className="text-left font-bold text-gray-100">Piero Rolando</h1>
                            <h1 className="text-xs text-left text-gray-600">40.7k Tweets</h1>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Layout>
    )
}
