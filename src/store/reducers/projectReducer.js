const initialState = {
  projects: [{
      id: '1',
      title: 'Project 1',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel dolorem voluptas eaque quam! Enim, fugiat soluta, quaerat asperiores non, omnis minus sit quo voluptatibus nam commodi? Consectetur ad harum fugit.'
    },
    {
      id: '2',
      title: 'Project 3',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel dolorem voluptas eaque quam! Enim, fugiat soluta, quaerat asperiores non, omnis minus sit quo voluptatibus nam commodi? Consectetur ad harum fugit.'
    },
    {
      id: '3',
      title: 'Project 3',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel dolorem voluptas eaque quam! Enim, fugiat soluta, quaerat asperiores non, omnis minus sit quo voluptatibus nam commodi? Consectetur ad harum fugit.'
    }
  ]
}

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('project created', action.payload);
      return state
    case 'CREATE_PROJECT_ERROR':
      console.log('error creating projects', action.payload);
      return state
    default:
      return state
  }
}

export default projectReducer