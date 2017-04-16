# Sample State

Create a basic illustration of your state shape. Think about what information you need to store for your app to work, and how best to organize it to minimize duplication and maximize ease of access.

```js
{
  currentUser: {
    id: 1,
    username: "royce"
  },

  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createNote: {errors: ["body can't be blank"]},
    createNoteBook: {errors: ["title can't be blank"]}
  },

  notes: {
    1: {
      id: 1,
      author_id: 1,
      notebook_id: 5,
      title: "new note",
      body: "hello this is a new note within a notebook"
      tags: {
        1: {
          id: 1,
          name: "fresh"
        }
      }
    }
  },

  notebooks: {
    5: {
      title: 'First notebook',
      author_id: 1,
      description: 'Planning is hard'
    }
  },

  modal: {
    content: <SignUpForm />,
    active: false
  }
}
```
