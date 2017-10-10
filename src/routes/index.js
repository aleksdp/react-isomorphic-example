import App from '../components/App'
import Home from '../views/Home'
import Test from '../views/Test'


const routes = [
    {
        component: App,
        routes: [
            {
                path: '/',
                component: Home,
                preload: () => console.log('preload at Home'),
                routes: [
                    {
                        path: '/test',
                        component: Test,
                        preload: () => new Promise(res => {
                            setTimeout(() => {
                                console.log('preload at Test')
                                res()
                            }, 1000)
                        })
                    }
                ]
            },
        ]
    }
]


export {
    routes as default
}
