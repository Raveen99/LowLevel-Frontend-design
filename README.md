# In this project we will discuss lowLevel frontend system design concepts.

## Shimmer UI

- Shimmer UI is concept where when we load a web application, instead of blank screen or boring loader we show user what kind of content can be shown like we will create empty cards shimmer if the page will load different card like in e-commerce, food restaurant websites.

- This help user to engage and increase curosity of user that what might be coming.

## Routing

- In React we do routing using react-router-dom library.

- One important concept is protected route. We create wrapper(logic to protect route) component and wrap it around those routes which we want to protect and don't want user to use until unless user is not authorised or authenticated for this.

- Eg: Before placing order in e-comm website we want user to sign in. So we redirect user to login page.
