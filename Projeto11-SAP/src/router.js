export class Router{
    routes = {}

    addRoutes(routeName, page){
        this.routes[routeName] = page;
    }

    route(event){
        const eventInScreen = event || window.event;
        eventInScreen.preventDefualt();

        window.history.pushState({},"",eventInScreen.target.href);

        this.handle()
    }

    handle(){
        const {pathname} = window.location;
        const route = this.routes[pathname] || this.routes[404];
        console.log(route);
        fetch(route)
        .then((data)=>data.text())
        .then(html=>{
            document.querySelector("#app").innerHTML = html;
        })
    }
}