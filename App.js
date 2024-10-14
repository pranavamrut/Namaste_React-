// const heading = React.createElement(
//     "h1",
//      {id: "heading" , xyz:"abc"},    //these id object gives a attribute to a tag
//     "Hello World from React!"
// );

        // const root = ReactDOM.createRoot(document.getElementById("root"));

        // root.render(heading);


// <div id="parent">
//     <div id="child">
//         <h1>I'm h1 tag</h1> If you wants to like these code in react not written in a html file or wants a div and html code then written 
//         <h2>I'm h2 tag</h2>   like a shown below like
//     </div>  

/* <div id="child">
//         <h1>I'm h1 tag</h1> If you wants to like these code in react not written in a html file or wants a div and html code then written 
//         <h2>I'm h2 tag</h2>   like a shown below like
//     </div>   */
// </div>
// You wants to write a so many tags in that tags the data is written that data you wants to see on screen always written in a array
// ReactElement is a (object) ==> HTML(Browser Understands)


const parent = React.createElement( "div",{id:"parent"},[
    React.createElement("div", {id:"child"}, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h1 tag"),
    ]),
    React.createElement("div", {id:"child2"}, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag"),
    ]),

]);


console.log(parent); //object
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(parent);