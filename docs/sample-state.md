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

  notebook: {
    title: 'First notebook',
    author_id: 1,
    description: 'Planning is hard',
    id: 5,
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
    },
    2: {
      id: 2,
      author_id: 1,
      notebook_id: 3,
      title: "second note",
      body: "hello this is a new note within a notebook"
      tags: {
        2: {
          id: 2,
          name: "yes"
        }
      }
    }
  },

  notebooks: {
    5: {
      title: 'First notebook',
      author_id: 1,
      description: 'Planning is hard',
      id: 5
    },
    3: {
      title: 'Second notebook',
      author_id: 1,
      description: 'Planning is hard',
      id: 3
    }
  },

  slideout: {
    notebook || tag
  },

  modal: {
    content: <SignUpForm />,
    active: false
  }
}
```
