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

## Image Slider

- A very simple concept and can be asked in various manners.
- First create simple slider
- Make images autoSlide.
- You can also make multiImage slider.

## Pagination

- Pagination is another very important concept in frontend Design.
- There are different ways to do pagination: Frontend pagination, offset(backend) pagination, cursor pagination. There is also alternative to pagination which is infinite scroll.
- Pagination or Infinite Scroll. What to use? It purely depends on use case of your web application. Like for e-commerce pagination is better option because it help in cataloging of items, but on other hand infine scroll is useful for web application where user come without any certain goal just for scrolling like social media. Infinite scrolling make user stick to web app whereas pagination helps user find product quickly.

- Which is better ? Frontend pagination or Offset pagination. FrontEnd pagination gets all the data from one api call and at frontend we have to take care of splitting data in pages, but in offset pagination we call api and get data of next page we want to go. So, initial load time is less in offset pagination.

- Now why we need cursor pagination when we have offset pagination. Suppose, as soon as user click on next page(let's say 2nd page) some new data comes in and appended at start of result and some data in 1st page shifted to 2nd page or some data is deleted from 1st page so some data from page 2 shifted to page 1. This create inconsistencty. To solve this issue we use cursor pagination.

- Cursor Pagination works well with Real Time (dynamic) data eg: social media. Cursor pagination is faster than offset pagination. Why? Bcoz in cursor pagination we direct give the unique value from where we need the data whereas in offset pagination we have to give offset value based of which system will skip those offset value and from there it will send next entries. **Offset pagination is like Linked List where as cursor pagination is like array.**

- Cons of cursor pagination:
- 1. Doesn't keep track of pages
- 2. If you want to sort data that can't be done in cursor pagination
- 3. Little trickier to implement than offset pagination.

## AutoComplete Search Bar

- Here we implemented functionality similar to google search where we enter something in search bar and suggestion comes.
- We have also implemented concept of debouncing and caching which helps in performance optimization

## Real Time Chat application (Youtube live stream)

- First we will discuss the challenges which we have to take care while building this.

- 1. Is this live chat real time or not?

- 2. Suppose there is live stream where there are lacks or crores of users and let say 10,000 of them are messaging at same time. Do we need to show all the message?

- 3. Now suppose a live stream lasted 5 hours or more and somebody is still there from starting. Just think of no of questions which are being rendered on UI for that person. Will it nor freeze the system.

- Answer to above questions are:

- 1. No, the chat is not real time. Suppose we have large users on that live stream and around 1000's of them are commenting in a sec. It is possible for organiser or any other to read all those comments and how much load system have to take to update all comments continuously. So, we can put limit (50 msg per second) to no. of message we will shown on UI. This can be done in frontend and at backend but it will be more feasible to do it in backend because we will avoid overfetching of data if we implement this limit in backend.

- 2. No we don't need to show all the messages. Beacuse the organiser or other users will not be able to read the comments. So it is okay if we fetch comments after some delay using API polling.

- 3. Yes it will freeze the page bcoz every second a large no of <div> tags are getting rendered. So, to solve this problem we will limit our chat window approx to 100 comments. So, as soon as 101th comment comes in the first comment will be removed from DOM. Only last 100 comments will be visible to users. It is very important to handle this case otherwise it could be major performance issue.
