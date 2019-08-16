1. What problem does the context API help solve?
It simplifies state management by providing a way to share values between components without having to explicity pass props through the entire tree.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
A reducer is a function that takes two arguments, current state and action, and returns a new state object based on them. The store is a single immutable state tree in redux where all state changes are handled explicitly by actions, which is why it is known as the 'single source of truth' in a redux application. An action is represented by an object and contains properties related to an action that occurs in the app. Each action has a type property that lets the reducer know what happend in the app, and thus the part of the state that needs to change.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
The difference is that in application state the programmer never writes to the store object, when changes are made. The object is merely cloned, modified, and replaces the original state in a new copy, as the original store object is immutable. It is better to use application state any time you are working a massive scale like Facebook does because it abstracts away from the DOM. 

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
It is a middleware that gives a program the ability to use ansynchronous operations inside action creators. At its most basic level, a thunk is a function that is returned by another. An action creator is an input or action that triggers a reducer to move to the next state. Thunk intercepts every action creator before it flows to the reducer. It makes the flow asynchronous so we can make API calls.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
I think Redux is interesting because it has one single source of truth.
