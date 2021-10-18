import store from './store';
import { bugAdded, bugRemoved, bugResolved } from './actions';

const unsuscribe = store.subscribe(() => {
    console.log('Store changed', store.getState());
})

store.dispatch(bugAdded("bug 11"))
store.dispatch(bugResolved(1))
store.dispatch(bugRemoved(1))

unsuscribe();

const li = [1,2,3]
const newLi = li.filter(i => i !== 2)
console.log(newLi)
console.log(li)


