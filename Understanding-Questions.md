# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The Component button executes the handleclick
* The handle click executes the dispatch with the addOne action
* Add one action sets the state type to ADD_ONE
* The ADD_ONE case type changes the state total to plus 1
* TotalDisplay shows the total plus 1.
