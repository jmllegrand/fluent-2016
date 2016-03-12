
goal: build an application based on a **static asset** host on a apache web server

###  about redux
* facebook initially build / use react
* they talk about flux archi, architecture based, to maintain state, on one way direction as opposed to have 2 have ways
* a lot of flux implementation
* dan a has written redux
* 2 kbytes min, a finished product today

as a user, you write a lot of js: when you write a reducer is a plain function with is no external dependancies

Reasons for any interest in redux

* the difference with the existing solution use in angularjs


###  about npm
if we would have started from scratch, you end end with a package json file

```
npm init
```

```
npm run lint
```


```
npm run cmd_of_script
```

by default

```
npm start
```

```
npm test
```

Avoid to have global dependancies


### about webpack

Extremely powerful but the configuration is challenging 

* run in live mode
* run a build script

using hjs to hide the complexity

```  
module.exports = getConfig({
  in: 'src/root.js',
  out: 'public',
  clearBeforeBuild: '!(images|static)'
})
```  
when called, getConfig() returns a full configurated webpack 

```  
npm build
```

* entry point of the application
* the outcome of the application when runnning npm build
* an option to control wether to wipe out the public directory 

Webpack takes care of the application assets like css 

```  
import './styles/main.css'
```

### about general tooling 
#### Live reload (hot reloading)

* Using Webpack Hot Module Replacement (https://webpack.github.io/docs/hot-module-replacement.html)
* react-transform-hmr

Tutorial : http://matthewlehner.net/react-hot-module-replacement-with-webpack/


#### code style 

standard https://github.com/feross/standard

#### surge
a static app hosting service for quick demo project
very little configuration
create the 200.html
The routing route 
- 200 
- 400
QUESTION: how do you add html to have the file in the public folder
TODO blog about it

the power to have static application


### about es6 feature used 
#### es6 destructuring

With funcions   
```    
    import {render} from 'react-dom'
```

With objects   

#### arrow function
http://www.javascriptkit.com/javatutors/javascriptarrowfunctions.shtml

```
const Hello = React.createClass({
  render () {
    return <div> Hello world with ES6</div>
  }
})
```

is equivalent to  ...

```
const Hello = React.createClass({
  render () (<div> Hello world with ES6</div>)
})
```


#### const vs let

const: it does not make the object immutable

TIPS: 

* using const for anything that the variable is not reassigning, 
* let will only be used if reassigned
* var is no longer used

### about react 
#### create component
3 ways to create a component

* createClass() method

```
const Hello = React.createClass({
  render () {
    return <div> Hello world with ES6</div>
  }
})
```

* class

```
class Hello2 extends Component {
  render () {
    return <div> Hello world with ES6 using Component syntax </div>
  }
}
```

* stateless functionnal component

```
const Hello3 = (props) => {
  return (
    <div> Hello world, SF,  from {props.name}</div>
  )
}
```
Problem: this method declaration kills the hot loading feature

the way recommended by facebook

To compare the first 2 declarations, see https://toddmotto.com/react-create-class-versus-component/

### about code organisation

there is no need to have index.html

root.js

* where the app hit the browser
* where the style will get imported

app.js

* the definition of the app component
* the component does not care how it get loaded, it is the responsability of root.js

### about universal application & performance
Basic idea: if you are single app page, why don't u run the appp on the server. This will avoid the white page 
death while 500k  download for ember
Most cases, we don't need it 
Be careful with the reference to the global context (window) that won't be applicable on the server. This  will 
add a complexity to the code to handle the Run on Server
You don't need to be too ...
Exception:

A lot more interest in performance than it used to be 
Performance budget for google plus rewritten based

* 60kb, 60 frame a second
* 42kb react + 2 kb redux
* latency of XX
They did it ...

With 60kb, it eleminates most of the framework (ember, angular); redux is beautiful small with 2kb
react-router is 12 kb

Not everybody is running under macbookpro on wifi
you need to take this into consideration 

at starbucks, we have a size of 100 Kb
arguments between the designer with custom font
Product owner: proove me that is worth on conversion rate
see pocket size application talk from dotjs in paris

with these frameworks, we trying to much in the name of the developper experience.

concept: run the static file on the server

2 metrics to take in consideration

**
** 

about caching 

