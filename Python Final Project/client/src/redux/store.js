const initialData = {
    subs : [{memberId : 1 , movies:[{movieId : 1}]}],
    users : [{id:1,email:"aaron@gmail.com",password: "123",fname : "Aaron" , lname : "Cohen" ,permission : 
    ["View Subscriptions","Create Subscriptions","Update Subscriptions","Delete Subscriptions","Admin", "Create Movies","Delete Movies","Update Movies","View Movies"]},
    {id:2,email:"moshe@gmail.com",password: "",fname : "Moshe", lname : "Levi",  permission :[]}],
    members : [{id : 1 , name : "Aaron Cohen", email : 'aaron@gmail.com', city : "Jerusalem"}],
    movies : [{id:1,name :"Under the Dome",genres : ["Drama","Science-Fiction","Thriller"], image : "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg" , premiered: '07/01/2014'},
    {id:2,name :"Batman",genres :[]}]
}

const StoreManagment=(state = initialData,action)=>{

  switch (action.type) {
    case "LOADDATA":
      return {
        ...state,
        subs: action.payload.subs,
        users: action.payload.users,
        members: action.payload.members,
        movies: action.payload.movies
    };
    case "ADDSUB":
      return { ...state, subs: [...state.subs, action.payload] }
    case "UPDSUB":
      const index = state.subs.findIndex(elm => elm._id === action.id);
      if (index != -1) {
          state.subs[index] = action.payload;
      }
      return { ...state, subs: state.subs }


    case "DELSUB":
      const doDel1 = state.subs.findIndex(elm => elm.id === action.id);
      if (doDel1 != -1) {
        const updatedSubs = [...state.subs];
        updatedSubs[doDel1].status = "deleted";
        return { ...state, subs: updatedSubs };
      }


    case "ADDUSR":
      return { ...state, users: [...state.users, action.payload] }
    case "UPDUSR":
  
      const index2 = state.users.findIndex(elm => elm.email === action.id);
      if (index2 != -1) {
          state.users[index2] = action.payload;
      }
      return { ...state, users: state.users }



    case "DELUSR":
      // console.log(state.users)
      const doDel2 = state.users.findIndex(elm => elm.email === action.id);
      if (doDel2 != -1) {
        const updatedUsers = [...state.users];
        updatedUsers[doDel2].status = "deleted";
        return { ...state, users: updatedUsers };
      }



    case "ADDMEM":
      return { ...state, members: [...state.members, action.payload] }
    case "UPDMEM":
      const index3 = state.members.findIndex(elm => elm._id === action._id);
      if (index3 != -1) {
          state.members[index3] = action.payload;
      }
      return { ...state, members: state.members }
    case "DELMEM":
     const doDel3 = state.members.findIndex(elm => elm.id === action.id);
      if (doDel3 != -1) {
        const updatedMembers = [...state.members];
        updatedMembers[doDel3].status = "deleted";
        return { ...state, members: updatedMembers };
      }
    case "ADDMOV":
      return { ...state, movies: [...state.movies, action.payload] }
    case "UPDMOV":
      const index4 = state.movies.findIndex(elm => elm._id === action._id);
      if (index4 != -1) {
          state.movies[index4] = action.payload;
      }
      return { ...state, movies: state.movies }
    case "DELMOV":
      const doDel4 = state.movies.findIndex(elm => elm.id === action.id);
      if (doDel4 != -1) {
        const updatedMovies = [...state.movies];
        updatedMovies[doDel4].status = "deleted";
        return { ...state, movies: updatedMovies };
      }
    default:
      return state;
  }
}
export default StoreManagment