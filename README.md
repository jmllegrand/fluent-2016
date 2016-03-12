
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

### about general tooling 
#### Live reload (hot reloading)

* Using Webpack Hot Module Replacement (https://webpack.github.io/docs/hot-module-replacement.html)
* react-transform-hmr

Tutorial : http://matthewlehner.net/react-hot-module-replacement-with-webpack/


#### code style 

standard https://github.com/feross/standard



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
Problem: this method declaration kills hot loading 

To compare the first 2 declarations, see https://toddmotto.com/react-create-class-versus-component/
