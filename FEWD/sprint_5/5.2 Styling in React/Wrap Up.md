# **Wrap Up**

## What did you learn?

In this concept, we have learnt how to style React components. We looked at inline styles to add to components. Next, we learnt about Radium, a library package which helps add pseudo selectors to inline styles. Finally, we learnt about CSS Modules, a modular style of adding CSS styles.


## Key takeaways

•	We can add styles to React components using inline CSS or through external stylesheets.

•	For inline CSS, we have to create a JS object which will then be fed to the React component.

•	Since we are creating JS objects, we have to use camel-casing for naming properties like backgroundColor for background-color.

•	However, we cannot use pseudo-selectors like hover, focus, blur, etc. in such objects.

•	For that, we make use of a package called Radium which enables pseudo selectors in JS objects.

•	External stylesheets can be used as traditional CSS styling.

•	However, if we have to use styles for multiple components, it involves making changes at multiple places and multiple times.

•	To enable efficiency, a package called CSS modules enable modularization of styles.

•	CSS Modules creates hashed unique files for every component file.


## How will it help the project?

Thanks to CSS Modules, all the styles now will live in one place and only apply to a particular component and no one else.

Imagine having to add styles to the bottom of a stylesheet and making a big unorganized mess? CSS Modules helps resolve that.