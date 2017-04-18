# Sample State



```js
{
  currentUser: {
    id: 1,
    username: "royce"
  },

  errors: {
    signUp: ["username can't be blank"],
    logIn: ['password is incorrect'],
    createNote: ["body can't be blank"],
    createNoteBook: ["title can't be blank"]
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
