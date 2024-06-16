# In this project we will discuss lowLevel frontend system design concepts.

## Shimmer UI

- Shimmer UI is concept where when we load a web application, instead of blank screen or boring loader we show user what kind of content can be shown like we will create empty cards shimmer if the page will load different card like in e-commerce, food restaurant websites.

- This help user to engage and increase curosity of user that what might be coming.

## Routing

- In React we do routing using react-router-dom library.

- One important concept is protected route. We create wrapper(logic to protect route) component and wrap it around those routes which we want to protect and don't want user to use until unless user is not authorised or authenticated for this.

- Eg: Before placing order in e-comm website we want user to sign in. So we redirect user to login page.

## Multi Language Support

- In Frontend there is one concept of **config driven** ui where ui changes according to requirement, region etc.. Config-driven UI is a technique that allows you to create user interfaces based on a configuration file, such as JSON, or a TypeScript file that defines the layout and content of the UI components. This can be useful for creating dynamic and customizable UIs without hard coding them.

- We create config file which comes from backend and basically is a json file which defines what data should be displayed based on conditions like requirement(any special sale), region(different region different UI like swiggy)

- In this project we implemented multi language support which is also kind of config driven UI. We have created(hard coded) our langConfig.js file where we have created json structure and data in out about us page will be changed based on the language selected.
