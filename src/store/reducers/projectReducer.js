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
  return state
}

export default projectReducer