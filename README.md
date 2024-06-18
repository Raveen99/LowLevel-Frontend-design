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

## Infinite Scroll

- This is very simple yet important feature to use in frontend to engage user as well improve the performance.
- Three key things to keep in mind for this feature.
- 1. document.body.scrollHeight = This will tell the total scrollable height of page.
- 2. window.innerHeight = This is the height of page visible to user.
- 3. window.scrollY = This is how much user have scrolled the page.
- Keeping this in mind we can easily implement infinite scroll. We will be fetching some data at initial load so, we will add an (scroll) eventListner and we just have to fetch some data again when we reach end of page.
- If (window.innerHeight + window.scrollY >= document.body.scrollHeight) then we will call the same fetch function and append newly fetched data with older one.

## Accordian

- In accordian we learned very important concept of lifting state up.
- What we did here is we have created Accordian component and we will loop over every data we are getting and calling AccordianItem component which will create each accordian.
- One way to built accordian is by taking state variable isOpen in AccordianItem component and have conditional rendering to show accordian body based on isOpen state. In this way each accordian is independent of each other.
- What if we want to close opened accordian when we click on any other accordian. In this case accrodians state can't be independent. So, where to declare state of each accordian. Yes, by lifing state up to its parent component (Accordian) we can achieve the desired result.
- So, we will create state in parent component and pass it to each accordian while calling AccordianItem component. In this way we can control accordians and there behavior depends on other accordians.

## Redit Nested Comments

- This is very simple yet important concept which uses recursion. How we divide problem into smaller problems and solve it.
- code files comments.js and commentbox.js
