# Sample State



```js
{
  session: {
    id: 1,
    username: "royce"
  },

  errors: {
    login: ["username can't be blank"]
    signup: ["username already taken"]
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

  notebook: {
    title: 'First notebook',
    author_id: 1,
    description: 'Planning is hard',
    id: 5
  },

  note: {
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
  },

  notebooks: {
    5: {
      title: 'First notebook',
      author_id: 1,
      description: 'Planning is hard',
      id: 5
    }
  },

  modal: {
    content: <SignUpForm />,
    active: false
  }
}
```
