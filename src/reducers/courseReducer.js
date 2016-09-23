export default function courseReducer(state = [], action){
switch(action.course){
 case 'CREATE_COURSE':
    return [...state,
     Object.assign({},action.course)
   ];
 default:
 return state;
}
}
